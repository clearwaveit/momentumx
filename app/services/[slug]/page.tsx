import { notFound } from "next/navigation";
import { AutoRail, CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../../site-components";
import { cases, posts, serviceDetailBlocks, servicePageDetails, services } from "../../site-data";

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
