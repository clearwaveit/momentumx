import { pageMetadata } from "../../lib/seo";
import { CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../site-components";
import { services } from "../site-data";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "AI consulting, intelligent systems, automation, digital platforms, data, connected technology, cloud and managed services from MomentumX.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="our services"
        title="Digital & AI transformation, built around your business."
        summary="From AI strategy and intelligent systems to enterprise platforms and connected experiences, we bring together the expertise needed to advise, build, integrate and scale."
      />
      <section className="listingGrid sectionPad">
        {services.map((service, index) => (
          <a className="listingCard" href={`/services/${service.slug}`} key={service.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <MediaBlock image={service.image} />
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
