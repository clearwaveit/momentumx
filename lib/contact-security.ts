const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 32 * 1024;
const IP_WINDOW_MS = 15 * 60 * 1000;
const IP_LIMIT = 5;
const EMAIL_WINDOW_MS = 60 * 60 * 1000;
const EMAIL_LIMIT = 3;

type RateBucket = { count: number; resetAt: number };

const ipBuckets = new Map<string, RateBucket>();
const emailBuckets = new Map<string, RateBucket>();

export function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replaceAll("\0", "").trim().slice(0, maxLength);
}

export function isHoneypotFilled(website: unknown) {
  // Hidden field; only bots typically fill it. The route reports success and sends nothing.
  return typeof website === "string" && website.trim() !== "";
}

export function validateContactPayload(raw: Record<string, unknown>) {
  const name = sanitizeText(raw.name, 120);
  const email = sanitizeText(raw.email, 254).toLowerCase();
  const company = sanitizeText(raw.company, 160);
  const projectDetails = sanitizeText(raw.projectDetails, 5000);
  const website = sanitizeText(raw.website, 200);

  if (!name) {
    return { ok: false as const, error: "Please enter your name." };
  }

  if (!email) {
    return { ok: false as const, error: "Please enter your email address." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  if (!projectDetails) {
    return { ok: false as const, error: "Please tell us about your project." };
  }

  if (raw.consent !== true) {
    return { ok: false as const, error: "Please confirm we can contact you about this enquiry." };
  }

  return {
    ok: true as const,
    data: { name, email, company, projectDetails, website }
  };
}

export function isBodyTooLarge(contentLengthHeader: string | null) {
  const length = Number.parseInt(contentLengthHeader ?? "", 10);
  return Number.isFinite(length) && length > MAX_BODY_BYTES;
}

export function getClientIp(request: Request) {
  // Clients can set these headers freely; only trust them behind a real proxy.
  if (process.env.TRUST_PROXY !== "true") {
    return "unknown";
  }

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(store: Map<string, RateBucket>, key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || now >= existing.resetAt) {
    store.delete(key);
    store.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (existing.count >= limit) {
    return true;
  }

  existing.count += 1;
  return false;
}

export function isIpRateLimited(ip: string) {
  // next dev has no proxy, so every request shares the "unknown" bucket.
  if (process.env.NODE_ENV !== "production") {
    return false;
  }

  return isRateLimited(ipBuckets, ip, IP_LIMIT, IP_WINDOW_MS);
}

export function isEmailRateLimited(email: string) {
  return isRateLimited(emailBuckets, email.toLowerCase(), EMAIL_LIMIT, EMAIL_WINDOW_MS);
}

export function isAllowedOrigin(request: Request) {
  // Local testing has no production origin set; skip so next dev works without env.
  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  const allowed = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!allowed) {
    return false;
  }

  const originHeader = request.headers.get("origin");
  let origin = originHeader?.replace(/\/$/, "") ?? "";

  if (!origin) {
    const referer = request.headers.get("referer");
    if (referer) {
      try {
        origin = new URL(referer).origin.replace(/\/$/, "");
      } catch {
        origin = "";
      }
    }
  }

  return origin === allowed;
}
