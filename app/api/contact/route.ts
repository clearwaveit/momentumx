import { NextResponse } from "next/server";
import { sendBrevoEmail } from "../../../lib/brevo-email";
import {
  getClientIp,
  isAllowedOrigin,
  isBodyTooLarge,
  isEmailRateLimited,
  isHoneypotFilled,
  isIpRateLimited,
  validateContactPayload
} from "../../../lib/contact-security";
import { adminContactTemplate } from "../../../lib/emails/adminContactTemplate";
import { userConfirmationTemplate } from "../../../lib/emails/userConfirmationTemplate";

export const runtime = "nodejs";

const SUCCESS_MESSAGE = "Thanks — your message has been sent.";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return json({ success: false, message: "Forbidden origin." }, 403);
  }

  if (isBodyTooLarge(request.headers.get("content-length"))) {
    return json({ success: false, message: "Request is too large." }, 413);
  }

  if (isIpRateLimited(getClientIp(request))) {
    return json({ success: false, message: "Too many requests. Please try again later." }, 429);
  }

  let raw: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return json({ success: false, message: "Invalid request." }, 400);
    }
    raw = parsed as Record<string, unknown>;
  } catch {
    return json({ success: false, message: "Invalid request." }, 400);
  }

  // Bots that fill the hidden field get a fake success so they do not retry.
  if (isHoneypotFilled(raw.website)) {
    return json({ success: true, message: SUCCESS_MESSAGE, confirmationEmailSent: false });
  }

  const validated = validateContactPayload(raw);
  if (!validated.ok) {
    return json({ success: false, message: validated.error }, 400);
  }

  const { name, email, company, projectDetails } = validated.data;

  if (isEmailRateLimited(email)) {
    return json({ success: false, message: "Too many requests. Please try again later." }, 429);
  }

  const toEmail = process.env.TO_EMAIL?.trim();
  if (!toEmail) {
    return json({ success: false, message: "Contact recipient is not configured." }, 500);
  }

  // replyTo (not sender): the envelope stays the verified Brevo address,
  // while Reply in the team inbox goes to the submitter.
  const adminResult = await sendBrevoEmail({
    to: [{ email: toEmail }],
    subject: `New enquiry — ${name}`,
    htmlContent: adminContactTemplate({ name, email, company, projectDetails }),
    replyTo: { email, name }
  });

  if (!adminResult.ok) {
    console.error("Brevo admin email failed:", adminResult.error);
    return json(
      { success: false, message: "Unable to send your message right now. Please try again." },
      502
    );
  }

  let confirmationEmailSent = false;
  try {
    const confirmationResult = await sendBrevoEmail({
      to: [{ email, name }],
      subject: "We received your enquiry — MomentumX",
      htmlContent: userConfirmationTemplate({ name })
    });
    confirmationEmailSent = confirmationResult.ok;
    if (!confirmationResult.ok) {
      // The enquiry already reached the team; do not fail the submission.
      console.warn("Brevo confirmation email failed:", confirmationResult.error);
    }
  } catch (error) {
    console.warn("Brevo confirmation email failed:", error);
  }

  return json({
    success: true,
    message: SUCCESS_MESSAGE,
    confirmationEmailSent
  });
}
