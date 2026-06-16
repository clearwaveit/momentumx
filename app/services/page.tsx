import { CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../site-components";
import { services } from "../site-data";

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="our services"
        title="helping brands by building elegant & refined digital experiences"
        summary="Digital services that support websites, apps, AI workflows, commerce, platforms, content, and long-term customer engagement."
      />
      <section className="listingGrid sectionPad">
        {services.map((service, index) => (
          <a className="listingCard" href={`/services/${service.slug}`} key={service.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <MediaBlock image={service.image} video={service.video} />
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
          </a>
        ))}
      </section>
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
