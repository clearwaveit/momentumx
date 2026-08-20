import { notFound } from "next/navigation";
import { MediaBlock, SiteFooter, SiteHeader } from "../../site-components";
import { serviceDetailBlocks, servicePageDetails, services } from "../../site-data";
import { EngagementCarousel } from "./engagement-carousel";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const DESIGN = "/assets/design";

// Icon sets exported from the Figma file; both grids cycle through them.
const SERVICE_ICONS = [1, 2, 3, 4].map((n) => `${DESIGN}/icon-service-${n}.svg`);
const EXECUTION_ICONS = [1, 2, 3, 4].map((n) => `${DESIGN}/icon-execution-${n}.svg`);
const PRINCIPLE_IMAGES = [1, 2, 3].map((n) => `${DESIGN}/principle-${n}.jpg`);
const VALUE_IMAGES = [1, 2, 3, 4, 5, 6].map((n) => `${DESIGN}/value-${n}.jpg`);
const LAB_IMAGES = [1, 2, 3].map((n) => `${DESIGN}/lab-${n}.jpg`);

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
  const heroSummary = detail?.hero.summary ?? service.summary;
  const process = detail?.process.items ?? serviceDetailBlocks.process;
  const relatedServices = (detail?.otherServices ?? services.map((item) => item.slug))
    .filter((relatedSlug) => relatedSlug !== service.slug)
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof services)[number] => Boolean(item));

  return (
    <main className="servicePage">
      <SiteHeader variant="solid" />

      <section className="svcHero">
        <div className="svcHeroCopy">
          <h1>{service.title}</h1>
          <p>{heroSummary}</p>
        </div>
        <a className="svcPill" href="/enquiry">
          Start a conversation
        </a>
      </section>
      <div className="svcHeroMedia">
        <img src={`${DESIGN}/hero.jpg`} alt="" width={2400} height={1056} />
      </div>

      <section className="svcIntro">
        <h2>{detail?.intro.title ?? serviceDetailBlocks.introTitle}</h2>
        <div className="svcIntroCopy">
          <p>{detail?.intro.lead ?? service.body}</p>
          {(detail?.intro.body ?? [serviceDetailBlocks.introBody]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {detail ? (
        <section className="svcPrinciples">
          {detail.intro.principles.map((principle, index) => (
            <article key={principle.title}>
              <img
                src={PRINCIPLE_IMAGES[index % PRINCIPLE_IMAGES.length]}
                alt=""
                width={900}
                height={675}
              />
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </section>
      ) : null}

      {detail ? (
        <section className="svcCover">
          <p className="svcEyebrow">
            <i aria-hidden="true" />
            {detail.subServices.title}
          </p>
          <h2>{service.title}</h2>
          <div className="svcCoverGrid">
            {detail.subServices.items.map((item, index) => (
              <article key={item.title}>
                <span className="svcCoverIcon">
                  <img
                    src={SERVICE_ICONS[index % SERVICE_ICONS.length]}
                    alt=""
                    width={38}
                    height={38}
                  />
                </span>
                <img
                  className="svcCoverChevron svcCoverChevronTop"
                  src={`${DESIGN}/card-chevron-b.svg`}
                  alt=""
                  aria-hidden="true"
                />
                <img
                  className="svcCoverChevron svcCoverChevronBottom"
                  src={`${DESIGN}/card-chevron-a.svg`}
                  alt=""
                  aria-hidden="true"
                />
                <div className="svcCoverCopy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="svcProcess">
        <img
          className="svcProcessMedia"
          src={`${DESIGN}/process-bg.jpg`}
          alt=""
          width={1689}
          height={931}
        />
        <h2 className="svcSrOnly">how we work</h2>
        <p className="svcWatermark" aria-hidden="true">
          how we work
        </p>
        <p className="svcProcessLead">
          {detail?.process.title ?? serviceDetailBlocks.introTitle}
        </p>
        <div className="svcProcessGrid">
          {process.map((step, index) => (
            <article key={step.title}>
              <span className="svcProcessNumber">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {detail ? (
        <section className="svcExecution">
          <div className="svcExecutionHead">
            <div>
              <h2>from strategy to execution</h2>
              <p className="svcExecutionLead">{detail.execution.title}</p>
            </div>
            <div>
              <p>{detail.execution.body}</p>
              <p className="svcExecutionNote">{detail.execution.note}</p>
            </div>
          </div>
          <div className="svcExecutionRail">
            {detail.execution.steps.map((step, index) => (
              <article key={step}>
                <span className="svcExecutionIcon">
                  <img
                    src={EXECUTION_ICONS[index % EXECUTION_ICONS.length]}
                    alt=""
                    width={38}
                    height={38}
                  />
                </span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {detail ? (
        <section className="svcTech">
          <h2>technology &amp; capabilities</h2>
          <div className="svcTechHead">
            <div className="svcTechCopy">
              <span className="svcTechNumber">01</span>
              <h3>{detail.capabilities.title}</h3>
              <p>{detail.capabilities.body}</p>
              <p className="svcTechLine">{detail.hero.capabilityLine}</p>
            </div>
            <div className="svcTechMedia" aria-hidden="true">
              <img src={service.image} alt="" width={640} height={295} />
              <img src={`${DESIGN}/capability-2.jpg`} alt="" width={720} height={405} />
            </div>
          </div>
          <ul className="svcTechList">
            {detail.capabilities.items.map((item) => (
              <li key={item}>
                <span>{item}</span>
                <img src={`${DESIGN}/arrow-tile.svg`} alt="" width={40} height={40} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {detail ? (
        <section className="svcValue">
          <div className="svcValueHead">
            <p className="svcEyebrow isMuted">
              <i aria-hidden="true" />
              {detail.valueAreas.title}
            </p>
            <h2>where this service creates value</h2>
          </div>
          <div className="svcValueRail">
            {detail.valueAreas.items.map((item, index) => (
              <article key={item.title}>
                <img
                  src={VALUE_IMAGES[index % VALUE_IMAGES.length]}
                  alt=""
                  width={800}
                  height={533}
                />
                <div className="svcValueCopy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {detail ? (
        <section className="svcEngagements">
          <EngagementCarousel items={detail.engagements} />
        </section>
      ) : null}

      {detail?.lab ? (
        <section className="svcLab">
          <p className="svcEyebrow isMuted">
            <i aria-hidden="true" />
            AI Innovation Lab
          </p>
          <div className="svcLabHead">
            <div>
              <h2>{detail.lab.title}</h2>
              <p>{detail.lab.body}</p>
            </div>
            <a className="svcPill" href="/innovation-lab">
              Explore the lab
            </a>
          </div>
          <div className="svcLabGrid">
            {detail.lab.items.map((item, index) => (
              <article key={item.title}>
                <img
                  src={LAB_IMAGES[index % LAB_IMAGES.length]}
                  alt=""
                  width={960}
                  height={1440}
                />
                <div className="svcLabCopy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {detail?.serviceModels ? (
        <section className="svcModels">
          <h2>{detail.serviceModels.title}</h2>
          <div className="svcModelsGrid">
            {detail.serviceModels.items.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {detail ? (
        <section className="svcInsights">
          <h2>related insights</h2>
          <ul>
            {detail.insights.map((insight) => (
              <li key={insight}>
                <h3>{insight}</h3>
                <a href="/blog">
                  Explore more<span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="svcOther">
        <h2>other services</h2>
        <div className="listingGrid">
          {relatedServices.map((item, index) => (
            <a className="listingCard" href={`/services/${item.slug}`} key={item.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <MediaBlock image={item.image} video={item.video} />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="svcCta">
        <div className="svcCtaCopy">
          <h2>{detail?.cta.title ?? "Let's build what's next."}</h2>
          <p className="svcCtaBody">
            {detail?.cta.body ??
              "Talk to us about your next transformation initiative and we will shape the practical next steps."}
          </p>
          <a className="svcPill isLight" href={detail?.cta.href ?? "/enquiry"}>
            {detail?.cta.label ?? "start a conversation"}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
