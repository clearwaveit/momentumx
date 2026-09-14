"use client";

import { useEffect, useState } from "react";
import { SelectedWorks, type SelectedWork } from "./selected-works";
import { ServicesGrid } from "./services-grid";
import { services } from "./site-data";
import { SiteFooter, SiteHeader } from "./site-components";

const proof = [
  {
    title: "BUSINESS FIRST",
    body: "Every engagement starts with the operational, customer or market problem, not the technology."
  },
  {
    title: "AI WHERE IT COUNTS",
    body: "Practical AI, automation and data, applied where they change decisions, costs or experiences."
  },
  {
    title: "END-TO-END DELIVERY",
    body: "Strategy, design, engineering and ongoing management from one accountable team."
  },
  {
    title: "REGIONAL UNDERSTANDING",
    body: "Built for Middle East markets, from bilingual users to local regulation and ways of working."
  }
];

// Adapted from aquest.it's "Selected works". Expertise comes from each case's
// capabilities; there is no year data yet, so that row stays hidden.
const featuredWorks: SelectedWork[] = [
  {
    title: "Whiskas Interactive Cat Game",
    href: "/cases/whiskas-interactive-cat-game",
    expertise: ["Gamification", "Interactive Experience", "UGC"],
    description: "A tablet-based game turning pet play into user-generated campaign participation.",
    media: { type: "image", src: "/assets/case-studies/Whiskas.png" }
  },
  {
    title: "Dentazon Care Concierge",
    href: "/cases/dentazon-ai-dental-care-platform",
    expertise: ["Conversational AI", "Digital Health", "Triage Assist"],
    description: "A bilingual AI assistant that guides patients from a dental concern to the right next step.",
    media: { type: "image", src: "/assets/case-studies/Dentazon-2.png" }
  },
  {
    title: "Ferrero Group Back to School Campaign",
    href: "/cases/ferrero-back-to-school-campaign",
    expertise: ["WhatsApp", "OCR", "Receipt Processing"],
    description:
      "A WhatsApp-first promotional platform connecting receipt submission, OCR and instant-win outcomes.",
    media: { type: "image", src: "/assets/case-studies/Nutella.png" }
  },
  {
    title: "Lay's Match Radar",
    href: "/cases/lays-match-radar",
    expertise: ["Fan Experience", "Sports Entertainment", "Campaign Ops"],
    description: "A matchday fan finder and AI ops console that routes fans to Game ON venues with stock before peak.",
    media: { type: "image", src: "/assets/case-studies/Lays.png" }
  },
  {
    title: "RFF Circular Control",
    href: "/cases/rff-circular-control",
    expertise: ["Industrial Ops", "Materials Traceability", "AI Copilot"],
    description: "An AI-assisted operating layer for recycled polymers across materials, logistics, compliance and client portal.",
    media: { type: "image", src: "/assets/case-studies/RFF.png" }
  },
  {
    title: "Moussy Cap Pulse",
    href: "/cases/moussy-cap-pulse",
    expertise: ["Consumer Web", "Cap Code Entry", "Anomaly Assist"],
    description: "A bilingual cap-code entry for Win Gold with Moussy, with AI assist flagging anomalies behind the Grand Draw.",
    media: { type: "image", src: "/assets/case-studies/Moussay.png" }
  }
];

const labProjects = [
  {
    title: "SHELFVISION AI",
    body: "Computer vision for shelf, stock and merchandising intelligence.",
    status: "LAB PROTOTYPE"
  },
  {
    title: "SMARTSPACE",
    body: "Wi-Fi, sensor and AI-powered intelligence for physical spaces.",
    status: "LAB PROTOTYPE"
  },
  {
    title: "AML COPILOT",
    body: "AI-assisted investigation and intelligence for compliance teams.",
    status: "CONCEPT"
  }
];

const showreelWords = [
  "AI Retail Intelligence",
  "Enterprise Platforms",
  "Connected Experiences",
  "Computer Vision",
  "Digital Transformation"
];

function useRotatingWords(words: string[], delay = 1800) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [delay, words.length]);

  return words[index];
}

export default function Home() {
  const showreelLabel = useRotatingWords(showreelWords, 1500);

  useEffect(() => {
    document.querySelectorAll("video").forEach((video) => {
      video.play().catch(() => undefined);
    });
  }, []);

  return (
    <main>
      <div className="loader" aria-hidden="true">
        <div className="loaderText">
          creating <b>digital</b> growth for <span>let&apos;s go</span>
        </div>
      </div>

      <SiteHeader />

      <section className="hero sectionPad reveal">
        <h1>
          transforming business through <span className="clientSwap">digital & AI</span>
        </h1>
        <a className="roundLink" href="#services">
          explore what we do
        </a>
      </section>

      <section className="showreel reveal">
        <div className="showreelMedia">
          <video
            src="https://customer-d1g9djed8qknar4r.cloudflarestream.com/d750f8048b43ed107e82597ce328be4f/downloads/default.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="showreelLabel" key={showreelLabel}>{showreelLabel}</div>
        </div>
      </section>

      <ServicesGrid label="what we do" services={services} />

      {/* Who we are: a dark typographic band about what MomentumX does, with no photography. */}
      <section className="homeAbout" id="about">
        <div className="homeAboutHead">
          <p className="homeAboutEyebrow">who we are</p>
          <h2>technology built around how your business actually works.</h2>
          <p className="homeAboutBody">
            MomentumX is a digital & AI transformation company working with organisations across the
            Middle East. We find where technology creates real value, then design, build and run the
            solutions that deliver it, from AI and automation to data platforms and digital experiences.
          </p>
        </div>

        <ol className="homeAboutProof">
          {proof.map((item, index) => (
            <li key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title.toLowerCase().replace(/\bai\b/g, "AI")}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>

        <a className="homeAboutLink" href="/about-us">
          more about us
          <svg viewBox="0 0 40 12" aria-hidden="true" focusable="false">
            <path d="M0 6h36m0 0L30 1m6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <SelectedWorks
        label="experience, evolved"
        heading="from experience to intelligence"
        works={featuredWorks}
      />

      <section className="lab sectionPad reveal" id="innovation-lab">
        <div className="sectionHead">
          <p>AI innovation lab</p>
          <h2>exploring what comes next</h2>
          <p>
            We turn emerging technologies and real business challenges into prototypes,
            proof-of-concepts and new product ideas.
          </p>
        </div>
        <div className="labGrid">
          {labProjects.map((project) => (
            <article key={project.title}>
              <span>{project.status}</span>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </article>
          ))}
        </div>
        <a className="textLink largeLink" href="/innovation-lab">
          explore the lab
        </a>
      </section>

      <section className="booking sectionPad reveal" id="enquiry">
        <div>
          <p className="eyebrow">have a challenge worth transforming?</p>
          <h2>let&apos;s explore what&apos;s possible</h2>
          <p className="bookingCopy">
            From AI opportunities to enterprise platforms, let&apos;s turn your next business
            challenge into a working solution.
          </p>
          <a className="buttonLink" href="/enquiry">
            start a conversation
          </a>
        </div>
        <img
          className="bookingPerson"
          src="/assets/design/cta-person-momentumx.png"
          alt=""
          width={630}
          height={1478}
          loading="lazy"
        />
      </section>

      <SiteFooter />
    </main>
  );
}
