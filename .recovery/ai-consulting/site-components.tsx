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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
      <header className="siteHeader">
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

export function CollaborationSlider({
  slides
}: {
  slides: {
    title: string;
    body: string;
    tags: string[];
    image: string;
  }[];
}) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const slide = slides[index] ?? slides[0];

  const goTo = (next: number) => {
    if (fading || slides.length < 2) {
      return;
    }

    setFading(true);
    window.setTimeout(() => {
      setIndex((next + slides.length) % slides.length);
      setFading(false);
    }, 220);
  };

  if (!slide) {
    return null;
  }

  return (
    <section className="figmaCollaboration">
      <div className="figmaCollaborationBg">
        {slides.map((item, slideIndex) => (
          <img
            key={item.image + item.title}
            src={item.image}
            alt=""
            className={slideIndex === index ? "isActive" : undefined}
          />
        ))}
      </div>
      <div className="figmaCollaborationInner sectionPad">
        <div className="figmaCollaborationHead">
          <div>
            <h2>delivered work and transformation concepts</h2>
            <p>featured engagements</p>
          </div>
          <p>
            Relevant delivered work is combined with clearly labelled MomentumX Lab and transformation concepts.
          </p>
        </div>
        <article>
          <div className={fading ? "figmaCollaborationCopy isFading" : "figmaCollaborationCopy"}>
            <h3>{slide.title}</h3>
            <p>{slide.body}</p>
            <div className="figmaCollaborationTags">
              {slide.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="figmaCollaborationArrows">
            <button
              type="button"
              aria-label="Previous engagement"
              disabled={fading}
              onClick={() => goTo(index - 1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next engagement"
              disabled={fading}
              onClick={() => goTo(index + 1)}
            >
              →
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export function CapabilityAccordion({
  items
}: {
  items: {
    title: string;
    body: string;
    images: [string, string];
  }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const arrowIcon = "/assets/figma/service-detail/arrow-icon.svg";

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="figmaCapabilityList">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.title}
            className={open ? "figmaCapabilityItem isOpen" : "figmaCapabilityItem"}
          >
            {open ? (
              <article className="figmaCapabilityLead">
                <div>
                  <em className="figmaCapabilityNumber">{String(index + 1).padStart(2, "0")}</em>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="figmaCapabilityImages">
                  <button
                    type="button"
                    className="figmaCapabilityIcon isOpen"
                    aria-label={`Collapse ${item.title}`}
                    aria-expanded={true}
                    onClick={() => toggle(index)}
                  >
                    <img src={arrowIcon} alt="" />
                  </button>
                  <img src={item.images[0]} alt="" />
                  <img src={item.images[1]} alt="" />
                </div>
              </article>
            ) : (
              <button
                type="button"
                className="figmaCapabilityTrigger"
                aria-expanded={false}
                onClick={() => toggle(index)}
              >
                {item.title}
                <span className="figmaCapabilityIcon" aria-hidden="true">
                  <img src={arrowIcon} alt="" />
                </span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
