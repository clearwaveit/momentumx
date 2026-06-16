import { notFound } from "next/navigation";
import { CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../../site-components";
import { caseDetailBlocks, caseDetailMedia, cases } from "../../site-data";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug) ?? cases[0];

  if (!item) {
    notFound();
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
