// Canonical site address. Set NEXT_PUBLIC_SITE_URL on the host; the fallback keeps
// sitemap, canonical and share URLs correct if it is missing.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://momentumxme.com").replace(/\/$/, "");

export const SITE_NAME = "MomentumX";

export const SITE_DESCRIPTION =
  "MomentumX is a digital & AI transformation company in the Middle East, helping organisations find where technology creates real value, then design, build and run the solutions that deliver it.";

// Utility pages served by app/[...slug] that should be indexed. Anything else that
// route renders (fallback text pages, placeholder career listings) is kept out.
export const INDEXED_UTILITY_PATHS = [
  "about-us",
  "industries",
  "contact-us",
  "enquiry",
  "book-meeting",
  "privacy-policy",
  "terms-and-conditions"
];
