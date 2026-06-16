import { PageHero, SiteFooter, SiteHeader } from "../site-components";
import { aboutPage, contactPage, utilityPages } from "../site-data";

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
              <p>
                A distributed team of strategists, designers, technologists, content specialists,
                and delivery leads creating digital services and customer experiences across the
                region.
              </p>
            </div>
          </section>
          <section className="statsBand sectionPad">
            <h2>{aboutPage.summary}</h2>
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
            <h2>leadership & management team</h2>
            <div className="miniCardGrid">
              {aboutPage.leaders.map((leader, index) => (
                <a className="miniMediaCard" href="/about-us" key={leader}>
                  <img src={aboutPage.gallery[index % aboutPage.gallery.length]} alt="" />
                  <span>team</span>
                  <strong>{leader}</strong>
                </a>
              ))}
            </div>
          </section>
          <section className="testimonialBlock sectionPad">
            <h2>a selection of our accolades</h2>
            {aboutPage.awards.map((award) => (
              <blockquote key={award}>{award}</blockquote>
            ))}
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
