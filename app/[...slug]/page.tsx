import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { pageMetadata } from "../../lib/seo";
import { INDEXED_UTILITY_PATHS } from "../../lib/site";
import { ContactForm } from "../contact-form";
import { notFound } from "next/navigation";
import { AboutContent } from "../about-page";
import { PrivacyPolicy } from "../privacy-policy";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";
import { contactPage, industriesPage, isVisibleCaseHref, utilityPages } from "../site-data";
import { SocialIcon } from "../social-icons";

function toTitle(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Only real pages are built; any other address falls through to app/not-found.
export const dynamicParams = false;

export function generateStaticParams() {
  return INDEXED_UTILITY_PATHS.map((path) => ({ slug: path.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const page = utilityPages[path];
  const indexed = INDEXED_UTILITY_PATHS.includes(path);

  if (path === "industries") {
    return pageMetadata({ title: "Industries", description: industriesPage.hero.summary, path: "/industries" });
  }

  const title = page ? toTitle(page.title) : toTitle(path.split("/").pop()?.replaceAll("-", " ") ?? "MomentumX");
  // Fallback and placeholder pages rendered by this catch-all stay out of search.
  return pageMetadata({ title, description: page?.summary, path: `/${path}`, noindex: !indexed });
}

export default async function UtilityPage({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join("/");
  const top = slug[0];
  const page = utilityPages[path];

  if (!page || !INDEXED_UTILITY_PATHS.includes(path)) {
    notFound();
  }

  if (path === "industries") {
    return (
      <main>
        <SiteHeader />
        <section className="industriesHero sectionPad">
          <p>{industriesPage.hero.eyebrow}</p>
          <h1>{industriesPage.hero.title}</h1>
          <p>{industriesPage.hero.summary}</p>
        </section>
        <section className="industriesIntro sectionPad">
          <span>{industriesPage.intro.eyebrow}</span>
          <h2>{industriesPage.intro.title}</h2>
          <p>{industriesPage.intro.body}</p>
        </section>
        <section className="industriesEditorial sectionPad">
          <aside aria-label="Industry index">
            {industriesPage.industries.map((industry) => (
              <a href={`#industry-${industry.index}`} key={industry.index}>
                <span>{industry.index}</span>
                {industry.name}
              </a>
            ))}
          </aside>
          <div>
            {industriesPage.industries.map((industry) => (
              <article id={`industry-${industry.index}`} key={industry.name}>
                <div className="industryMeta">
                  <span>{industry.index}</span>
                  <p>{industry.name}</p>
                </div>
                <div className="industryCopy">
                  <h2>{industry.headline}</h2>
                  <p>{industry.body}</p>
                  <div className="industryTags">
                    {industry.capabilities.map((capability) => (
                      <span key={capability}>{capability}</span>
                    ))}
                  </div>
                  <div className="industryProof">
                    <div>
                      <strong>Relevant work</strong>
                      {industry.work.filter((work) => isVisibleCaseHref(work.href)).length ? (
                        industry.work.filter((work) => isVisibleCaseHref(work.href)).map((work) => (
                          <a href={work.href} key={work.label}>{work.label}</a>
                        ))
                      ) : (
                        <span>Approved credentials to be added.</span>
                      )}
                    </div>
                    <div>
                      <strong>AI Innovation Lab</strong>
                      {industry.lab.length ? (
                        industry.lab.map((lab) => (
                          <a href={lab.href} key={lab.label}>{lab.label}</a>
                        ))
                      ) : (
                        <span>Lab concept to be defined.</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="industryFlow sectionPad">
          <div className="sectionHead">
            <p>{industriesPage.crossIndustry.eyebrow}</p>
            <h2>{industriesPage.crossIndustry.title}</h2>
            <p>{industriesPage.crossIndustry.body}</p>
          </div>
          <div>
            {industriesPage.crossIndustry.flow.map((step, index) => (
              <span key={step}>{String(index + 1).padStart(2, "0")} / {step}</span>
            ))}
          </div>
        </section>
        <section className="industryLab sectionPad">
          <div>
            <p>{industriesPage.lab.eyebrow}</p>
            <h2>{industriesPage.lab.title}</h2>
            <p>{industriesPage.lab.body}</p>
            <a className="buttonLink" href="/innovation-lab">
              explore the lab
            </a>
          </div>
          <div>
            {industriesPage.lab.projects.map(([project, context]) => (
              <article key={project}>
                <strong>{project}</strong>
                <span>{context}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="labBuild sectionPad">
          <p>{industriesPage.cta.eyebrow}</p>
          <h2>{industriesPage.cta.title}</h2>
          <p>{industriesPage.cta.body}</p>
          <div>
            <a className="buttonLink" href="/enquiry">
              {industriesPage.cta.label}
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
      {path === "about-us" || path === "privacy-policy" ? null : (
        <PageHero eyebrow={top} title={page.title} summary={page.summary} />
      )}
      {path === "about-us" ? (
        <AboutContent />
      ) : path === "privacy-policy" ? (
        <PrivacyPolicy />
      ) : path === "contact-us" || top === "enquiry" ? (
        <>
          <section className="officeRegions sectionPad">
            {[...new Set(contactPage.offices.map((office) => office.region))].map((region) => (
              <div className="officeRegion" key={region}>
                <p className="officeRegionLabel">{region}</p>
                <div className="officeGrid">
                  {contactPage.offices
                    .filter((office) => office.region === region)
                    .map((office) => (
                      <article key={office.city}>
                        <h2>{office.city}</h2>
                        <p>{office.address}</p>
                        <a className="textLink" href={office.map} target="_blank" rel="noreferrer">
                          get directions
                        </a>
                      </article>
                    ))}
                </div>
              </div>
            ))}
          </section>
          <ContactForm />
          <section className="portfolioLinks sectionPad">
            <h2>Follow us</h2>
            <div>
              {contactPage.socials.map((social) => {
                const content = (
                  <>
                    <SocialIcon network={social.network} />
                    <span>{social.label}</span>
                  </>
                );
                return social.href ? (
                  <a href={social.href} key={social.network} target="_blank" rel="noreferrer" aria-label={social.label}>
                    {content}
                  </a>
                ) : (
                  <div className="portfolioLinkPending" key={social.network}>
                    {content}
                  </div>
                );
              })}
            </div>
          </section>
        </>
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
