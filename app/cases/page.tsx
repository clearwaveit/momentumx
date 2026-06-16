import { CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../site-components";
import { cases } from "../site-data";

export default function CasesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="work"
        title="digital work & brand-led experiences"
        summary="Selected digital experiences, content systems, and brand-led customer journeys shaped for regional and global brands."
      />
      <section className="workGrid sectionPad">
        {cases.map((item) => (
          <a className="workCard" href={`/cases/${item.slug}`} key={item.slug}>
            <MediaBlock image={item.image} />
            <div className="workBrand">{item.client}</div>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </a>
        ))}
      </section>
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
