"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { navItems } from "./site-data";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = [
      ...document.querySelectorAll<HTMLElement>("main > section, main > article, main > footer")
    ];
    const slides = [...document.querySelectorAll<HTMLElement>(".caseGallery figure")];

    if (!sections.length && !slides.length) {
      return;
    }

    const markVisible = (element: Element) => {
      element.classList.add("isInView");
    };

    const inView = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            inView.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((element) => {
      if (element.classList.contains("caseGallery")) {
        markVisible(element);
        return;
      }

      const rect = element.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 48;

      if (alreadyVisible) {
        markVisible(element);
      } else {
        inView.observe(element);
      }
    });

    slides.forEach((slide) => inView.observe(slide));

    return () => inView.disconnect();
  }, [pathname]);

  return null;
}

export function SiteHeader({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Past the first viewport-ish scroll the bar sticks, then hides on the way
  // down and reveals on the way up.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const read = () => {
      frame = 0;
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;

      setStuck(y > 120);
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 240);
        lastY = y;
      }
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(read);
      }
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setMenuOpen((open) => !open);
  };

  const overlay = (
    <nav
      className={menuOpen ? "navOverlay isOpen" : "navOverlay"}
      aria-label="Mobile navigation"
      aria-hidden={!menuOpen}
    >
      <div className="navOverlayBar">
        <a className="logo" href="/" aria-label="MomentumX home" onClick={closeMenu}>
          MomentumX
        </a>
        <button type="button" className="menuButton" onPointerUp={closeMenu}>
          close
        </button>
      </div>
      <div className="navOverlayLinks">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      <header
        className={[
          "siteHeader",
          variant === "solid" ? "isSolid" : "",
          stuck ? "isStuck" : "",
          stuck && hidden && !menuOpen ? "isHidden" : ""
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <a className="logo" href="/" aria-label="MomentumX home">
          MomentumX
        </a>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button type="button" className="menuButton" onPointerUp={toggleMenu}>
          menu
        </button>
      </header>
      {mounted ? createPortal(overlay, document.body) : null}
    </>
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
        <div className="footerLinks">
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
      </div>
      <div>
        <h3>Get in touch</h3>
        <p>hello@momentumx.com</p>
        <p>+971 04 569 3033</p>
        <p className="tagline">Momentum gives us the experience. MomentumX adds the intelligence.</p>
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
      <p>have a challenge worth transforming?</p>
      <h2>Let&apos;s build what&apos;s next.</h2>
      <p className="ctaCopy">
        From an AI opportunity to a complete digital platform, talk to us about your next
        transformation initiative.
      </p>
      <a className="buttonLink" href="/enquiry">
        start a conversation
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

    const getStep = () => {
      const card = rail.querySelector<HTMLElement>(":scope > *");
      const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 0;
      return (card?.getBoundingClientRect().width ?? Math.max(rail.clientWidth * 0.36, 280)) + gap;
    };

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
        rail.scrollBy({ left: getStep(), behavior: "smooth" });
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

export function CaseGallery({
  items
}: {
  items: { title: string; body?: string; image: string }[];
}) {
  return (
    <section className="caseGallery sectionPad">
      {items.map((media, index) => (
        <figure key={media.title}>
          <img src={media.image} alt={media.title} />
          <figcaption>
            {String(index + 1).padStart(2, "0")}: {media.title}
            {media.body ? ` - ${media.body}` : ""}
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
