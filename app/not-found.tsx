import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./site-components";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true }
};

const LINKS = [
  { label: "services", href: "/services", note: "AI, automation, data and digital platforms" },
  { label: "work", href: "/cases", note: "Selected case studies" },
  { label: "insights", href: "/blog", note: "Practical guides for leaders" },
  { label: "contact", href: "/contact-us", note: "Talk to the team" }
];

export default function NotFound() {
  return (
    <main className="notFoundPage">
      <SiteHeader variant="solid" />
      <section className="notFound">
        <p className="notFoundCode" aria-hidden="true">
          404
        </p>
        <div className="notFoundCopy">
          <p className="notFoundEyebrow">page not found</p>
          <h1>this page has moved on, or never existed.</h1>
          <p>The link may be out of date or mistyped. These are good places to pick up from.</p>
          <a className="notFoundHome" href="/">
            back to the homepage
            <svg viewBox="0 0 40 12" aria-hidden="true" focusable="false">
              <path d="M0 6h36m0 0L30 1m6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <ul className="notFoundLinks">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                <strong>{link.label}</strong>
                <span>{link.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <SiteFooter />
    </main>
  );
}
