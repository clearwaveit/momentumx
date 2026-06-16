import { notFound } from "next/navigation";
import { AutoRail, CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../../site-components";
import { cases, posts, serviceDetailBlocks, services } from "../../site-data";

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
