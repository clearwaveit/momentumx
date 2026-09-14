"use client";

import { CSSProperties, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

export type WorkItem = {
  slug: string;
  name: string;
  abstract: string;
  image: string;
  logo?: string;
  logoRatio?: number;
  expertise: string[];
  industry: string[];
};

type Group = "expertise" | "industry";
type Macro = "all" | Group;

// Mirrors aquest.it/works. Filter lists open and close with power3.out over
// 0.45s (items 15ms apart); switching group opens the next list ~0.6s after
// the click. A new filter brings every card in from 20% below with
// circ.inOut over 0.6s, 30ms apart. Titles roll black -> yellow-marked on hover as a
// reversible timeline. Thumbnails stay uncropped, so there is no image parallax.
const LIST_EASE = "cubic-bezier(0.215, 0.61, 0.355, 1)";
const LIST_MS = 450;
const LIST_ITEM_STAGGER_MS = 15;
const LIST_SWITCH_MS = 600;
const CARD_EASE = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
const CARD_MS = 600;
const CARD_STAGGER_MS = 30;
const ROLL_DURATION = 0.6;
const WORD_SPREAD = 0.1;

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);
const circInOut = (t: number) =>
  t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Words({ text }: { text: string }) {
  const words = text.split(" ");

  return words.map((word, index) => (
    <span key={`${word}-${index}`}>
      <span className="projectCardMask">
        <span className="projectCardWord">{word}</span>
      </span>
      {index < words.length - 1 ? " " : null}
    </span>
  ));
}

function WorkCard({ work }: { work: WorkItem }) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Same play / reverse timeline as the homepage services grid.
  useEffect(() => {
    const card = ref.current;
    if (!card) {
      return;
    }

    const hover = window.matchMedia("(hover: hover)");
    const black = [...card.querySelectorAll<HTMLElement>(".projectCardTitle--black .projectCardWord")];
    const accent = [...card.querySelectorAll<HTMLElement>(".projectCardTitle--accent .projectCardWord")];
    const wordDelay = black.length > 1 ? WORD_SPREAD / (black.length - 1) : 0;
    const total = ROLL_DURATION + (black.length > 1 ? WORD_SPREAD : 0);

    let time = 0;
    let direction = 0;
    let frame = 0;
    let last = 0;

    const render = () => {
      black.forEach((word, index) => {
        const roll = circInOut(clamp((time - index * wordDelay) / ROLL_DURATION));
        word.style.transform = `translate3d(0, ${-120 * roll}%, 0)`;
        if (accent[index]) {
          accent[index].style.transform = `translate3d(0, ${120 * (1 - roll)}%, 0)`;
        }
      });
    };

    const clear = () => {
      [...black, ...accent].forEach((word) => word.style.removeProperty("transform"));
    };

    const tick = (now: number) => {
      time = Math.min(Math.max(time + ((now - last) / 1000) * direction, 0), total);
      last = now;
      render();

      if ((direction > 0 && time < total) || (direction < 0 && time > 0)) {
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

    card.addEventListener("pointerenter", enter);
    card.addEventListener("pointerleave", leave);
    card.addEventListener("focus", enter);
    card.addEventListener("blur", leave);

    return () => {
      card.removeEventListener("pointerenter", enter);
      card.removeEventListener("pointerleave", leave);
      card.removeEventListener("focus", enter);
      card.removeEventListener("blur", leave);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      clear();
    };
  }, []);

  return (
    <a className="projectCard" href={`/cases/${work.slug}`} ref={ref}>
      {/* Cases with a client logo show it in place of the thumbnail image, over a
          soft, blurred wash of the case artwork when it is one of our own images;
          anything else gets the plain card colour. */}
      {work.logo ? (
        <div className="projectCardMedia isLogo">
          {work.image.startsWith("/") ? (
            <span
              className="projectCardBackdrop"
              aria-hidden="true"
              style={{ backgroundImage: `url(${work.image})` }}
            />
          ) : null}
          <img
            src={work.logo}
            alt=""
            loading="lazy"
            style={{ "--logo-r": work.logoRatio ?? 1 } as CSSProperties}
          />
        </div>
      ) : (
        <div className="projectCardMedia">
          <img src={work.image} alt="" loading="lazy" />
        </div>
      )}
      <div className="projectCardInfo">
        <div className="projectCardTitleWrap">
          <h3 className="projectCardTitle projectCardTitle--black">
            <Words text={work.name} />
          </h3>
          <p className="projectCardTitle projectCardTitle--accent" aria-hidden="true">
            <Words text={work.name} />
          </p>
        </div>
        <p className="projectCardAbstract">{work.abstract}</p>
      </div>
    </a>
  );
}

export function WorksIndex({
  label,
  works,
  groups
}: {
  label: string;
  works: WorkItem[];
  groups: Record<Group, string[]>;
}) {
  const [macro, setMacro] = useState<Macro>("all");
  const [shownList, setShownList] = useState<Group | null>(null);
  const [selected, setSelected] = useState<{ group: Group; value: string } | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const listAnimations = useRef<Animation[]>([]);
  const closing = useRef(false);

  const visible = useMemo(
    () => (selected ? works.filter((work) => work[selected.group].includes(selected.value)) : works),
    [selected, works]
  );
  const filterKey = selected ? `${selected.group}:${selected.value}` : "all";

  const stopListAnimations = () => {
    listAnimations.current.forEach((animation) => animation.cancel());
    listAnimations.current = [];
  };

  // Animates the open list from wherever it currently is, so a click in the
  // middle of a transition carries on smoothly instead of snapping.
  const animateList = (list: HTMLElement, open: boolean) => {
    const items = [...list.children] as HTMLElement[];
    const running = listAnimations.current.length > 0;
    const style = getComputedStyle(list);
    const fromHeight = running || !open ? style.height : "0px";
    const fromOpacity = running || !open ? style.opacity : "0";
    const itemOpacity = items.map((item) => (running || !open ? getComputedStyle(item).opacity : "0"));

    listAnimations.current.forEach((animation) => animation.cancel());
    const toHeight = open ? `${list.offsetHeight}px` : "0px";
    const fill: FillMode = open ? "none" : "forwards";

    const animations = [
      list.animate(
        [
          { height: fromHeight, opacity: fromOpacity },
          { height: toHeight, opacity: open ? 1 : 0 }
        ],
        { duration: LIST_MS, easing: LIST_EASE, fill }
      ),
      ...items.map((item, index) =>
        item.animate([{ opacity: itemOpacity[index] }, { opacity: open ? 1 : 0 }], {
          duration: LIST_MS,
          delay: index * LIST_ITEM_STAGGER_MS,
          easing: LIST_EASE,
          fill: open ? "backwards" : "forwards"
        })
      )
    ];

    listAnimations.current = animations;
    if (open) {
      Promise.all(animations.map((animation) => animation.finished)).then(
        () => {
          if (listAnimations.current === animations) {
            listAnimations.current = [];
          }
        },
        () => undefined
      );
    }
    return animations;
  };

  // Keep the rendered list in step with the active group: collapse the old
  // one first, then mount the next.
  useEffect(() => {
    const target = macro === "all" ? null : macro;
    const list = listRef.current;

    if (target === shownList) {
      if (list && closing.current) {
        closing.current = false;
        animateList(list, true);
      }
      return;
    }

    if (!shownList || !list || prefersReducedMotion()) {
      stopListAnimations();
      setShownList(target);
      return;
    }

    closing.current = true;
    const started = performance.now();
    const animations = animateList(list, false);
    let cancelled = false;
    let timer = 0;

    Promise.all(animations.map((animation) => animation.finished)).then(
      () => {
        if (cancelled) {
          return;
        }
        const wait = target ? Math.max(0, LIST_SWITCH_MS - (performance.now() - started)) : 0;
        timer = window.setTimeout(() => {
          closing.current = false;
          stopListAnimations();
          setShownList(target);
        }, wait);
      },
      () => undefined
    );

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [macro, shownList]);

  // A freshly mounted list opens from nothing.
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!shownList || !list || prefersReducedMotion()) {
      return;
    }
    stopListAnimations();
    animateList(list, true);
  }, [shownList]);

  // Every filter change replays the card entrance.
  const lastKey = useRef(filterKey);
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (lastKey.current === filterKey || !grid) {
      return;
    }
    lastKey.current = filterKey;
    if (prefersReducedMotion()) {
      return;
    }

    [...grid.querySelectorAll<HTMLElement>(".projectCard")].forEach((card, index) => {
      card.animate(
        [
          { opacity: 0, transform: "translate3d(0, 20%, 0)" },
          { opacity: 1, transform: "translate3d(0, 0, 0)" }
        ],
        { duration: CARD_MS, delay: index * CARD_STAGGER_MS, easing: CARD_EASE, fill: "backwards" }
      );
    });
  }, [filterKey]);

  const chooseMacro = (next: Macro) => {
    if (next === "all" || next === macro) {
      setMacro("all");
      setSelected(null);
      return;
    }
    setMacro(next);
  };

  const macros: { key: Macro; label: string }[] = [
    { key: "all", label: "all" },
    { key: "expertise", label: "expertise" },
    { key: "industry", label: "industry" }
  ];

  return (
    <section className="worksIndex">
      <div className="worksIndexHeader">
        <h2 className="worksIndexTitle">
          <span>{label}</span>
        </h2>
        <div className="worksFilters">
          <div className="worksFiltersMacros">
            {macros.map((item) => (
              <button
                type="button"
                key={item.key}
                className={item.key === macro ? "worksFiltersMacro isActive" : "worksFiltersMacro"}
                aria-pressed={item.key === macro}
                aria-expanded={item.key === "all" ? undefined : item.key === macro}
                onClick={() => chooseMacro(item.key)}
              >
                <p>{item.label}</p>
              </button>
            ))}
          </div>
          {shownList ? (
            <div className="worksFiltersList" key={shownList} ref={listRef}>
              {groups[shownList].map((value) => {
                const active = selected?.group === shownList && selected.value === value;
                return (
                  <button
                    type="button"
                    key={value}
                    className={active ? "worksFiltersItem isActive" : "worksFiltersItem"}
                    aria-pressed={active}
                    disabled={active}
                    onClick={() => setSelected({ group: shownList, value })}
                  >
                    <span>{value}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <div className="worksIndexList" ref={gridRef} aria-live="polite">
        {visible.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}
