import { notFound } from "next/navigation";
import { AutoRail, CapabilityAccordion, CollaborationSlider, CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../../site-components";
import { cases, posts, serviceDetailBlocks, servicePageDetails, services } from "../../site-data";

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

const coverCards = [
  {
    title: "AI Readiness Assessment",
    body: "Assess your data, technology, processes, capabilities and organisational readiness for AI adoption."
  },
  {
    title: "AI Strategy & Roadmaps",
    body: "Define where AI fits within your organisation and establish a prioritised implementation roadmap."
  },
  {
    title: "AI Opportunity Discovery",
    body: "Turn promising opportunities into prototypes and PoCs to validate feasibility and business potential."
  },
  {
    title: "Digital Transformation Consulting",
    body: "Identify where technology can improve processes, customer experiences and business models beyond AI alone."
  },
  {
    title: "AI Governance & Responsible AI",
    body: "Establish practical frameworks for security, privacy, governance, human oversight and responsible adoption."
  },
  {
    title: "Proof of Concept Development",
    body: "Turn promising opportunities into prototypes and PoCs to validate feasibility and business potential."
  },
  {
    title: "AI Adoption & Change Management",
    body: "Help teams integrate new technologies into day-to-day operations through adoption planning and enablement."
  },
  {
    title: "Executive & Team AI Training",
    body: "Practical workshops designed around how leadership and teams can use AI within their organisation."
  }
];

const coverMarks = [
  "/assets/figma/service-detail/water-mark-x-1.png",
  "/assets/figma/service-detail/water-mark-x-2.png"
];

const executionCards = [
  {
    title: "Integration",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: figmaAssets.executionIcons[0]
  },
  {
    title: "Deployment",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: figmaAssets.executionIcons[1]
  },
  {
    title: "Optimisation",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: figmaAssets.executionIcons[2]
  }
];

function toFigmaTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\s*-\s*/g, " - ");
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
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

  if (detail) {
    const relatedServices = detail.otherServices
      .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
      .filter((item): item is (typeof services)[number] => Boolean(item));

    if (service.slug === "ai-consulting-and-transformation") {
      return (
        <main className="figmaServiceDetail">
          <SiteHeader />
          <section className="figmaServiceHero sectionPad">
            <div className="figmaServiceHeroCopy">
              <h1 aria-label="AI consulting & transformation">
                <span>AI consulting</span>
                <span>&amp; transformation</span>
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
                <img src={figmaAssets.principles[index]} alt="" />
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
            <h2>AI Consulting &amp; Transformation</h2>
            <div className="figmaSubServices">
              {coverCards.map((item, index) => (
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
                {detail.process.items.map((step, index) => (
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
                  images: [figmaAssets.capabilitySmall, figmaAssets.capabilityLarge]
                },
                ...detail.capabilities.items.slice(0, 5).map((item, index) => {
                  const imagePairs: [string, string][] = [
                    [figmaAssets.principles[0], figmaAssets.principles[1]],
                    [figmaAssets.principles[1], figmaAssets.principles[2]],
                    [figmaAssets.principles[2], figmaAssets.capabilitySmall],
                    [figmaAssets.valueImages[0], figmaAssets.valueImages[1]],
                    [figmaAssets.valueImages[1], figmaAssets.valueImages[2]]
                  ];

                  return {
                    title: item,
                    body: `Practical ${item.toLowerCase()} applied around your existing systems, data and long-term transformation priorities.`,
                    images: imagePairs[index % imagePairs.length]
                  };
                })
              ]}
            />
          </section>
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
                  [
                    {
                      title: "Customer Experience",
                      body: "AI assistants · Personalisation · Customer intelligence",
                      image: figmaAssets.valueImages[0]
                    },
                    {
                      title: "People & HR",
                      body: "Knowledge assistants · Recruitment · Employee support",
                      image: figmaAssets.valueImages[1],
                      textTop: true
                    },
                    {
                      title: "Operations",
                      body: "Process automation · Knowledge AI · Document intelligence",
                      image: figmaAssets.valueImages[2]
                    },
                    {
                      title: "Finance & Compliance",
                      body: "Document processing · Risk intelligence · Compliance assistance",
                      image: figmaAssets.valueImages[3]
                    }
                  ].map((item, index) => (
                    <article
                      key={`${item.title}-${copy}`}
                      className={item.textTop ? "isTextTop" : undefined}
                    >
                      <img src={item.image} alt="" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>
          </section>
          <CollaborationSlider
            slides={detail.engagements.map((item, index) => ({
              title: item.title,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.",
              tags: [item.body, "Concept / Capability"],
              image: [figmaAssets.collaborationBg, figmaAssets.hero, figmaAssets.executionBg][index % 3]
            }))}
          />
          <section className="figmaLab sectionPad">
            <div className="figmaLabHeader">
              <div className="figmaLabel">
                <span />
                <p>Innovation Lab</p>
              </div>
              <h2>{detail.lab?.title}</h2>
              <p>{detail.lab?.body}</p>
              <a className="buttonLink" href="/innovation-lab">
                Explore the lab
              </a>
            </div>
            <div className="figmaLabItems">
              {detail.lab?.items.map((item, index) => (
                <article key={item.title}>
                  <img src={figmaAssets.labImages[index]} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="figmaInsights sectionPad">
            <h2>Related Insights</h2>
            <div>
              {detail.insights.slice(0, 3).map((insight) => (
                <a key={insight} href="/blog">
                  <strong>{insight}</strong>
                  <span className="figmaInsightBody">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </span>
                  <span className="figmaInsightMeta">
                    <span>April 7, 2025</span>
                    <i />
                    <span>News &amp; Insights</span>
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
                  <img src={figmaAssets.otherServices[index]} alt="" />
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

    return (
      <main>
        <SiteHeader />
        <PageHero eyebrow={service.title} title={service.title} summary={detail.hero.summary} />
        <section className="capabilityLine sectionPad">
          <p>{detail.hero.capabilityLine}</p>
          <a className="buttonLink" href="/enquiry">
            start a conversation
          </a>
        </section>
        <section className="detailLayout sectionPad">
          <MediaBlock image={service.image} video={service.video} />
          <div className="detailCopy">
            <span className="sectionNumber">01.</span>
            <h2>{detail.intro.title}</h2>
            <p>{detail.intro.lead}</p>
            {detail.intro.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="principleGrid">
              {detail.intro.principles.map((principle) => (
                <article key={principle.title}>
                  <strong>{principle.title}</strong>
                  <p>{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="numberedSection sectionPad">
          <span className="sectionNumber">02.</span>
          <h2>{service.title}</h2>
          <p className="sectionIntro">{detail.subServices.title}</p>
          <div className="subServiceGrid">
            {detail.subServices.items.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="numberedSection sectionPad" id="how-we-work">
          <span className="sectionNumber">03.</span>
          <h2>how we work</h2>
          <p className="sectionIntro">{detail.process.title}</p>
          <div className="processGrid serviceProcessGrid">
            {detail.process.items.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="journeySection sectionPad">
          <div>
            <span className="sectionNumber">04.</span>
            <h2>from strategy to execution</h2>
            <h3>{detail.execution.title}</h3>
            <p>{detail.execution.body}</p>
          </div>
          <div className="journeyFlow">
            {detail.execution.steps.map((step, index) => (
              <article key={step} className="journeyStep">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </article>
            ))}
          </div>
          <p className="journeyNote">{detail.execution.note}</p>
        </section>
        <section className="numberedSection sectionPad">
          <span className="sectionNumber">05.</span>
          <h2>technology & capabilities</h2>
          <div className="capabilityGrid">
            <article>
              <h3>{detail.capabilities.title}</h3>
              <p>{detail.capabilities.body}</p>
            </article>
            {detail.capabilities.items.map((item) => (
              <article key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>
        <section className="numberedSection sectionPad">
          <span className="sectionNumber">06.</span>
          <h2>where this service creates value</h2>
          <p className="sectionIntro">{detail.valueAreas.title}</p>
          <div className="valueGrid">
            {detail.valueAreas.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="featured sectionPad">
          <div className="sectionHead dark">
            <p>featured engagements</p>
            <h2>delivered work and transformation concepts</h2>
            <p>Relevant delivered work is combined with clearly labelled MomentumX Lab and transformation concepts.</p>
          </div>
          <AutoRail>
            {detail.engagements.map((item) => (
              <article className="caseCard" key={item.title}>
                <div className="caseBrand">MomentumX</div>
                <div className="rule" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="tagList">concept / capability</div>
              </article>
            ))}
          </AutoRail>
          <p className="contentNote">Conceptual AI extensions are not presented as historical delivered work.</p>
        </section>
        {detail.lab ? (
          <section className="lab sectionPad">
            <div className="sectionHead">
              <p>innovation lab</p>
              <h2>{detail.lab.title}</h2>
              <p>{detail.lab.body}</p>
            </div>
            <div className="labGrid">
              {detail.lab.items.map((item) => (
                <article key={item.title}>
                  <span>LAB</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <a className="textLink largeLink" href="/innovation-lab">
              explore the lab
            </a>
          </section>
        ) : null}
        {detail.serviceModels ? (
          <section className="numberedSection sectionPad">
            <span className="sectionNumber">08.</span>
            <h2>{detail.serviceModels.title}</h2>
            <div className="valueGrid">
              {detail.serviceModels.items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
        <section className="relatedRail sectionPad">
          <h2>related insights</h2>
          <div className="miniCardGrid">
            {detail.insights.map((insight, index) => (
              <a className="miniMediaCard insightOnlyCard" key={insight} href="/blog">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{insight}</strong>
              </a>
            ))}
          </div>
        </section>
        <section className="relatedRail sectionPad">
          <h2>other services</h2>
          <div className="miniCardGrid">
            {relatedServices.map((item) => (
              <a className="miniMediaCard" key={item.slug} href={`/services/${item.slug}`}>
                <img src={item.image} alt="" />
                <span>service</span>
                <strong>{item.title}</strong>
              </a>
            ))}
          </div>
        </section>
        <section className="ctaBand sectionPad">
          <p>{detail.cta.eyebrow}</p>
          <h2>{detail.cta.title}</h2>
          <p className="ctaCopy">{detail.cta.body}</p>
          <a className="buttonLink" href={detail.cta.href}>
            {detail.cta.label}
          </a>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="service" title={service.title} summary={service.summary} />
      <section className="detailLayout sectionPad">
        <MediaBlock image={service.image} video={service.video} />
        <div className="detailCopy">
          <span className="sectionNumber">01.</span>
          <h2>{serviceDetailBlocks.introTitle}</h2>
          <p>{service.body}</p>
          <p>{serviceDetailBlocks.introBody}</p>
          <ul>
            <li>discovery and digital strategy</li>
            <li>ux, interface design, and prototyping</li>
            <li>implementation, testing, and launch support</li>
          </ul>
          <a className="textLink" href="/enquiry">
            enquire about this service
          </a>
        </div>
      </section>
      <section className="numberedSection sectionPad" id="how-we-work">
        <span className="sectionNumber">02.</span>
        <h2>how we work</h2>
        <div className="processGrid">
          {serviceDetailBlocks.process.map((step) => (
            <article key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="numberedSection sectionPad">
        <span className="sectionNumber">03.</span>
        <h2>Technologies</h2>
        <div className="techGrid">
          {serviceDetailBlocks.technologies.map((tech) => (
            <article key={tech.title}>
              <img src={tech.image} alt={tech.title} />
              <h3>{tech.title}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="featured sectionPad">
        <div className="sectionHead dark">
          <p>A selection of our</p>
          <h2>featured engagements</h2>
        </div>
        <AutoRail>
          {cases.slice(0, 5).map((item) => (
            <article className="caseCard" key={item.slug}>
              <div className="caseBrand">{item.client}</div>
              <div className="rule" />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <a className="textLink light" href={`/cases/${item.slug}`}>
                Case study
              </a>
            </article>
          ))}
        </AutoRail>
      </section>
      <section className="testimonialBlock sectionPad">
        <h2>Client testimonials</h2>
        {serviceDetailBlocks.testimonials.map((quote) => (
          <blockquote key={quote}>{quote}</blockquote>
        ))}
      </section>
      <section className="relatedRail sectionPad">
        <h2>related insights</h2>
        <div className="miniCardGrid">
          {posts.slice(0, 4).map((post) => (
            <a className="miniMediaCard" key={post.slug} href={`/blog/${post.slug}`}>
              <img src={post.image} alt="" />
              <span>{post.date}</span>
              <strong>{post.title}</strong>
            </a>
          ))}
        </div>
      </section>
      <section className="relatedRail sectionPad">
        <h2>other services</h2>
        <div className="miniCardGrid">
          {services
            .filter((item) => item.slug !== service.slug)
            .slice(0, 4)
            .map((item) => (
              <a className="miniMediaCard" key={item.slug} href={`/services/${item.slug}`}>
                <img src={item.image} alt="" />
                <span>service</span>
                <strong>{item.title}</strong>
              </a>
            ))}
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
