"use client";

import { useEffect, useMemo, useState } from "react";
import { AutoRail, SiteFooter, SiteHeader } from "./site-components";

const services = [
  {
    number: "01",
    slug: "ai-consulting-and-transformation",
    title: "AI consulting & transformation",
    image: "/assets/imgs/services-1.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1180785751/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&log_user=0&signature=2234eb566b5ec5bbd384eb07afd23de891bf90694be298ac9e618a4d194bf0ce"
  },
  {
    number: "02",
    slug: "ai-solutions-and-intelligent-systems",
    title: "AI solutions & intelligent systems",
    image: "/assets/imgs/services-2.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1096949701/rendition/720p/file.mp4?loc=external&log_user=0&signature=39f7576c7b26eabaee6ae6cacafd39551d5716c492e712e88f824151f03ddb19"
  },
  {
    number: "03",
    slug: "automation-and-enterprise-solutions",
    title: "automation & enterprise solutions",
    image: "/assets/imgs/services-3.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1180785751/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&log_user=0&signature=2234eb566b5ec5bbd384eb07afd23de891bf90694be298ac9e618a4d194bf0ce"
  },
  {
    number: "04",
    slug: "digital-experience-and-platforms",
    title: "digital experience & platforms",
    image: "/assets/imgs/services-4.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/787553887/rendition/720p/file.mp4?loc=external&signature=75c1c8aeb372612ddaced02827f766136f000d54fbd337c1b57d39d17773eff7"
  },
  {
    number: "05",
    slug: "web-and-mobile-applications",
    title: "web & mobile applications",
    image: "/assets/imgs/services-5.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1064974329/rendition/720p/file.mp4?loc=external&log_user=0&signature=fb060fa5b22e73dec477b9bee7da9fdfede4c914425e71174256c3ec056f5fdb&user_id=20404911"
  },
  {
    number: "06",
    slug: "data-and-intelligence",
    title: "data & intelligence",
    image: "/assets/imgs/services-6.png"
  },
  {
    number: "07",
    slug: "smart-and-connected-technology",
    title: "smart & connected technology",
    image: "/assets/imgs/services-7.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1096861274/rendition/720p/file.mp4?loc=external&log_user=0&signature=a682a6ebf6953100276ad90c0de14ce7bbe4798482fd9aaac9bba2e6b455ead2"
  },
  {
    number: "08",
    slug: "cloud-and-infrastructure",
    title: "cloud & infrastructure",
    image: "/assets/imgs/services-6.png"
  },
  {
    number: "09",
    slug: "managed-services",
    title: "managed services",
    image: "/assets/imgs/services-7.png"
  }
];

const proof = [
  {
    title: "REGIONAL EXPERIENCE",
    body:
      "Built on Momentum's established presence and experience across the Middle East.",
    image: "https://storage.tentwenty.com/small_S_DSC_0638_40569566bb_16f9862aea.webp"
  },
  {
    title: "DIGITAL & AI DELIVERY",
    body:
      "Strategy, engineering and implementation across AI and digital technology.",
    image: "https://storage.tentwenty.com/small_Mask_group_3_1_96df741620_47c47e2b74.webp"
  },
  {
    title: "BUSINESS UNDERSTANDING",
    body:
      "Solutions shaped around real operational, customer and market challenges.",
    image:
      "https://storage.tentwenty.com/60_digital_experts_building_excellence_6538127864.webp"
  },
  {
    title: "BUILT TO INNOVATE",
    body:
      "Turning emerging technologies and recurring challenges into new solutions and IP.",
    image: "https://storage.tentwenty.com/small_Showreel_vertical_09d7c91a59.webp"
  }
];

const cases = [
  {
    brand: "M&M's",
    title: "Intelligent Consumer Experiences",
    body:
      "Evolving brand engagement through personalisation, interactive technology and real-time audience intelligence.",
    tags: "AI · EXPERIENCE · DATA",
    href: "/cases/moments-of-magic"
  },
  {
    brand: "Unilever",
    title: "Retail Intelligence",
    body:
      "Extending shopper and retail experience with computer vision, merchandising intelligence and real-time performance insights.",
    tags: "VISION AI · RETAIL · ANALYTICS",
    href: "/cases/ride-back-in-style"
  },
  {
    brand: "BRF",
    title: "Connected Customer Experiences",
    body:
      "Bringing data and intelligence into physical and digital consumer engagement.",
    tags: "DATA · DIGITAL · EXPERIENCE",
    href: "/cases/taste-of-abu-dhabi"
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
  const [activeService, setActiveService] = useState(0);
  const repeatedShowreel = useMemo(() => Array.from({ length: 10 }, () => "intelligence in motion"), []);

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
        <video
          src="https://customer-d1g9djed8qknar4r.cloudflarestream.com/d750f8048b43ed107e82597ce328be4f/downloads/default.mp4"
          poster="https://storage.tentwenty.com/small_play_showreel_dca84a2c40.webp"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="showreelMarquee">
          <div>
            {repeatedShowreel.map((label, index) => (
              <span key={`${label}-${index}`}>{label}</span>
            ))}
          </div>
        </div>
        <div className="showreelLabel" key={showreelLabel}>{showreelLabel}</div>
      </section>

      <section className="services sectionPad reveal" id="services">
        <div className="sectionHead">
          <p>what we do</p>
          <h2>helping businesses transform through technology, intelligence & innovation</h2>
        </div>

        <div className="servicesLayout">
          <div className="serviceMedia" aria-hidden="true">
            {services.map((service, index) => (
              <figure
                key={service.title}
                className={index === activeService ? "isActive" : ""}
              >
                <img src={service.image} alt="" />
              </figure>
            ))}
          </div>
          <div className="serviceList">
            {services.map((service, index) => (
              <a
                href={`/services/${service.slug}`}
                key={service.title}
                className={index === activeService ? "serviceRow isActive" : "serviceRow"}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
              >
                <strong>{service.title}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="identity sectionPad reveal" id="about">
        <h2>who we are</h2>
        <div className="identityPanel">
          <div className="identityMedia">
            <img src="https://storage.tentwenty.com/small_S_DSC_0638_40569566bb_16f9862aea.webp" alt="" />
          </div>
          <div className="identityCopy">
            <p className="eyebrow">built on experience. evolved for what&apos;s next.</p>
            <h3>regional experience backed by digital & AI capability.</h3>
            <p>
              MomentumX is the Digital & AI Transformation arm of Momentum, extending established
              regional experience into AI, enterprise technology and intelligent digital solutions.
            </p>
            <p>
              Built on Momentum&apos;s understanding of brands, businesses and consumers across the
              Middle East, we combine that experience with capabilities in AI, software engineering,
              automation, data and connected technology.
            </p>
            <p>
              The result is technology grounded in real business challenges, real customer behaviour
              and real market understanding.
            </p>
            <div className="proofStack">
              {proof.map((item) => (
                <article key={item.title}>
                  <span>{item.title}</span>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <a className="textLink" href="/about-us">
              more about us
            </a>
          </div>
        </div>
      </section>

      <section className="featured sectionPad reveal" id="featured">
        <div className="sectionHead dark">
          <p>experience, evolved</p>
          <h2>from experience to intelligence</h2>
          <p>
            Building on Momentum&apos;s real-world engagements to explore how AI, data and technology
            can create the next generation of customer and business experiences.
          </p>
        </div>
        <AutoRail>
          {cases.map((item) => (
            <article className="caseCard" key={item.title}>
              <div className="caseBrand">{item.brand}</div>
              <div className="rule" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="tagList">{item.tags}</div>
              <a className="textLink light" href={item.href}>
                Case study
              </a>
            </article>
          ))}
        </AutoRail>
        <p className="contentNote">
          Detailed case-study pages distinguish Momentum&apos;s original delivered engagement from
          MomentumX AI and digital extensions or concepts.
        </p>
      </section>

      <section className="lab sectionPad reveal" id="innovation-lab">
        <div className="sectionHead">
          <p>innovation lab</p>
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
        <video
          className="bookingVideo"
          src="https://player.vimeo.com/progressive_redirect/playback/1181081928/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=5ec89cd81d84eb45f3d0a875fe2b8d6c2fad8bd62b5059a4136afe4dfd697360"
          poster="https://storage.tentwenty.com/small_Showreel_vertical_09d7c91a59.webp"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      <SiteFooter />
    </main>
  );
}
