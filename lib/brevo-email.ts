type BrevoAddress = {
  email: string;
  name?: string;
};

type SendBrevoEmailPayload = {
  to: BrevoAddress[];
  subject: string;
  htmlContent: string;
  replyTo?: BrevoAddress;
};

type SendBrevoEmailResult =
  | { ok: true; messageId?: string }
  | { ok: false; error: string; status?: number };

export async function sendBrevoEmail(
  payload: SendBrevoEmailPayload
): Promise<SendBrevoEmailResult> {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const fromEmail = process.env.BREVO_FROM_EMAIL?.trim();
  const fromName = process.env.BREVO_FROM_NAME?.trim() || "MomentumX";

  if (!apiKey || !fromEmail) {
    return {
      ok: false,
      error: "Brevo is not configured (BREVO_API_KEY / BREVO_FROM_EMAIL)."
    };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        sender: { email: fromEmail, name: fromName },
        to: payload.to,
        subject: payload.subject,
        htmlContent: payload.htmlContent,
        ...(payload.replyTo ? { replyTo: payload.replyTo } : {})
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return { ok: false, status: response.status, error };
    }

    const data = (await response.json().catch(() => null)) as { messageId?: string } | null;
    return { ok: true, messageId: data?.messageId };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Network error"
    };
  }
}
