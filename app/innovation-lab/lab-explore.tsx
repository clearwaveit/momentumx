"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  category: string;
  headline: string;
  body: string;
  exploring: string;
  status: string;
  metrics: string[];
};

export function LabExplore({
  projects,
  images
}: {
  projects: Project[];
  images: string[];
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [pinned, setPinned] = useState(false);

  // Pinning only applies on pointer-sized screens; touch and
  // reduced-motion users get a plain horizontal rail instead.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 991px) and (prefers-reduced-motion: no-preference)");
    const apply = () => setPinned(query.matches);

    apply();
    query.addEventListener("change", apply);

    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const element = wrapRef.current;
    if (!pinned || !element) {
      setProgress(0);
      return;
    }

    let frame = 0;

    const read = () => {
      frame = 0;
      const distance = element.offsetHeight - window.innerHeight;
      if (distance <= 0) {
        setProgress(0);
        return;
      }
      const travelled = -element.getBoundingClientRect().top / distance;
      setProgress(Math.min(Math.max(travelled, 0), 1));
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(read);
      }
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [pinned]);

  const lastIndex = Math.max(projects.length - 1, 1);
  const shift = pinned ? progress * (projects.length - 1) * 100 : 0;
  const activeIndex = Math.round(progress * (projects.length - 1));

  return (
    <div
      className={pinned ? "labExploreWrap isPinned" : "labExploreWrap"}
      ref={wrapRef}
      style={{ "--slides": projects.length } as CSSProperties}
    >
      <div className="labExploreViewport">
        <div
          className="labExploreTrack"
          style={pinned ? { transform: `translate3d(-${shift}%, 0, 0)` } : undefined}
        >
          {projects.map((project, index) => (
            <article className="labSlide" key={project.title}>
              <div className="labSlideMedia">
                <img src={images[index % images.length]} alt="" />
              </div>
              <div className="labSlideCopy">
                <span className="labSlideNumber">{String(index + 1).padStart(2, "0")}</span>
                <h3>{project.title}</h3>
                <p className="labSlideHeadline">{project.headline}</p>
                <p className="labSlideBody">{project.body}</p>
                <p className="labSlideExploring">{project.exploring}</p>
                <div className="labSlideMetrics">
                  {project.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
                <span className="labSlideStatus">{project.status}</span>
              </div>
            </article>
          ))}
        </div>
        {pinned ? (
          <div className="labExploreProgress" aria-hidden="true">
            <span style={{ transform: `scaleX(${(activeIndex + 1) / (lastIndex + 1)})` }} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
