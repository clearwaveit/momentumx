import fs from "fs";
import path from "path";

const pagePath = path.join("app", "services", "[slug]", "page.tsx");
const globalsPath = path.join("app", "globals.css");
const recoveryPage = fs.readFileSync(path.join(".recovery", "ai-consulting", "page.tsx"), "utf8");
const recoveryCss = fs.readFileSync(path.join(".recovery", "ai-consulting", "globals.css"), "utf8");
let mainPage = fs.readFileSync(pagePath, "utf8");
let globals = fs.readFileSync(globalsPath, "utf8");

// Normalize to LF for processing
const recoveryNorm = recoveryPage.replace(/\r\n/g, "\n");
mainPage = mainPage.replace(/\r\n/g, "\n");
globals = globals.replace(/\r\n/g, "\n");
const recoveryCssNorm = recoveryCss.replace(/\r\n/g, "\n");

const recoveryLines = recoveryNorm.split("\n");
const figmaAssetsStart = recoveryLines.findIndex((l) => l.startsWith("const figmaAssets"));
const helpersEnd = recoveryLines.findIndex(
  (l, i) => i > figmaAssetsStart && l.startsWith("export function generateStaticParams")
);
const helpers = recoveryLines.slice(figmaAssetsStart, helpersEnd).join("\n").trimEnd();

const match = recoveryNorm.match(
  /if \(service\.slug === "ai-consulting-and-transformation"\) \{\n      return \(([\s\S]*?)\n      \);\n    \}/
);
if (!match) {
  console.error("AI JSX match failed");
  process.exit(1);
}
const aiJsx = match[1];

let hybrid = mainPage.replace(
  'import { MediaBlock, SiteFooter, SiteHeader } from "../../site-components";',
  'import { CapabilityAccordion, CollaborationSlider, MediaBlock, SiteFooter, SiteHeader } from "../../site-components";'
);

hybrid = hybrid.replace(
  /const LAB_IMAGES = \[1, 2, 3\]\.map\(\(n\) => `\$\{DESIGN\}\/lab-\$\{n\}\.jpg`\);\n\nexport default/,
  `const LAB_IMAGES = [1, 2, 3].map((n) => \`\${DESIGN}/lab-\${n}.jpg\`);\n\n${helpers}\n\nexport default`
);

const needle =
  "    .filter((item): item is (typeof services)[number] => Boolean(item));\n\n  return (\n    <main className=\"servicePage\">";
if (!hybrid.includes(needle)) {
  console.error("Could not find insertion point in main page");
  process.exit(1);
}

const finalInsert = `    .filter((item): item is (typeof services)[number] => Boolean(item));

  if (detail && service.slug === "ai-consulting-and-transformation") {
    return (${aiJsx}
    );
  }

  return (
    <main className="servicePage">`;

hybrid = hybrid.replace(needle, finalInsert);
fs.writeFileSync(pagePath, hybrid);

const cssLines = recoveryCssNorm.split("\n");
const desktop = cssLines.slice(1696, 3320).join("\n");
const reduce = `@media (prefers-reduced-motion: reduce) {
  .figmaWorkWatermark,
  .figmaWorkPhone,
  .figmaWorkCard {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
    transition: none !important;
  }

  .figmaSubServices article {
    opacity: 1 !important;
    animation: none !important;
  }

  .figmaSubServices article:nth-child(4n + 2) {
    transform: translateY(calc(-100% - 5px)) !important;
  }
}`;
const mq1180 = cssLines.slice(5425, 5866).join("\n");
const mq768 = cssLines.slice(5867, 6318).join("\n");

if (!globals.includes(".figmaServiceDetail")) {
  globals =
    globals.replace(/\s*$/, "") +
    "\n\n/* AI consulting figma service detail (hamza) */\n" +
    desktop +
    "\n\n" +
    reduce +
    "\n\n" +
    mq1180 +
    "\n\n" +
    mq768 +
    "\n";
  fs.writeFileSync(globalsPath, globals);
} else {
  fs.writeFileSync(globalsPath, globals);
}

const pageOut = fs.readFileSync(pagePath, "utf8");
const globalsOut = fs.readFileSync(globalsPath, "utf8");
console.log(
  JSON.stringify(
    {
      pageBytes: fs.statSync(pagePath).size,
      globalsBytes: fs.statSync(globalsPath).size,
      hasFigmaCss: globalsOut.includes(".figmaServiceDetail"),
      hasAiReturn: pageOut.includes('service.slug === "ai-consulting-and-transformation"'),
      hasServicePage: pageOut.includes("servicePage"),
      hasCollabImport: pageOut.includes("CollaborationSlider"),
      conflictMarkers: pageOut.includes("<<<<<<<") || globalsOut.includes("<<<<<<<")
    },
    null,
    2
  )
);
