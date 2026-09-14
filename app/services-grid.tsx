"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

export type ServiceGridItem = {
  slug: string;
  title: string;
  image: string;
};

// Mirrors aquest.it's "Our services" grid-list. Hover is one timeline that
// plays forward on enter and reverses on leave, like their GSAP timeline:
// the cover flies in from translate(300%) scale(3) with expo.out over 0.8s,
// title words roll black -> yellow-marked with circ.inOut over 0.5s (0.1s spread
// across the words), and "discover more" + arrow slide in on the same curve.
const HOVER_QUERY = "(min-width: 1024px) and (hover: hover)";
const TIMELINE = 0.8;
const COVER_DURATION = 0.8;
const ROLL_DURATION = 0.5;
const WORD_SPREAD = 0.1;

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);
const expoOut = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const circInOut = (t: number) =>
  t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;

function Words({ text }: { text: string }) {
  const words = text.split(" ");

  return words.map((word, index) => (
    <span key={`${word}-${index}`}>
      <span className="svcGridMask">
        <span className="svcGridWord">{word}</span>
      </span>
      {index < words.length - 1 ? " " : null}
    </span>
  ));
}

function ServiceCard({ service, index }: { service: ServiceGridItem; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) {
      return;
    }

    const hover = window.matchMedia(HOVER_QUERY);
    const cover = card.querySelector<HTMLElement>(".svcGridVideo");
    const black = [...card.querySelectorAll<HTMLElement>(".svcGridTitle--black .svcGridWord")];
    const accent = [...card.querySelectorAll<HTMLElement>(".svcGridTitle--accent .svcGridWord")];
    const slides = [...card.querySelectorAll<HTMLElement>(".svcGridLinkText p, .svcGridLinkIcon svg")];
    const animated = [cover, ...black, ...accent, ...slides].filter((element): element is HTMLElement => !!element);
    const wordDelay = black.length > 1 ? WORD_SPREAD / (black.length - 1) : 0;

    let time = 0;
    let direction = 0;
    let frame = 0;
    let last = 0;

    const render = () => {
      const flight = expoOut(clamp(time / COVER_DURATION));
      if (cover) {
        cover.style.transform = `translate(${(1 - flight) * 300}%, 0%) scale(${3 - 2 * flight})`;
      }

      black.forEach((word, wordIndex) => {
        const roll = circInOut(clamp((time - wordIndex * wordDelay) / ROLL_DURATION));
        word.style.transform = `translate3d(0, ${-120 * roll}%, 0)`;
        if (accent[wordIndex]) {
          accent[wordIndex].style.transform = `translate3d(0, ${120 * (1 - roll)}%, 0)`;
        }
      });

      const slide = circInOut(clamp(time / ROLL_DURATION));
      slides.forEach((element) => {
        element.style.transform = `translate3d(${-100 * (1 - slide)}%, 0, 0)`;
      });
    };

    // Back at rest the CSS rest state takes over again.
    const clear = () => {
      animated.forEach((element) => element.style.removeProperty("transform"));
    };

    const tick = (now: number) => {
      time = Math.min(Math.max(time + ((now - last) / 1000) * direction, 0), TIMELINE);
      last = now;
      render();

      if ((direction > 0 && time < TIMELINE) || (direction < 0 && time > 0)) {
        frame = window.requestAnimationFrame(tick);
      } else {
        frame = 0;
        if (time === 0) {
          clear();
        }
      }
    };

    const play = (nextDirection: number) => {
      if (!hover.matches) {
        return;
      }
      direction = nextDirection;
      if (!frame) {
        last = performance.now();
        frame = window.requestAnimationFrame(tick);
      }
    };

    const enter = () => play(1);
    const leave = () => play(-1);

    const reset = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      frame = 0;
      time = 0;
      clear();
    };

    card.addEventListener("pointerenter", enter);
    card.addEventListener("pointerleave", leave);
    card.addEventListener("focus", enter);
    card.addEventListener("blur", leave);
    hover.addEventListener("change", reset);

    return () => {
      card.removeEventListener("pointerenter", enter);
      card.removeEventListener("pointerleave", leave);
      card.removeEventListener("focus", enter);
      card.removeEventListener("blur", leave);
      hover.removeEventListener("change", reset);
      reset();
    };
  }, []);

  return (
    <div className="svcGridItem" style={{ "--i": index } as CSSProperties}>
      <a className="svcGridCard" href={`/services/${service.slug}`} ref={ref}>
        <div className="svcGridCover">
          <div>
            <p className="svcGridIndex">{String(index + 1).padStart(2, "0")}</p>
          </div>
          <div className="svcGridVideoWrap">
            <div className="svcGridVideo">
              <div className="svcGridMedia">
                <img src={service.image} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="svcGridContent">
          <div className="svcGridTitleWrap">
            <h3 className="svcGridTitle svcGridTitle--black">
              <Words text={service.title} />
            </h3>
            <p className="svcGridTitle svcGridTitle--accent" aria-hidden="true">
              <Words text={service.title} />
            </p>
          </div>
          <div className="svcGridLink">
            <div className="svcGridLinkText">
              <p>discover more</p>
            </div>
            <div className="svcGridLinkIcon">
              <svg viewBox="0 0 40 12" aria-hidden="true" focusable="false">
                <path
                  d="M0 6h36m0 0L30 1m6 5-6 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export function ServicesGrid({ label, services }: { label: string; services: ServiceGridItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const elemsRef = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  // Cards rise 100px and fade in together (power3.out 0.8s, 25ms apart) once
  // the grid's hidden top edge reaches the bottom of the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    const elems = elemsRef.current;
    if (!section || !elems || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setArmed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the transition this frame instead of waiting for React's commit.
          section.classList.add("isRevealed");
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(elems);
    return () => observer.disconnect();
  }, []);

  // Cover parallax: each image is scaled 1.15 and drifts -7.5% -> 7.5% as its
  // cover crosses the viewport. AQuest measures desktop covers at their
  // resting scale(3) bounds and mobile ones at their pre-reveal +100px offset,
  // so the two ranges differ.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const hover = window.matchMedia(HOVER_QUERY);
    const covers = [...section.querySelectorAll<HTMLElement>(".svcGridCover")];
    let frame = 0;

    const paint = () => {
      frame = 0;
      const viewport = window.innerHeight;

      covers.forEach((cover) => {
        const image = cover.querySelector<HTMLElement>(".svcGridMedia img");
        if (!image) {
          return;
        }

        const { top, height } = cover.getBoundingClientRect();
        const start = hover.matches ? viewport + height : viewport - 100;
        const range = hover.matches ? viewport + height * 3 : viewport + height;
        const shift = -7.5 + 15 * clamp((start - top) / range);
        image.style.transform = `translate3d(0, ${shift.toFixed(3)}%, 0) scale(1.15)`;
      });
    };

    const schedule = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(paint);
      }
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    hover.addEventListener("change", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      hover.removeEventListener("change", schedule);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [services.length]);

  const className = ["svcGrid", armed ? "isArmed" : "", revealed ? "isRevealed" : ""].filter(Boolean).join(" ");

  return (
    <section className={className} id="services" ref={sectionRef}>
      <h2 className="svcGridHeading">{label}</h2>
      <div className="svcGridElems" ref={elemsRef}>
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
