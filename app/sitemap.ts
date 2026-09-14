import type { MetadataRoute } from "next";
import { INDEXED_UTILITY_PATHS, SITE_URL } from "../lib/site";
import { articles } from "./insights";
import { services, visibleCases } from "./site-data";

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

// Article dates are shown as "Sep 2026"; use the first of that month.
function articleDate(label: string) {
  const [month, year] = label.split(" ");
  return new Date(Date.UTC(Number(year), MONTHS[month] ?? 0, 1));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${SITE_URL}${path}`;

  return [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({
      url: url(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    { url: url("/cases"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...visibleCases.map((item) => ({
      url: url(`/cases/${item.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    { url: url("/innovation-lab"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...articles.map((article) => ({
      url: url(`/blog/${article.slug}`),
      lastModified: articleDate(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.6
    })),
    ...INDEXED_UTILITY_PATHS.map((path) => ({
      url: url(`/${path}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: path === "about-us" || path === "contact-us" ? 0.7 : 0.4
    }))
  ];
}
