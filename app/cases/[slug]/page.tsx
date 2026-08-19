import { notFound } from "next/navigation";
import { CaseGallery, CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../../site-components";
import { caseDetailBlocks, caseDetailMedia, casePageDetails, cases } from "../../site-data";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug) ?? cases[0];

  if (!item) {
    notFound();
  }

  const detail = casePageDetails[item.slug];

  if (detail) {
    return (
      <main>
        <SiteHeader />
        <PageHero eyebrow={detail.eyebrow} title={item.title} summary={item.summary} />
        <section className="caseDetail sectionPad">
          <MediaBlock image={item.image} />
          <div className="detailCopy">
            <div className="caseLogoLarge textLogo">{item.client}</div>
            <h2>project metadata</h2>
            <ul>
              {detail.metadata.map((meta) => (
                <li key={meta.label}>
                  <strong>{meta.label}</strong>
                  <span>{meta.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="storyStack sectionPad">
          {detail.story.map((block, index) => (
            <article key={block.title}>
              <span className="sectionNumber">{String(index + 1).padStart(2, "0")}.</span>
              <h2>{block.title}</h2>
              <p>{block.body}</p>
            </article>
          ))}
        </section>
        <section className="numberedSection sectionPad">
          <span className="sectionNumber">02.</span>
          <h2>what we built</h2>
          <p className="sectionIntro">
            {detail.builtIntro ??
              "A premium digital ecosystem designed around discovery, conversion and regional scalability."}
          </p>
          <div className="subServiceGrid">
            {detail.built.map((builtItem, index) => (
              <article key={builtItem.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{builtItem.title}</h3>
                <p>{builtItem.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="caseJourney sectionPad">
          <div className="sectionHead">
            <p>{detail.journeyEyebrow ?? "from browsing to conversation"}</p>
            <h2>{detail.leadJourney.title}</h2>
            <p>{detail.leadJourney.body}</p>
          </div>
          <div className="caseJourneyGrid">
            {detail.leadJourney.steps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <p className="contentNote">{detail.leadJourney.note}</p>
        </section>
        <CaseGallery items={detail.visualStory} />
        <section className="caseSystem sectionPad">
          <div className="sectionHead dark">
            <p>{detail.ecosystemEyebrow ?? "the digital ecosystem"}</p>
            <h2>{detail.ecosystem.title}</h2>
            <p>{detail.ecosystem.body}</p>
          </div>
          <div className="caseSystemFlow">
            {detail.ecosystem.steps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <div className="caseMarketList">
            {detail.ecosystem.markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </section>
        <section className="relatedRail sectionPad">
          <h2>explore more work</h2>
          <div className="miniCardGrid">
            {detail.relatedWork.map((work) => (
              <a className="miniMediaCard insightOnlyCard" key={work.title} href={work.href}>
                <span>{work.body}</span>
                <strong>{work.title}</strong>
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
      <PageHero eyebrow={item.client} title={item.title} summary={item.summary} />
      <section className="caseDetail sectionPad">
        <MediaBlock image={item.image} />
        <div className="detailCopy">
          <div className="caseLogoLarge textLogo">{item.client}</div>
          <h2>project scope</h2>
          <p>
            A digital engagement shaped around audience behavior, brand consistency, platform
            clarity, and measurable customer impact across the right touchpoints.
          </p>
          <ul>
            {item.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="storyStack sectionPad">
        {caseDetailBlocks.map((block, index) => (
          <article key={block.title}>
            <span className="sectionNumber">{String(index + 1).padStart(2, "0")}.</span>
            <h2>{block.title}</h2>
            <p>{block.body}</p>
          </article>
        ))}
      </section>
      <section className="caseGallery sectionPad">
        {caseDetailMedia.map((media) => (
          <figure key={media.title}>
            <img src={media.image} alt={media.title} />
            <figcaption>{media.title}</figcaption>
          </figure>
        ))}
      </section>
      <section className="testimonialBlock sectionPad">
        <h2>client testimonial</h2>
        <blockquote>
          MomentumX brings strategy, cultural awareness, and production focus into digital work
          that feels relevant in-market.
        </blockquote>
        <blockquote>
          Responsibility, punctuality, and attentiveness helped the project move with confidence
          from idea to rollout.
        </blockquote>
      </section>
      <section className="relatedRail sectionPad">
        <h2>next work</h2>
        <div className="miniCardGrid">
          {cases
            .filter((caseItem) => caseItem.slug !== item.slug)
            .slice(0, 4)
            .map((caseItem) => (
              <a className="miniMediaCard" key={caseItem.slug} href={`/cases/${caseItem.slug}`}>
                <img src={caseItem.image} alt="" />
                <span>{caseItem.client}</span>
                <strong>{caseItem.title}</strong>
              </a>
            ))}
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
