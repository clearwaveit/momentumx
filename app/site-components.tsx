"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { navItems } from "./site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="siteHeader">
      <a className="logo" href="/" aria-label="MomentumX home">
        MomentumX
      </a>
      <nav className={menuOpen ? "nav isOpen" : "nav"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className="menuButton" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? "close" : "menu"}
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer sectionPad" id="news">
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div>
        <h3>Dubai Office</h3>
        <p>605, Tower A, Empire Heights, Business Bay, Dubai</p>
        <a className="textLink" href="https://maps.app.goo.gl/2wv4CWYZo7KxQvYM8">
          Get Directions
        </a>
        <a className="textLink" href="/careers">
          Careers
        </a>
        <a className="textLink" href="/book-meeting">
          Plan Appointment
        </a>
      </div>
      <div>
        <h3>Get in touch</h3>
        <p>hello@momentumx.com</p>
        <p>+971 04 569 3033</p>
        <p className="tagline">digital services with Momentum heritage</p>
      </div>
    </footer>
  );
}

export function MediaBlock({
  image,
  video,
  className = ""
}: {
  image: string;
  video?: string;
  className?: string;
}) {
  useEffect(() => {
    document.querySelectorAll("video").forEach((videoEl) => {
      videoEl.play().catch(() => undefined);
    });
  }, []);

  return (
    <div className={`detailMedia ${className}`}>
      <img src={image} alt="" />
      {video ? <video src={video} autoPlay muted loop playsInline preload="metadata" /> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  summary
}: {
  eyebrow?: string;
  title: string;
  summary?: string;
}) {
  return (
    <section className="subHero sectionPad reveal">
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h1>{title}</h1>
      {summary ? <div className="subHeroSummary">{summary}</div> : null}
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="ctaBand sectionPad">
      <p>Ready to elevate your digital presence?</p>
      <h2>Book your digital consultation</h2>
      <a className="buttonLink" href="/book-meeting">
        book a slot
      </a>
    </section>
  );
}

export function AutoRail({ children, className = "caseRail" }: { children: ReactNode; className?: string }) {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const timer = window.setInterval(() => {
      if (rail.matches(":hover")) {
        return;
      }

      const maxScroll = rail.scrollWidth - rail.clientWidth;
      if (maxScroll <= 0) {
        return;
      }

      if (rail.scrollLeft >= maxScroll - 8) {
        rail.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        rail.scrollBy({ left: Math.max(rail.clientWidth * 0.36, 280), behavior: "smooth" });
      }
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`${className} autoRail`} ref={railRef}>
      {children}
    </div>
  );
}
