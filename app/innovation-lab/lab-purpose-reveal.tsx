"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const PURPOSE_COPY =
  "Not every opportunity starts with a client brief. The Innovation Lab gives our teams space to identify recurring challenges across industries, explore new technologies and rapidly build working concepts to understand what is possible - and what is worth taking further.";

const PURPOSE_STEPS = ["PRODUCTISE", "IDENTIFY", "EXPLORE", "PROTOTYPE", "VALIDATE"];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function LabPurposeReveal({ title }: { title: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const maxProgressRef = useRef(0);
  const words = useMemo(() => PURPOSE_COPY.split(" "), []);
  const activeWordCount = progress >= 0.96 ? words.length : Math.ceil(progress * words.length);
  const cardProgress = clamp((progress - 0.58) / 0.38, 0, 1);
  const activeCardCount = progress >= 0.96 ? PURPOSE_STEPS.length : Math.ceil(cardProgress * PURPOSE_STEPS.length);
  const isInFocus = progress > 0 && progress < 1;
  const isComplete = progress >= 0.96;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * 0.82;
      const end = viewportHeight * 0.28;
      const rawProgress = clamp((start - rect.top) / (start - end), 0, 1);
      const nextProgress = Math.max(maxProgressRef.current, rawProgress);

      maxProgressRef.current = nextProgress;
      setProgress(nextProgress);
      section.style.setProperty("--purpose-progress", nextProgress.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      className={`labPurposeX${isInFocus ? " isInFocus" : ""}${isComplete ? " isComplete" : ""}`}
      ref={sectionRef}
    >
      <h2>{title}</h2>
      <p className="labPurposeBody">
        <i aria-hidden="true">→</i>
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={index < activeWordCount ? "isActive" : undefined}
          >
            {word}
          </span>
        ))}
      </p>
      <div className="labSteps">
        {PURPOSE_STEPS.map((step, index) => (
          <article
            key={step}
            className={index < activeCardCount ? "isVisible" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
