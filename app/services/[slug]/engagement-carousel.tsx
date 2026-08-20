"use client";

import { useState } from "react";

// One backdrop per engagement; the rail cross-fades between them.
const BACKDROPS = [
  "/assets/design/engagements-bg.jpg",
  "/assets/design/value-1.jpg",
  "/assets/design/value-4.jpg",
  "/assets/design/value-3.jpg",
  "/assets/design/value-2.jpg",
  "/assets/design/value-5.jpg"
];

export function EngagementCarousel({
  items
}: {
  items: { title: string; body: string; tag?: string }[];
}) {
  const [index, setIndex] = useState(0);

  if (!items.length) {
    return null;
  }

  const active = index % items.length;
  const item = items[active];
  const step = (direction: number) =>
    setIndex((current) => (current + direction + items.length) % items.length);

  return (
    <>
      {items.map((entry, position) => (
        <img
          key={entry.title}
          className={
            position === active ? "svcEngagementsMedia isActive" : "svcEngagementsMedia"
          }
          src={BACKDROPS[position % BACKDROPS.length]}
          alt=""
          aria-hidden="true"
        />
      ))}
      <div className="svcEngagementsHead">
        <div>
          <h2>
            delivered work and
            <br />
            transformation concepts
          </h2>
          <p className="svcEngagementsLead">featured engagements</p>
        </div>
        <p>
          Relevant delivered work is combined with clearly labelled MomentumX Lab and
          transformation concepts.
        </p>
      </div>
      <article className="engagementCard">
        <h3 key={item.title}>{item.title}</h3>
        <p>{item.body}</p>
        <div className="engagementTags">
          <span>{item.tag ?? "Concept / Capability"}</span>
        </div>
        <a className="engagementCta" href="/cases">
          explore the work<span aria-hidden="true">→</span>
        </a>
        {items.length > 1 ? (
          <div className="engagementNav">
            <button type="button" onClick={() => step(-1)} aria-label="Previous engagement">
              <img src="/assets/design/rail-prev.svg" alt="" width={40} height={40} />
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next engagement">
              <img src="/assets/design/rail-next.svg" alt="" width={40} height={40} />
            </button>
          </div>
        ) : null}
      </article>
    </>
  );
}
