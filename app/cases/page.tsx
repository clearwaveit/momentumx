import { pageMetadata } from "../../lib/seo";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../site-components";
import { logoAspectRatio } from "../logo-ratio";
import { services, visibleCases } from "../site-data";
import { WorksIndex } from "./works-index";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Selected MomentumX case studies across AI, conversational campaigns, enterprise platforms and digital experiences in the Middle East.",
  path: "/cases"
});

const works = visibleCases.map(({ slug, name, abstract, image, logoImage, expertise, industry }) => ({
  slug,
  name,
  abstract,
  image,
  logo: logoImage,
  logoRatio: logoAspectRatio(logoImage),
  expertise,
  industry
}));

// Filter options only list what at least one case uses: expertise in the
// services order, industries in order of first appearance.
const groups = {
  expertise: services.map((service) => service.title).filter((title) => visibleCases.some((item) => item.expertise.includes(title))),
  industry: [...new Set(visibleCases.flatMap((item) => item.industry))]
};

export default function CasesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="work"
        title="digital work & brand-led experiences"
        summary="Selected digital experiences, content systems, and brand-led customer journeys shaped for regional and global brands."
      />
      <WorksIndex label="work" works={works} groups={groups} />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
