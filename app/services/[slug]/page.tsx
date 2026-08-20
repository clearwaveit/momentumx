import { notFound } from "next/navigation";
import { CapabilityAccordion, CollaborationSlider, SiteFooter, SiteHeader } from "../../site-components";
import { servicePageDetails, services } from "../../site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const figmaAssets = {
  hero: "/assets/figma/service-detail/hero.png",
  principles: [
    "/assets/figma/service-detail/principle-1.png",
    "/assets/figma/service-detail/principle-2.png",
    "/assets/figma/service-detail/principle-3.png"
  ],
  workPhone: "/assets/figma/service-detail/execution.png",
  executionBg: "/assets/figma/service-detail/strategy-bg.png",
  collaborationBg: "/assets/figma/service-detail/strategy-card.png",
  capabilityLarge: "/assets/figma/service-detail/capability-large.png",
  capabilitySmall: "/assets/figma/service-detail/capability-small.png",
  valueImages: [
    "/assets/figma/service-detail/value-1.png",
    "/assets/figma/service-detail/value-2.jpeg",
    "/assets/figma/service-detail/value-3.png",
    "/assets/figma/service-detail/value-4.png"
  ],
  labImages: [
    "/assets/figma/service-detail/prototype-bg.png",
    "/assets/figma/service-detail/lab-1.png",
    "/assets/figma/service-detail/lab-2.png"
  ],
  cta: "/assets/figma/service-detail/cta-new.png",
  executionIcons: [
    "/assets/figma/service-detail/strategy-icon-1.svg",
    "/assets/figma/service-detail/strategy-icon-2.svg",
    "/assets/figma/service-detail/strategy-icon-3.svg"
  ],
  arrowIcon: "/assets/figma/service-detail/arrow-icon.svg",
  otherServices: [
    "/assets/figma/service-detail/service-ai.png",
    "/assets/figma/service-detail/service-auto.png",
    "/assets/figma/service-detail/service-data.png"
  ]
};

const coverIcons = [
  "/assets/figma/service-detail/Simplification (1).png",
  "/assets/figma/service-detail/Simplification.png",
  "/assets/figma/service-detail/Simplification (2).png",
  "/assets/figma/service-detail/Simplification (3).png"
];

const coverMarks = [
  "/assets/figma/service-detail/water-mark-x-1.png",
  "/assets/figma/service-detail/water-mark-x-2.png"
];

const collaborationImages = [
  figmaAssets.collaborationBg,
  figmaAssets.hero,
  figmaAssets.executionBg
];

function toFigmaTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\s*-\s*/g, " - ");
}

function splitHeroTitle(title: string) {
  const parts = title.split(/\s*&\s*/);
  if (parts.length === 2) {
    return [parts[0], `& ${parts[1]}`];
  }
  return [title];
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const detail = servicePageDetails[service.slug as keyof typeof servicePageDetails];

  if (!detail) {
    return (
      <main className="figmaServiceDetail">
        <SiteHeader />
        <section className="figmaServiceHero sectionPad">
          <div className="figmaServiceHeroCopy">
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
          </div>
          <a className="buttonLink" href="/enquiry">
            Start a conversation
          </a>
        </section>
        <section className="figmaHeroMedia">
          <img src={service.image || figmaAssets.hero} alt="" />
        </section>
        <section className="figmaIntro sectionPad">
          <h2>{service.title}</h2>
          <div>
            <p>{service.body}</p>
          </div>
        </section>
        <SiteFooter />
      </main>
    );
  }

  const relatedServices = detail.otherServices
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof services)[number] => Boolean(item));

  const heroLines = splitHeroTitle(service.title);
  const processSteps = detail.process.items.slice(0, 4);
  const executionCards = detail.execution.steps.slice(-3).map((step, index) => ({
    title: toFigmaTitle(step),
    body: detail.execution.note || detail.execution.body,
    icon: figmaAssets.executionIcons[index % figmaAssets.executionIcons.length]
  }));
  const valueItems = detail.valueAreas.items;
  const capabilityImages: [string, string][] = [
    [figmaAssets.capabilitySmall, figmaAssets.capabilityLarge],
    [figmaAssets.principles[0], figmaAssets.principles[1]],
    [figmaAssets.principles[1], figmaAssets.principles[2]],
    [figmaAssets.principles[2], figmaAssets.capabilitySmall],
    [figmaAssets.valueImages[0], figmaAssets.valueImages[1]],
    [figmaAssets.valueImages[1], figmaAssets.valueImages[2]]
  ];

  return (
    <main className="figmaServiceDetail">
      <SiteHeader />
      <section className="figmaServiceHero sectionPad">
        <div className="figmaServiceHeroCopy">
          <h1 aria-label={service.title}>
            {heroLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p>{detail.hero.summary}</p>
        </div>
        <a className="buttonLink" href="/enquiry">
          Start a conversation
        </a>
      </section>
      <section className="figmaHeroMedia">
        <img src={figmaAssets.hero} alt="" />
      </section>
      <section className="figmaIntro sectionPad">
        <h2>{detail.intro.title}</h2>
        <div>
          <p>{detail.intro.lead}</p>
          {detail.intro.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="figmaPrinciples sectionPad">
        {detail.intro.principles.map((principle, index) => (
          <article key={principle.title}>
            <img src={figmaAssets.principles[index % figmaAssets.principles.length]} alt="" />
            <h3>{toFigmaTitle(principle.title)}</h3>
            <p>{principle.body}</p>
          </article>
        ))}
      </section>
      <section className="figmaCover sectionPad">
        <div className="figmaLabel">
          <span />
          <p>{detail.subServices.title}</p>
        </div>
        <h2>{toFigmaTitle(service.title)}</h2>
        <div className="figmaSubServices">
          {detail.subServices.items.map((item, index) => (
            <article key={item.title}>
              {coverMarks.map((mark) => (
                <img key={mark} className="figmaSubServiceMark" src={mark} alt="" />
              ))}
              <span>
                <img src={coverIcons[index % coverIcons.length]} alt="" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="figmaWork">
        <div className="figmaWorkInner">
          <div className="figmaWorkStage">
            <div className="figmaWorkPhone">
              <img src={figmaAssets.workPhone} alt="" />
            </div>
            <p className="figmaWorkWatermark" aria-hidden="true">
              How we work
            </p>
            {processSteps.map((step, index) => (
              <article key={step.title} className={`figmaWorkCard figmaWorkCard--${index + 1}`}>
                <span className="figmaWorkCardFill" aria-hidden="true" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{toFigmaTitle(step.title)}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="figmaExecution">
        <img src={figmaAssets.executionBg} alt="" />
        <div className="figmaExecutionInner sectionPad">
          <div className="figmaExecutionHead">
            <div>
              <h2>From Strategy To Execution</h2>
              <p>{detail.execution.title}</p>
            </div>
            <p>{detail.execution.body}</p>
          </div>
          <div className="figmaExecutionCards">
            {executionCards.map((card) => (
              <article key={card.title}>
                <span>
                  <img src={card.icon} alt="" />
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="figmaCapabilities sectionPad">
        <h2>Technology &amp; Capabilities</h2>
        <CapabilityAccordion
          items={[
            {
              title: detail.capabilities.title,
              body: detail.capabilities.body,
              images: capabilityImages[0]
            },
            ...detail.capabilities.items.slice(0, 5).map((item, index) => ({
              title: item,
              body: `Practical ${item.toLowerCase()} applied around your existing systems, data and long-term transformation priorities.`,
              images: capabilityImages[(index + 1) % capabilityImages.length]
            }))
          ]}
        />
      </section>
      {valueItems.length ? (
        <section className="figmaValue sectionPad">
          <div className="figmaValueHead">
            <div className="figmaLabel">
              <span />
              <p>{detail.valueAreas.title}</p>
            </div>
            <h2>Where This Service Creates Value</h2>
          </div>
          <div className="figmaValueMarquee">
            <div className="figmaValueTrack">
              {[0, 1].flatMap((copy) =>
                valueItems.map((item, index) => (
                  <article
                    key={`${item.title}-${copy}`}
                    className={index % 2 === 1 ? "isTextTop" : undefined}
                  >
                    <img
                      src={figmaAssets.valueImages[index % figmaAssets.valueImages.length]}
                      alt=""
                    />
                    <div>
                      <h3>{toFigmaTitle(item.title)}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>
      ) : null}
      <CollaborationSlider
        slides={detail.engagements.map((item, index) => ({
          title: item.title,
          body: item.body,
          tags: [item.tag ?? "Capability", "Concept / Capability"],
          image: collaborationImages[index % collaborationImages.length]
        }))}
      />
      {detail.lab ? (
        <section className="figmaLab sectionPad">
          <div className="figmaLabHeader">
            <div className="figmaLabel">
              <span />
              <p>Innovation Lab</p>
            </div>
            <h2>{detail.lab.title}</h2>
            <p>{detail.lab.body}</p>
            <a className="buttonLink" href="/innovation-lab">
              Explore the lab
            </a>
          </div>
          <div className="figmaLabItems">
            {detail.lab.items.map((item, index) => (
              <article key={item.title}>
                <img src={figmaAssets.labImages[index % figmaAssets.labImages.length]} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
      {detail.serviceModels ? (
        <section className="figmaCover sectionPad">
          <div className="figmaLabel">
            <span />
            <p>How we engage</p>
          </div>
          <h2>{detail.serviceModels.title}</h2>
          <div className="figmaSubServices">
            {detail.serviceModels.items.map((item, index) => (
              <article key={item.title}>
                {coverMarks.map((mark) => (
                  <img key={mark} className="figmaSubServiceMark" src={mark} alt="" />
                ))}
                <span>
                  <img src={coverIcons[index % coverIcons.length]} alt="" />
                </span>
                <h3>{toFigmaTitle(item.title)}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
      <section className="figmaInsights sectionPad">
        <h2>Related Insights</h2>
        <div>
          {detail.insights.slice(0, 3).map((insight) => (
            <a key={insight} href="/blog">
              <strong>{insight}</strong>
              <span className="figmaInsightBody">{detail.hero.capabilityLine}</span>
              <span className="figmaInsightMeta">
                <span>News &amp; Insights</span>
                <i />
                <span>Explore</span>
              </span>
              <em>Explore more</em>
            </a>
          ))}
        </div>
      </section>
      <section className="figmaOtherServices sectionPad">
        <h2>other services</h2>
        <div>
          {relatedServices.slice(0, 3).map((item, index) => (
            <a key={item.slug} href={`/services/${item.slug}`}>
              <img
                src={item.image || figmaAssets.otherServices[index % figmaAssets.otherServices.length]}
                alt=""
              />
              <strong>{item.title}</strong>
              <span>
                <img src={figmaAssets.arrowIcon} alt="" />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="figmaCta sectionPad">
        <div>
          <div className="figmaLabel">
            <span />
            <p>{detail.cta.eyebrow}</p>
          </div>
          <h2>{detail.cta.title}</h2>
          <p>{detail.cta.body}</p>
          <a className="buttonLink" href={detail.cta.href}>
            {detail.cta.label}
          </a>
        </div>
        <img src={figmaAssets.cta} alt="" />
      </section>
      <SiteFooter />
    </main>
  );
}
