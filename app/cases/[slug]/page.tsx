import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";
import { notFound } from "next/navigation";
import { logoAspectRatio } from "../../logo-ratio";
import { SiteFooter, SiteHeader } from "../../site-components";
import { casePageDetails, isVisibleCaseHref, visibleCases as cases } from "../../site-data";

// Hidden cases are not built, so their addresses return the 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) {
    return { title: "Work", robots: { index: false } };
  }
  return pageMetadata({
    title: `${item.name} case study`,
    description: item.summary,
    path: `/cases/${item.slug}`,
    type: "article",
    image: item.image.startsWith("/") ? { url: item.image, alt: item.name } : undefined
  });
}

// Local chrome shared by every case; cases with `media` bring their own four images.
const SHARED_ASSETS = {
  ctaPerson: "/assets/design/cta-person-momentumx.png",
  arrow: "/assets/design/arrow-tile.svg"
};

const STORY_THEMES = ["navy", "yellow", "black", "grey"] as const;

function toStoryHeading(title: string) {
  return title
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Related-work card media: the case's own image, else its client logo, else nothing.
function resolveCaseMedia(href: string, fallback?: string): { src: string; isLogo: boolean } | null {
  const slug = href.replace(/^\/cases\//, "");
  const entry = cases.find((item) => item.slug === slug);
  if (entry?.image) {
    return { src: entry.image, isLogo: false };
  }
  if (entry?.logoImage) {
    return { src: entry.logoImage, isLogo: true };
  }
  return fallback ? { src: fallback, isLogo: false } : null;
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug);

  if (!item) {
    notFound();
  }

  const detail = casePageDetails[item.slug];

  if (!detail) {
    notFound();
  }

  return <WorkCaseDetail item={item} detail={detail} />;
}

function WorkCaseDetail({
  item,
  detail
}: {
  item: (typeof cases)[number];
  detail: (typeof casePageDetails)[string];
}) {
  const media = detail.media;
  const assets = SHARED_ASSETS;
  // Some cases have no imagery yet; every image slot below collapses when empty.
  const visualImages = detail.visualStory.map((entry) => entry.image).filter(Boolean);
  const fallbackImages = [item.image, ...visualImages].filter(Boolean);

  const heroImages = media
    ? [media.hero]
    : fallbackImages.length
      ? [fallbackImages[0], fallbackImages[1] ?? fallbackImages[0]]
      : [];

  const pairedMoments =
    media && detail.moments
      ? detail.moments.slice(0, 2).map((moment, index) => ({
          title: moment.title,
          body: moment.body,
          image: index === 0 ? media.play : media.moment
        }))
      : detail.visualStory
          .filter((entry) => entry.image)
          .slice(0, 2)
          .map((entry) => ({
            title: toStoryHeading(entry.title),
            body: entry.body,
            image: entry.image
          }));

  const storyAssets = fallbackImages.length
    ? detail.story.map((_, index) => fallbackImages[(index + 2) % fallbackImages.length])
    : [];

  const flowImage = media ? media.flow : (visualImages[visualImages.length - 1] ?? item.image);

  // Cases with written architecture cards use them; others borrow the journey step copy.
  const architectureCards = (
    detail.ecosystem.cards ??
    detail.ecosystem.steps.map((step, index) => ({
      title: step,
      body: detail.leadJourney.steps[index]?.body ?? detail.ecosystem.body
    }))
  ).slice(0, 6);

  const relatedItems = detail.relatedWork.filter((work) => isVisibleCaseHref(work.href)).slice(0, 3);
  const relatedMedia = relatedItems.map((work, index) =>
    resolveCaseMedia(work.href, fallbackImages.length ? fallbackImages[index % fallbackImages.length] : undefined)
  );

  const journeyEyebrow = detail.journeyEyebrow ?? "The campaign journey";
  const ecosystemEyebrow = detail.ecosystemEyebrow ?? "The experience architecture";
  const metadataByLabel = new Map(detail.metadata.map((meta) => [meta.label.toLowerCase(), meta]));
  const metadataBlocks = [
    metadataByLabel.get("engagement"),
    metadataByLabel.get("client"),
    metadataByLabel.get("experience"),
    metadataByLabel.get("capabilities")
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <main className="whiskasCase">
      <SiteHeader variant="solid" />
      <section className="whiskasHero sectionPad">
        <div>
          <h1>{item.title}</h1>
          <p className="whiskasHeroMeta">{detail.eyebrow.replace(" · ", " - ")}</p>
          <p className="whiskasHeroSummary">{item.summary}</p>
        </div>
      </section>
{heroImages.length ? (
      <section className="whiskasHeroImage" aria-label={`${item.client} campaign artwork`}>
        {heroImages.filter(Boolean).map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </section>
      ) : null}

      <section className="whiskasMeta">
        <div className="whiskasMetaHead">
          <p>Project Metadata</p>
          <h2>
            {item.logoImage ? (
              <img
                className="whiskasMetaLogo"
                src={item.logoImage}
                alt={item.client}
                style={{ "--logo-r": logoAspectRatio(item.logoImage) ?? 1 } as CSSProperties}
              />
            ) : (
              item.client
            )}
          </h2>
        </div>
        <div className="whiskasMetaGrid">
          {metadataBlocks.map((meta) => (
            <article className={`is-${meta.label.toLowerCase()}`} key={meta.label}>
              <strong>{meta.label}</strong>
              <span>{meta.value}</span>
            </article>
          ))}
        </div>
      </section>

      {pairedMoments.length ? (
        <section className="whiskasMoments sectionPad">
          {pairedMoments.map((moment) => (
            <figure key={moment.title}>
              <img className={media ? "isLandscape" : undefined} src={moment.image} alt="" />
              <figcaption>
                <strong>{moment.title}</strong>
                <span>{moment.body}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      <section className="whiskasStory sectionPad" aria-label="Campaign story">
        {detail.story.map((story, index) => (
          <article className={`whiskasStoryCard is-${STORY_THEMES[index % STORY_THEMES.length]}`} key={story.title}>
            <div>
              <h2>{toStoryHeading(story.title)}</h2>
            </div>
            <p>{story.body}</p>
            {media || !storyAssets.length ? null : (
              <img className="whiskasStoryImage" src={storyAssets[index % storyAssets.length]} alt="" />
            )}
          </article>
        ))}
      </section>

      <section className="whiskasBuilt">
        <div className="sectionPad whiskasBuiltInner">
          <div className="whiskasSectionIntro">
            <h2>what we built</h2>
            <p>
              {detail.builtIntro ??
                "A premium digital ecosystem designed around discovery, conversion and regional scalability."}
            </p>
          </div>
          <div className="whiskasBuiltGrid">
            {detail.built.map((built) => (
              <article key={built.title}>
                <div className="whiskasBuiltCopy">
                  <h3>{built.title}</h3>
                  <p>{built.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="whiskasFlow sectionPad">
        <div className="whiskasFlowCopy">
          <p className="whiskasPill">
            <span />
            {toStoryHeading(journeyEyebrow)}
          </p>
          <h2>{detail.leadJourney.title}</h2>
          <p>{detail.leadJourney.body}</p>
        </div>
        <div className={flowImage ? "whiskasFlowBody" : "whiskasFlowBody isFull"}>
          <div className="whiskasFlowSteps">
            {detail.leadJourney.steps.map((step) => (
              <article key={step.title}>
                <h3>{toStoryHeading(step.title)}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          {flowImage ? <img className={media ? "isPortrait" : undefined} src={flowImage} alt="" /> : null}
        </div>
      </section>

      <section className="whiskasJourney">
        <video
          className="whiskasJourneyMedia"
          src="/assets/videos/work-details-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="sectionPad whiskasJourneyInner">
          <div className="whiskasJourneyCopy">
            <p className="whiskasPill">
              <span />
              {toStoryHeading(ecosystemEyebrow)}
            </p>
            <h2>{detail.ecosystem.title}</h2>
            <p>{detail.ecosystem.body}</p>
            <div>
              {detail.ecosystem.markets.map((market) => (
                <span key={market}>{market}</span>
              ))}
            </div>
            {detail.ecosystem.closing ? <p>{detail.ecosystem.closing}</p> : null}
          </div>
          <div className="whiskasJourneyCards">
            {architectureCards.map((card, index) => (
              <article key={card.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title.toLowerCase().replace(" / ", " ")}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figmaOtherServices sectionPad">
        <h2>Explore More Work</h2>
        <div>
          {relatedItems.map((work, index) => (
            <a href={work.href} key={work.href}>
              {relatedMedia[index] ? (
                <img
                  className={relatedMedia[index].isLogo ? "isLogo" : undefined}
                  src={relatedMedia[index].src}
                  alt=""
                />
              ) : null}
              <strong>{work.title}</strong>
              <span>
                <img src={assets.arrow} alt="" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="figmaCta sectionPad">
        <div>
          <div className="figmaLabel">
            <span />
            <p>{detail.cta.eyebrow}</p>
          </div>
          <h2>{detail.cta.title}</h2>
          <p>{detail.cta.body}</p>
          <a className="buttonLink" href={detail.cta.href}>
            {detail.cta.label}
          </a>
        </div>
        <img src={assets.ctaPerson} alt="" />
      </section>
      <SiteFooter />
    </main>
  );
}
