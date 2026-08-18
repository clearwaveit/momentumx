import type { CSSProperties } from "react";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";
import { aboutPage, contactPage, innovationLabPage, utilityPages } from "../site-data";

const careerTitles: Record<string, string> = {
  "android-app-developer": "android app developer",
  "back-end-developer": "back-end developer",
  "creative-ui-ux-designer": "creative ui/ux designer",
  "flutter-developer": "flutter developer",
  "ios-developer": "ios developer",
  "part-time-sales-specialist": "part-time sales specialist",
  "product-owner-mobile-super-app": "product owner mobile super app",
  "react-native-developer": "react native developer",
  "senior-frontend-nextjs-developer": "senior frontend nextjs developer",
  "senior-product-designer": "senior product designer",
  "senior-product-designer-dubai": "senior product designer dubai",
  "senior-product-owner-digital-product": "senior product owner digital product",
  "shopify-developer": "shopify developer",
  "software-quality-assurance-officer": "software quality assurance officer",
  "ui-designer-design-code": "ui designer design code",
  "ui-ux-designer": "ui/ux designer",
  "webgl-specialist": "webgl specialist"
};

export default async function UtilityPage({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join("/");
  const top = slug[0];
  const page =
    utilityPages[path] ??
    (top === "careers" && slug[1]
      ? {
          title: careerTitles[slug[1]] ?? slug[1].replaceAll("-", " "),
          summary: "career detail page",
          body:
            "Explore how this role contributes to digital strategy, design, technology, content, AI, and regional customer experiences."
        }
      : utilityPages[top] ?? {
          title: path.replaceAll("-", " "),
          summary: "supporting page",
          body:
            "MomentumX uses this space for company information, digital resources, credentials, and regional brand-led content."
        });

  if (path === "innovation-lab" || path === "ai-lab") {
    return (
      <main>
        <SiteHeader />
        <section className="labHero sectionPad">
          <div>
            <p>{innovationLabPage.hero.eyebrow}</p>
            <h1>
              {innovationLabPage.hero.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p>{innovationLabPage.hero.summary}</p>
            <a className="roundLink" href="#lab-projects">
              explore the lab
            </a>
          </div>
          <div className="labCanvas" aria-hidden="true">
            {innovationLabPage.hero.fragments.map((fragment, index) => (
              <span key={fragment} style={{ "--i": index } as CSSProperties}>
                {fragment}
              </span>
            ))}
          </div>
        </section>
        <section className="labPurpose sectionPad">
          <div className="sectionHead">
            <p>{innovationLabPage.purpose.eyebrow}</p>
            <h2>{innovationLabPage.purpose.title}</h2>
            <p>{innovationLabPage.purpose.body}</p>
          </div>
          <div className="labProgression">
            {innovationLabPage.purpose.steps.map((step, index) => (
              <span key={step}>{String(index + 1).padStart(2, "0")} / {step}</span>
            ))}
          </div>
        </section>
        <section className="labProjects sectionPad" id="lab-projects">
          <div className="sectionHead">
            <p>02 / CURRENTLY IN THE LAB</p>
            <h2>Things we&apos;re exploring.</h2>
          </div>
          <div className="labProjectStack">
            {innovationLabPage.projects.map((project, index) => (
              <article className={`labProject ${project.visual}`} key={project.title}>
                <div className="labProjectVisual" aria-hidden="true">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
                <div className="labProjectCopy">
                  <span>{String(index + 1).padStart(2, "0")} — {project.category}</span>
                  <h3>{project.title}</h3>
                  <h4>{project.headline}</h4>
                  <p>{project.body}</p>
                  <p>{project.exploring}</p>
                </div>
                <div className="labProjectMetrics">
                  <span>{project.status}</span>
                  {project.metrics.map((metric) => (
                    <strong key={metric}>{metric}</strong>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="industryIndex sectionPad">
          <div className="sectionHead">
            <p>03 / ACROSS INDUSTRIES</p>
            <h2>Different industries. Similar problems worth solving.</h2>
          </div>
          <div>
            {innovationLabPage.industries.map(([industry, body]) => (
              <article key={industry}>
                <h3>{industry}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="labReality sectionPad">
          <div className="sectionHead dark">
            <p>04 / HOW IDEAS EVOLVE</p>
            <h2>{innovationLabPage.reality.title}</h2>
            <p>{innovationLabPage.reality.body}</p>
          </div>
          <div className="realityPath">
            <div>
              {innovationLabPage.reality.path.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <div>
              {innovationLabPage.reality.branches.map((branch) => (
                <span key={branch}>{branch}</span>
              ))}
            </div>
          </div>
        </section>
        <section className="statusSystem sectionPad">
          <h2>experiment status system</h2>
          <div>
            {innovationLabPage.statuses.map(([status, body]) => (
              <article key={status}>
                <h3>{status}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="labBuild sectionPad">
          <p>{innovationLabPage.cta.eyebrow}</p>
          <h2>{innovationLabPage.cta.title}</h2>
          <p>{innovationLabPage.cta.body}</p>
          <div>
            <a className="buttonLink" href="/enquiry">
              bring us a challenge
            </a>
            <a className="textLink light" href="/services">
              explore our services
            </a>
          </div>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow={top} title={page.title} summary={page.summary} />
      {path === "about-us" ? (
        <>
          <section className="aboutHeroMedia sectionPad">
            <img src={aboutPage.gallery[0]} alt="" />
            <div>
              <span className="sectionNumber">01.</span>
              <h2>{aboutPage.title}</h2>
              <p>{aboutPage.summary}</p>
              <p>{aboutPage.intro}</p>
            </div>
          </section>
          <section className="statsBand sectionPad">
            <h2>{aboutPage.statement}</h2>
            <div>
              {aboutPage.stats.map(([value, label]) => (
                <article key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </section>
          <section className="imageMarquee">
            <div>
              {[...aboutPage.gallery, ...aboutPage.gallery].map((image, index) => (
                <img src={image} alt="" key={`${image}-${index}`} />
              ))}
            </div>
          </section>
          <section className="relatedRail sectionPad">
            <h2>the people behind momentumX</h2>
            <div className="miniCardGrid">
              {aboutPage.people.map(([capability, label], index) => (
                <a className="miniMediaCard" href="/about-us" key={capability}>
                  <img src={aboutPage.gallery[index % aboutPage.gallery.length]} alt="" />
                  <span>{capability}</span>
                  <strong>{label}</strong>
                </a>
              ))}
            </div>
          </section>
          <section className="evolutionSection sectionPad">
            <div className="sectionHead">
              <p>our evolution</p>
              <h2>experience that keeps evolving.</h2>
              <p>
                MomentumX represents the evolution of our experience - applying technology and
                intelligence to increasingly complex business challenges.
              </p>
            </div>
            <div className="evolutionFlow">
              {aboutPage.evolution.map((step, index) => (
                <article key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </article>
              ))}
            </div>
          </section>
          <section className="testimonialBlock aboutStrengths sectionPad">
            <h2>what we bring together</h2>
            {aboutPage.strengths.map((strength) => (
              <article key={strength.title}>
                <h3>{strength.title}</h3>
                <p>{strength.body}</p>
              </article>
            ))}
          </section>
          <section className="clientWall sectionPad">
            <div className="sectionHead">
              <p>our heritage</p>
              <h2>built on Momentum.</h2>
              <p>
                MomentumX builds on Momentum&apos;s established experience working with leading
                organisations and brands across the Middle East.
              </p>
            </div>
            <div>
              {aboutPage.heritageClients.map((client) => (
                <span key={client}>{client}</span>
              ))}
            </div>
          </section>
        </>
      ) : path === "contact-us" || top === "enquiry" ? (
        <>
          <section className="officeGrid sectionPad">
            {contactPage.offices.map((office) => (
              <article key={office.city}>
                <h2>{office.city}</h2>
                <p>{office.address}</p>
                <a className="textLink" href={office.map}>
                  get directions
                </a>
              </article>
            ))}
          </section>
          <section className="contactForm sectionPad">
            <h2>send us a message</h2>
            <div>
              <input placeholder="name" />
              <input placeholder="email" />
              <input placeholder="company" />
              <textarea placeholder="tell us about your project!" />
            </div>
            <a className="buttonLink" href="mailto:hello@momentumx.com">
              submit enquiry
            </a>
          </section>
          <section className="portfolioLinks sectionPad">
            <h2>Portfolios</h2>
            <div>
              {contactPage.portfolios.map(([label, image]) => (
                <a href="/contact-us" key={label}>
                  <img src={image} alt={label} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </section>
        </>
      ) : top === "careers" && slug[1] ? (
        <section className="jobDetail sectionPad">
          <article>
            <h2>requirements</h2>
            <ul>
              <li>strong experience contributing to digital product, platform, or customer experience work</li>
              <li>comfort translating strategy and design direction into polished execution</li>
              <li>ability to collaborate with strategy, design, technology, content, and delivery teams</li>
            </ul>
          </article>
          <article>
            <h2>skills</h2>
            <ul>
              <li>digital thinking, visual craft, communication, and delivery discipline</li>
              <li>brand systems, platform execution, content planning, and rollout support</li>
              <li>attention to detail across web, mobile, social, content, and digital touchpoints</li>
            </ul>
          </article>
          <article>
            <h2>why MomentumX?</h2>
            <p>Work on ambitious regional digital services with a team that values craft, ownership, and practical impact.</p>
          </article>
        </section>
      ) : (
        <section className="articleBody sectionPad">
          <p>{page.body}</p>
          <a className="buttonLink" href="/enquiry">
            start a conversation
          </a>
        </section>
      )}
      <SiteFooter />
    </main>
  );
}
