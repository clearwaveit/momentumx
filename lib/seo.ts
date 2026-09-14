import type { Metadata } from "next";
import { SITE_NAME } from "./site";

type PageMetadataInput = {
  title: string;
  description?: string;
  path: string;
  image?: { url: string; alt?: string };
  type?: "website" | "article";
  noindex?: boolean;
};

// Next replaces (rather than merges) a parent's openGraph/twitter objects when a
// page sets its own, so every page builds the full set here, including the
// default share card from app/opengraph-image.
export function pageMetadata({ title, description, path, image, type = "website", noindex }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const images = [image ?? { url: "/opengraph-image", alt: `${SITE_NAME} — digital & AI transformation` }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, siteName: SITE_NAME, locale: "en_AE", url: path, title: fullTitle, description, images },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: images.map((item) => item.url) },
    ...(noindex ? { robots: { index: false, follow: true } } : {})
  };
}
