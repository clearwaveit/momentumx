"use client";

import { useEffect, useMemo, useState } from "react";
import { AutoRail, SiteFooter, SiteHeader } from "./site-components";

const services = [
  {
    number: "01",
    title: "Website Design & Build",
    image: "https://storage.tentwenty.com/small_Website_UIUX_Design_and_Development_ebdbed3d31.webp",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1064974329/rendition/720p/file.mp4?loc=external&log_user=0&signature=fb060fa5b22e73dec477b9bee7da9fdfede4c914425e71174256c3ec056f5fdb&user_id=20404911"
  },
  {
    number: "02",
    title: "Mobile App Design & Build",
    image: "https://storage.tentwenty.com/small_Mask_group_3_1_96df741620_47c47e2b74.webp",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1096949701/rendition/720p/file.mp4?loc=external&log_user=0&signature=39f7576c7b26eabaee6ae6cacafd39551d5716c492e712e88f824151f03ddb19"
  },
  {
    number: "03",
    title: "Artificial Intelligence - AI",
    image:
      "https://storage.tentwenty.com/small_Artificial_Intelligence_Consultancy_and_Implementation_v3_412198b2cc.webp",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1180785751/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&log_user=0&signature=2234eb566b5ec5bbd384eb07afd23de891bf90694be298ac9e618a4d194bf0ce"
  },
  {
    number: "04",
    title: "e-commerce website development",
    image:
      "https://storage.tentwenty.com/small_work_1_cover_square_e5535e1205.webp",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/787553887/rendition/720p/file.mp4?loc=external&signature=75c1c8aeb372612ddaced02827f766136f000d54fbd337c1b57d39d17773eff7"
  },
  {
    number: "05",
    title: "search engine optimization agency in dubai",
    image: "https://storage.tentwenty.com/small_SEO_service_website_b31f590d78.webp"
  },
  {
    number: "06",
    title: "Strategic & Digital Consulting",
    image: "https://storage.tentwenty.com/small_AWS_and_Azure_Hosting_1_8f35b1ee0b.webp",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1096861274/rendition/720p/file.mp4?loc=external&log_user=0&signature=a682a6ebf6953100276ad90c0de14ce7bbe4798482fd9aaac9bba2e6b455ead2"
  },
  {
    number: "07",
    title: "video & film services",
    image: "https://storage.tentwenty.com/small_play_showreel_dca84a2c40.webp"
  }
];

const proof = [
  {
    title: "Momentum heritage",
    body:
      "Built from Momentum's regional client experience, with a sharper focus on digital services and product delivery.",
    image: "https://storage.tentwenty.com/small_S_DSC_0638_40569566bb_16f9862aea.webp"
  },
  {
    title: "digital-first delivery",
    body:
      "Websites, apps, AI workflows, commerce, content, and cloud foundations shaped around measurable growth.",
    image: "https://storage.tentwenty.com/small_Mask_group_3_1_96df741620_47c47e2b74.webp"
  },
  {
    title: "brand-backed digital thinking",
    body:
      "A practical mix of brand understanding, digital strategy, user experience, and implementation craft.",
    image:
      "https://storage.tentwenty.com/60_digital_experts_building_excellence_6538127864.webp"
  },
  {
    title: "trusted by global names",
    body:
      "Momentum's client history informs how MomentumX builds digital platforms for ambitious organizations.",
    image: "https://storage.tentwenty.com/small_Showreel_vertical_09d7c91a59.webp"
  }
];

const cases = [
  {
    brand: "M&M's",
    title: "Moments of Magic",
    body:
      "A digital-ready brand story shaped around memorable moments, content, and audience attention.",
    href: "/cases/moments-of-magic"
  },
  {
    brand: "Pedigree & IAMS",
    title: "Pawtopia",
    body:
      "A pet-focused digital engagement concept designed to bring community and product storytelling together.",
    href: "/cases/pawtopia"
  },
  {
    brand: "Tazal",
    title: "A Michelin Affair",
    body:
      "A premium digital storytelling direction built around hospitality, attention, and a crafted experience.",
    href: "/cases/a-michelin-affair"
  },
  {
    brand: "BRF",
    title: "Taste of Abu Dhabi",
    body:
      "A consumer-facing digital experience shaped for regional audience engagement and content visibility.",
    href: "/cases/taste-of-abu-dhabi"
  },
  {
    brand: "Unilever",
    title: "Ride back in Style",
    body:
      "A lifestyle-led digital engagement connecting brand recall, useful content, and customer touchpoints.",
    href: "/cases/ride-back-in-style"
  }
];

const heroClients = ["Mars", "M&M's", "Holsten", "Skittles", "Snickers", "BRF"];
const bookingWords = ["website", "app", "AI", "commerce", "strategy", "platform"];

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
  const client = useRotatingWords(heroClients, 2000);
  const booking = useRotatingWords(bookingWords, 1500);
  const [activeService, setActiveService] = useState(0);
  const repeatedShowreel = useMemo(() => Array.from({ length: 10 }, () => "play showreel"), []);

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
          creating digital growth opportunities for{" "}
          <span className="clientSwap" key={client}>
            {client}
          </span>
        </h1>
        <a className="roundLink" href="#services">
          what we can do for you?
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
      </section>

      <section className="services sectionPad reveal" id="services">
        <div className="sectionHead">
          <p>our services</p>
          <h2>helping brands by building elegant & refined digital experiences</h2>
        </div>

        <div className="servicesLayout">
          <div className="serviceMedia" aria-hidden="true">
            {services.map((service, index) => (
              <figure
                key={service.title}
                className={index === activeService ? "isActive" : ""}
              >
                <img src={service.image} alt="" />
                {service.video ? (
                  <video src={service.video} autoPlay muted loop playsInline preload="metadata" />
                ) : null}
              </figure>
            ))}
          </div>
          <div className="serviceList">
            {services.map((service, index) => (
              <a
                href={`/services/${service.title
                  .toLowerCase()
                  .replace("artificial intelligence - ai", "ai-consultancy-and-implementation")
                  .replace("website design & build", "website-ui-ux-design-and-development")
                  .replace("mobile app design & build", "app-ui-ux-design-and-development")
                  .replace("e-commerce website development", "e-commerce-website-development")
                  .replace("search engine optimization agency in dubai", "search-engine-optimization")
                  .replace("strategic & digital consulting", "creative-and-digital-consulting")
                  .replace("video & film services", "video-and-film")
                  .replaceAll(" ", "-")}`}
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
            <p className="eyebrow">born from Momentum, built for digital growth</p>
            <h3>Digital services backed by regional brand understanding.</h3>
            <p>
              MomentumX carries forward Momentum's understanding of brands and audiences, then
              turns that experience into websites, apps, AI-enabled tools, commerce, and digital
              platforms for the next stage of growth.
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
              more about MomentumX
            </a>
          </div>
        </div>
      </section>

      <section className="featured sectionPad reveal" id="featured">
        <div className="sectionHead dark">
          <p>A selection of our</p>
          <h2>featured engagements</h2>
        </div>
        <AutoRail>
          {cases.map((item) => (
            <article className="caseCard" key={item.title}>
              <div className="caseBrand">{item.brand}</div>
              <div className="rule" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a className="textLink light" href={item.href}>
                Case study
              </a>
            </article>
          ))}
        </AutoRail>
        <a className="textLink light largeLink" href="#enquiry">
          Work with MomentumX
        </a>
      </section>

      <section className="booking sectionPad reveal" id="enquiry">
        <div>
          <p className="eyebrow">Ready to elevate your digital presence?</p>
          <h2>
            Book your{" "}
            <span className="bookingWord" key={booking}>
              {booking}
            </span>
            <br />
            consultation
          </h2>
          <p className="bookingCopy">
            Get your 30 minute slot with one of our experts to explore your website, app, AI,
            commerce, or digital platform opportunity.
          </p>
          <a className="buttonLink" href="#">
            book a slot
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
