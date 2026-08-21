import { notFound } from "next/navigation";
import { CtaBand, MediaBlock, PageHero, SiteFooter, SiteHeader } from "../../site-components";
import { caseDetailBlocks, caseDetailMedia, casePageDetails, cases } from "../../site-data";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

const SHARED_ASSETS = {
  heroA: "https://www.figma.com/api/mcp/asset/5fa911c2-8345-4683-a913-001317b7104d.png",
  heroB: "https://www.figma.com/api/mcp/asset/a6a973a3-a29a-4db8-bdbc-b18af7b9da66.png",
  play: "https://www.figma.com/api/mcp/asset/e3c8efdf-1a43-401c-8b19-22e0e9dfcc39.png",
  moment: "https://www.figma.com/api/mcp/asset/c900ca72-73c0-4f3d-81a0-9ff5f98794f9.png",
  idea: "https://www.figma.com/api/mcp/asset/d531b4cf-01a8-4024-ba39-38c5438fb270.png",
  interaction: "https://www.figma.com/api/mcp/asset/fa1ed9a3-a2fb-4d60-834b-b3a6e8b3055f.png",
  content: "https://www.figma.com/api/mcp/asset/08d0212d-2726-4880-8019-5c00286ffaa4.png",
  campaign: "https://www.figma.com/api/mcp/asset/83bbf2c4-78e4-4625-8955-28e3ebd3b133.png",
  flow: "https://www.figma.com/api/mcp/asset/70f09773-99f5-4efb-befe-715c25fc0e60.png",
  ctaPerson: "/assets/design/cta-new-1.png",
  builtIcon: "https://www.figma.com/api/mcp/asset/163f278c-4fc3-4575-86e7-1ccfd0f3bd28.svg",
  storyDark: "https://www.figma.com/api/mcp/asset/f4336805-e569-40db-a754-c659a9e719c6.svg",
  storyLight: "https://www.figma.com/api/mcp/asset/c4d28009-5b10-4ec0-b5dc-4c23b2e24b7e.svg",
  arrow: "https://www.figma.com/api/mcp/asset/0b9fa235-cbef-4895-9122-6370e0243841.svg"
};

const WHISKAS_ASSETS = {
  ...SHARED_ASSETS,
  ctaPerson: "https://www.figma.com/api/mcp/asset/ff5efe00-2b01-4f7d-9362-6674dae49768.png"
};

const STORY_THEMES = ["navy", "yellow", "black", "grey"] as const;

function toStoryHeading(title: string) {
  return title
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function resolveCaseImage(href: string, fallback: string) {
  const slug = href.replace(/^\/cases\//, "");
  return cases.find((entry) => entry.slug === slug)?.image ?? fallback;
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug);

  if (!item) {
    notFound();
  }

  const detail = casePageDetails[item.slug];

  if (detail) {
    return <WorkCaseDetail item={item} detail={detail} />;
  }

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow={item.client} title={item.title} summary={item.summary} />
      <section className="caseDetail sectionPad">
        <MediaBlock image={item.image} />
        <div className="detailCopy">
          <div className="caseLogoLarge textLogo">{item.client}</div>
          <h2>project scope</h2>
          <p>
            A digital engagement shaped around audience behavior, brand consistency, platform
            clarity, and measurable customer impact across the right touchpoints.
          </p>
          <ul>
            {item.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="storyStack sectionPad">
        {caseDetailBlocks.map((block, index) => (
          <article key={block.title}>
            <span className="sectionNumber">{String(index + 1).padStart(2, "0")}.</span>
            <h2>{block.title}</h2>
            <p>{block.body}</p>
          </article>
        ))}
      </section>
      <section className="caseGallery sectionPad">
        {caseDetailMedia.map((media) => (
          <figure key={media.title}>
            <img src={media.image} alt={media.title} />
            <figcaption>{media.title}</figcaption>
          </figure>
        ))}
      </section>
      <section className="testimonialBlock sectionPad">
        <h2>client testimonial</h2>
        <blockquote>
          MomentumX brings strategy, cultural awareness, and production focus into digital work
          that feels relevant in-market.
        </blockquote>
        <blockquote>
          Responsibility, punctuality, and attentiveness helped the project move with confidence
          from idea to rollout.
        </blockquote>
      </section>
      <section className="relatedRail sectionPad">
        <h2>next work</h2>
        <div className="miniCardGrid">
          {cases
            .filter((caseItem) => caseItem.slug !== item.slug)
            .slice(0, 4)
            .map((caseItem) => (
              <a className="miniMediaCard" key={caseItem.slug} href={`/cases/${caseItem.slug}`}>
                <img src={caseItem.image} alt="" />
                <span>{caseItem.client}</span>
                <strong>{caseItem.title}</strong>
              </a>
            ))}
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </main>
  );
}

function WorkCaseDetail({
  item,
  detail
}: {
  item: (typeof cases)[number];
  detail: (typeof casePageDetails)[string];
}) {
  const isWhiskas = item.slug === "whiskas-interactive-cat-game";
  const assets = isWhiskas ? WHISKAS_ASSETS : SHARED_ASSETS;
  const visualImages = detail.visualStory.map((entry) => entry.image);
  const fallbackImages = [item.image, ...visualImages, assets.idea, assets.interaction, assets.content, assets.campaign];

  const heroImages = isWhiskas
    ? [assets.heroA, assets.heroB]
    : [fallbackImages[0], fallbackImages[1] ?? fallbackImages[0]];

  const pairedMoments = isWhiskas
    ? [
        {
          title: "The Play",
          body: "Moving elements trigger curiosity, chasing, tapping and physical interaction with the screen.",
          image: assets.play
        },
        {
          title: "The Moment",
          body: "The owner captures the interaction as video, turning gameplay into a shareable campaign moment.",
          image: assets.moment
        }
      ]
    : detail.visualStory.slice(0, 2).map((entry) => ({
        title: toStoryHeading(entry.title),
        body: entry.body,
        image: entry.image
      }));

  const storyAssets = isWhiskas
    ? [assets.idea, assets.interaction, assets.content, assets.campaign]
    : detail.story.map((_, index) => fallbackImages[(index + 2) % fallbackImages.length]);

  const flowImage = isWhiskas ? assets.flow : (visualImages[visualImages.length - 1] ?? assets.flow);

  const relatedItems = detail.relatedWork.slice(0, 3);
  const relatedImages = relatedItems.map((work, index) =>
    resolveCaseImage(work.href, fallbackImages[index % fallbackImages.length])
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
      <section className="whiskasHeroImage" aria-label={`${item.client} campaign artwork`}>
        <img src={heroImages[0]} alt="" />
        <img src={heroImages[1]} alt="" />
      </section>

      <section className="whiskasMeta">
        <div className="whiskasMetaHead">
          <p>Project Metadata</p>
          <h2>{item.client}</h2>
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
              <img src={moment.image} alt="" />
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
              <img src={index % 2 === 0 ? assets.storyDark : assets.storyLight} alt="" />
              <h2>{toStoryHeading(story.title)}</h2>
            </div>
            <p>{story.body}</p>
            <img className="whiskasStoryImage" src={storyAssets[index % storyAssets.length]} alt="" />
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
                <span>
                  <img src={assets.builtIcon} alt="" />
                </span>
                <h3>{built.title}</h3>
                <p>{built.body}</p>
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
        <div className="whiskasFlowBody">
          <div className="whiskasFlowSteps">
            {detail.leadJourney.steps.map((step) => (
              <article key={step.title}>
                <h3>{toStoryHeading(step.title)}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <img src={flowImage} alt="" />
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
          </div>
          <div className="whiskasJourneyCards">
            {detail.ecosystem.steps.slice(0, 6).map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.toLowerCase().replace(" / ", " ")}</h3>
                <p>{detail.leadJourney.steps[index]?.body ?? detail.ecosystem.body}</p>
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
              <img src={relatedImages[index]} alt="" />
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
