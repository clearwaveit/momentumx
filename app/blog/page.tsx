import { pageMetadata } from "../../lib/seo";
import { articles, insightImage, type InsightArticle } from "../insights";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../site-components";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Practical guides on AI, automation, data, digital platforms, connected spaces and managed services from MomentumX.",
  path: "/blog"
});

function InsightCard({ article, featured = false }: { article: InsightArticle; featured?: boolean }) {
  return (
    <a className={featured ? "insightCard isFeatured" : "insightCard"} href={`/blog/${article.slug}`}>
      <div className="insightCardMedia">
        <img src={insightImage(article, featured ? 1600 : 900)} alt={article.image.alt} loading="lazy" />
      </div>
      <div className="insightCardCopy">
        <p className="insightMeta">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </p>
        <h2>{article.title}</h2>
        <p className="insightCardSummary">{article.summary}</p>
      </div>
    </a>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="insights"
        title="practical thinking on AI, data & digital transformation"
        summary="Guides for leaders turning technology into business value, from AI readiness and automation to data, connected spaces and managed services."
      />
      <section className="insightsIndex">
        {featured ? <InsightCard article={featured} featured /> : null}
        <div className="insightsGrid">
          {rest.map((article) => (
            <InsightCard article={article} key={article.slug} />
          ))}
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
