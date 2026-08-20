import { SiteFooter, SiteHeader } from "../site-components";
import { innovationLabPage } from "../site-data";
import { LabExplore } from "./lab-explore";
import { StatusSystem } from "./status-system";

const DESIGN = "/assets/design";

// paired to each project's subject: retail analytics, physical space,
// banking, documents, workplace, aviation
const PROJECT_IMAGES = [
  `${DESIGN}/lab-project-1.jpg`,
  `${DESIGN}/lab-industry-4.jpg`,
  `${DESIGN}/lab-industry-2.jpg`,
  `${DESIGN}/value-3.jpg`,
  `${DESIGN}/value-2.jpg`,
  `${DESIGN}/lab-industry-3.jpg`
];

const INDUSTRY_IMAGES = [
  `${DESIGN}/lab-industry-1.jpg`,
  `${DESIGN}/lab-industry-2.jpg`,
  `${DESIGN}/lab-industry-3.jpg`,
  `${DESIGN}/lab-industry-4.jpg`,
  `${DESIGN}/value-1.jpg`,
  `${DESIGN}/value-6.jpg`,
  `${DESIGN}/value-2.jpg`,
  `${DESIGN}/lab-1.jpg`
];

export default function InnovationLabPage() {
  const { hero, purpose, projects, industries, reality, statuses, cta } = innovationLabPage;

  return (
    <main className="labPage">
      <SiteHeader variant="solid" />

      <section className="labHeroX">
        <div className="labHeroCopy">
          <p className="labHeroEyebrow">{hero.eyebrow}</p>
          <h1>
            {hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="labHeroSummary">{hero.summary}</p>
          <a className="svcPill" href="#lab-explore">
            Explore the lab
          </a>
        </div>
        <div className="labHeroOrb" aria-hidden="true" />
      </section>

      <section className="labSignals" aria-hidden="true">
        {hero.fragments.map((fragment) => (
          <span key={fragment}>{fragment}</span>
        ))}
      </section>

      <section className="labPurposeX">
        <h2>{purpose.title}</h2>
        <p className="labPurposeBody">
          <i aria-hidden="true">→</i>
          {purpose.body}
        </p>
        <div className="labSteps">
          {purpose.steps.map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="labExplore" id="lab-explore">
        <div className="labExploreHead">
          <p className="svcEyebrow isMuted">
            <i aria-hidden="true" />
            Currently in the Lab
          </p>
          <h2>Things we&apos;re exploring.</h2>
        </div>
        <LabExplore projects={projects} images={PROJECT_IMAGES} />
      </section>

      <section className="labIndustries">
        <div className="labIndustriesHead">
          <p className="svcEyebrow isMuted">
            <i aria-hidden="true" />
            Across Industries
          </p>
          <h2>Different industries. Similar problems worth solving.</h2>
        </div>
        <div className="labIndustriesRail">
          {industries.map(([industry, body], index) => (
            <article key={industry}>
              <img src={INDUSTRY_IMAGES[index % INDUSTRY_IMAGES.length]} alt="" />
              <div>
                <h3>{industry}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="labEvolve">
        <p className="labEvolveEyebrow">How Ideas Evolve</p>
        <h2>{reality.title}</h2>
        <p className="labEvolveBody">{reality.body}</p>
        <div className="labEvolveGrid">
          {reality.outcomes.map((outcome) => (
            <article key={outcome.title}>
              <h3>{outcome.title}</h3>
              <p>{outcome.body}</p>
              <span>{outcome.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="labStatuses">
        <div className="labStatusesCopy">
          <h2>Experiment Status System</h2>
          <StatusSystem statuses={statuses} />
        </div>
        <div className="labStatusesMedia" aria-hidden="true">
          <img src={`${DESIGN}/lab-status-device.png`} alt="" width={822} height={462} />
        </div>
      </section>

      <section className="labCta">
        <p className="svcEyebrow">
          <i aria-hidden="true" />
          {cta.eyebrow}
        </p>
        <h2>{cta.title}</h2>
        <p className="labCtaBody">{cta.body}</p>
        <a className="svcPill" href="/book-meeting">
          Book a consultation
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
