"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

export type SelectedWork = {
  title: string;
  href: string;
  expertise: string[];
  year?: string;
  description: string;
  media: { type: "image" | "video"; src: string; poster?: string };
};

// Mirrors aquest.it's "Selected works": a pinned stage where each project
// owns one viewport of scroll, scrubbed with easeInOutCubic, plus a
// directional snap once scrolling settles.
const SNAP_IDLE_MS = 450;
const SNAP_DURATION_MS = 500;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// Words sit in their own clip masks and follow the parent's --o offset.
function Split({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span aria-hidden="true">
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="worksMask">
            <span className="worksWord">{word}</span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

// Plays once on entry: words rise with a 0.1s stagger, then each character
// fades from yellow to ink with a 0.033s stagger.
function RevealHeading({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -2% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <p ref={ref} className={revealed ? "worksHeadingText isRevealed" : "worksHeadingText"} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`}>
          <span className="worksMask" aria-hidden="true">
            <span className="worksHeadingWord" style={{ transitionDelay: `${wordIndex * 0.1}s` }}>
              {[...word].map((char, index) => {
                const delay = 0.15 + charIndex++ * 0.033;
                return (
                  <span
                    key={`${char}-${index}`}
                    className="worksHeadingChar"
                    style={{ transitionDelay: `${delay.toFixed(3)}s` }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </span>
          {wordIndex < words.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}

export function SelectedWorks({
  label,
  heading,
  works
}: {
  label: string;
  heading: string;
  works: SelectedWork[];
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const coverRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list || works.length < 2) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let idleTimer = 0;
    let snapFrame = 0;
    let snapping = false;
    let touching = false;
    let lastY = window.scrollY;
    let direction = 1;

    const metrics = () => {
      const segment = list.offsetHeight / works.length;
      return {
        segment,
        max: segment * (works.length - 1),
        top: list.getBoundingClientRect().top + window.scrollY
      };
    };

    const paint = () => {
      frame = 0;
      const { segment, max } = metrics();
      const scrolled = Math.min(Math.max(-list.getBoundingClientRect().top, 0), max);
      const step = Math.min(Math.floor(scrolled / segment), works.length - 2);
      const eased = easeInOutCubic((scrolled - step * segment) / segment);

      works.forEach((_, index) => {
        const offset =
          index < step ? -1 : index === step ? -eased : index === step + 1 ? 1 - eased : 1;
        contentRefs.current[index]?.style.setProperty("--o", offset.toFixed(4));
        coverRefs.current[index]?.style.setProperty("--o", offset.toFixed(4));
      });

      if (barRef.current) {
        barRef.current.style.transform = `translate3d(${((max ? scrolled / max : 0) - 1) * 100}%, 0, 0)`;
      }

      setActive(Math.round(scrolled / segment));
    };

    const stopSnap = () => {
      if (snapFrame) {
        window.cancelAnimationFrame(snapFrame);
      }
      snapFrame = 0;
      snapping = false;
    };

    const snapTo = (target: number) => {
      const from = window.scrollY;
      const distance = target - from;
      if (Math.abs(distance) < 1) {
        return;
      }

      const start = performance.now();
      snapping = true;

      const glide = (now: number) => {
        const progress = Math.min((now - start) / SNAP_DURATION_MS, 1);
        window.scrollTo({ top: from + distance * easeInOutQuad(progress), behavior: "instant" });
        if (progress < 1) {
          snapFrame = window.requestAnimationFrame(glide);
        } else {
          snapFrame = 0;
          snapping = false;
        }
      };

      snapFrame = window.requestAnimationFrame(glide);
    };

    // Like AQuest, snapping follows the last scroll direction rather than
    // the nearest project, so a small nudge commits to the next one.
    const settle = () => {
      idleTimer = 0;
      if (reducedMotion.matches || touching) {
        return;
      }

      const { segment, max, top } = metrics();
      const scrolled = window.scrollY - top;
      if (scrolled <= 0.5 || scrolled >= max - 0.5) {
        return;
      }

      const position = scrolled / segment;
      if (Math.abs(position - Math.round(position)) * segment < 1) {
        return;
      }

      snapTo(top + (direction > 0 ? Math.ceil(position) : Math.floor(position)) * segment);
    };

    const scheduleSettle = () => {
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(settle, SNAP_IDLE_MS);
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (!snapping && y !== lastY) {
        direction = y > lastY ? 1 : -1;
      }
      lastY = y;

      if (!frame) {
        frame = window.requestAnimationFrame(paint);
      }
      if (!snapping) {
        scheduleSettle();
      }
    };

    const onInput = () => {
      if (snapping) {
        stopSnap();
      }
    };

    const onTouchStart = () => {
      touching = true;
      onInput();
    };

    const onTouchEnd = () => {
      touching = false;
      scheduleSettle();
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", onInput, { passive: true });
    window.addEventListener("keydown", onInput);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", onInput);
      window.removeEventListener("keydown", onInput);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.clearTimeout(idleTimer);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      stopSnap();
    };
  }, [works.length]);

  return (
    <section className="worksSection" id="featured">
      <div className="worksHeader">
        <h2 className="worksLabel">{label}</h2>
      </div>
      <div className="worksHeading">
        <RevealHeading text={heading} />
      </div>

      <div className="worksList" ref={listRef} style={{ "--works-count": works.length } as CSSProperties}>
        <div className="worksGap" aria-hidden="true" />
        <div className="worksStage">
          <div className="worksContents">
            {works.map((work, index) => (
              <div
                key={work.href}
                className="worksContent"
                ref={(element) => {
                  contentRefs.current[index] = element;
                }}
                aria-hidden={index !== active}
                style={
                  {
                    "--o": index === 0 ? 0 : 1,
                    zIndex: index === active ? 1 : 0,
                    pointerEvents: index === active ? "auto" : "none"
                  } as CSSProperties
                }
              >
                <a className="worksTitleLink" href={work.href} tabIndex={index === active ? 0 : -1}>
                  <h3 className="worksTitle" aria-label={work.title}>
                    <Split text={work.title} />
                  </h3>
                </a>
                <div className="worksGap worksGap--desktop" aria-hidden="true" />
                <div className="worksSpecs">
                  <div className="worksSpecsLine">
                    <p className="worksSpec" aria-label="Expertise">
                      <Split text="Expertise" />
                    </p>
                    <div className="worksSpecsList">
                      {work.expertise.map((item) => (
                        <div className="worksMaskBlock" key={item}>
                          <p className="worksSpec worksWordBlock">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {work.year ? (
                    <div className="worksSpecsLine">
                      <p className="worksSpec" aria-label="Year">
                        <Split text="Year" />
                      </p>
                      <p className="worksSpec" aria-label={work.year}>
                        <Split text={work.year} />
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="worksGap worksGap--desktop" aria-hidden="true" />
                <div className="worksSpecsLine">
                  <p className="worksSmall" aria-label="Description">
                    <Split text="Description" />
                  </p>
                  <p className="worksSmall worksDesc" aria-label={work.description}>
                    <Split text={work.description} />
                  </p>
                  <div className="worksGap worksGap--mobile" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          <div className="worksCovers">
            {works.map((work, index) => (
              <div
                key={work.href}
                className="worksCover"
                ref={(element) => {
                  coverRefs.current[index] = element;
                }}
                style={
                  {
                    "--o": index === 0 ? 0 : 1,
                    pointerEvents: index === active ? "auto" : "none"
                  } as CSSProperties
                }
              >
                <a className="worksTitleLink" href={work.href} tabIndex={-1}>
                  <h3 className="worksTitle" aria-label={work.title}>
                    <Split text={work.title} />
                  </h3>
                </a>
                <div className="worksMediaWrap">
                  <div className="worksMedia">
                    <a href={work.href} tabIndex={-1} aria-label={work.title}>
                      {work.media.type === "video" ? (
                        <video
                          src={work.media.src}
                          poster={work.media.poster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <img src={work.media.src} alt="" />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <div className="worksProgress" aria-hidden="true">
              <div className="worksProgressBar" ref={barRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
