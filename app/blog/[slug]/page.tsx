import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";
import { notFound } from "next/navigation";
import { articles, insightImage, relatedInsights } from "../../insights";
import { CtaBand, SiteFooter, SiteHeader } from "../../site-components";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article
    ? pageMetadata({
        title: article.title,
        description: article.summary,
        path: `/blog/${article.slug}`,
        type: "article",
        image: { url: insightImage(article, 1200), alt: article.image.alt }
      })
    : { title: "Insights", robots: { index: false } };
}

const UNSPLASH_REFERRAL = "?utm_source=momentumx&utm_medium=referral";

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const related = relatedInsights(article);

  return (
    <main className="insightPage">
      <SiteHeader />

      <header className="insightHero">
        <p className="insightMeta">
          <a href={`/services/${article.serviceSlug}`}>{article.category}</a>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </p>
        <h1>{article.title}</h1>
        <p className="insightLead">{article.summary}</p>
      </header>

      <figure className="insightHeroMedia">
        <img src={insightImage(article, 2000)} alt={article.image.alt} />
        <figcaption>
          Photo by{" "}
          <a href={`${article.image.credit.url}${UNSPLASH_REFERRAL}`} rel="noreferrer" target="_blank">
            {article.image.credit.name}
          </a>{" "}
          on{" "}
          <a href={`https://unsplash.com/${UNSPLASH_REFERRAL}`} rel="noreferrer" target="_blank">
            Unsplash
          </a>
        </figcaption>
      </figure>

      <article className="insightBody">
        <p className="insightIntro">{article.intro}</p>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
        <aside className="insightTakeaways">
          <h2>Key takeaways</h2>
          <ul>
            {article.takeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
          <a className="textLink" href={`/services/${article.serviceSlug}`}>
            explore {article.category}
          </a>
        </aside>
      </article>

      {related.length ? (
        <section className="insightRelated">
          <h2>Related insights</h2>
          <div className="insightsGrid">
            {related.map((item) => (
              <a className="insightCard" href={`/blog/${item.slug}`} key={item.slug}>
                <div className="insightCardMedia">
                  <img src={insightImage(item, 900)} alt={item.image.alt} loading="lazy" />
                </div>
                <div className="insightCardCopy">
                  <p className="insightMeta">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </p>
                  <h2>{item.title}</h2>
                  <p className="insightCardSummary">{item.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <CtaBand />
      <SiteFooter />
    </main>
  );
}
