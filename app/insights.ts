import { articles as articleData } from "./insights-data";

export type InsightArticle = {
  slug: string;
  title: string;
  category: string;
  serviceSlug: string;
  date: string;
  readTime: string;
  summary: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  takeaways: string[];
  image: { src: string; alt: string; credit: { name: string; url: string } };
};

export const articles: InsightArticle[] = articleData;

// Unsplash serves any size from the raw photo URL; crop to the slot we need.
export function insightImage(article: InsightArticle, width: number) {
  return `${article.image.src}?auto=format&fit=crop&w=${width}&q=80`;
}

// Same-service articles first, then the rest in publishing order.
export function relatedInsights(article: InsightArticle, count = 3) {
  const others = articles.filter((item) => item.slug !== article.slug);
  return [
    ...others.filter((item) => item.serviceSlug === article.serviceSlug),
    ...others.filter((item) => item.serviceSlug !== article.serviceSlug)
  ].slice(0, count);
}

// For a service page: that service's articles first, then the others.
export function insightsForService(serviceSlug: string, count = 3) {
  return [
    ...articles.filter((article) => article.serviceSlug === serviceSlug),
    ...articles.filter((article) => article.serviceSlug !== serviceSlug)
  ].slice(0, count);
}
