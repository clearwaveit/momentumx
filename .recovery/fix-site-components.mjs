import fs from "fs";
import path from "path";

const target = path.join("app", "site-components.tsx");
const recovery = fs
  .readFileSync(path.join(".recovery", "ai-consulting", "site-components.tsx"), "utf8")
  .replace(/\r\n/g, "\n");
let current = fs.readFileSync(target, "utf8").replace(/\r\n/g, "\n");

function extractFunction(src, name) {
  const start = src.indexOf(`export function ${name}(`);
  if (start < 0) return null;
  const after = src.slice(start);
  const next = after.slice(1).search(/\nexport function /);
  const block = next < 0 ? after : after.slice(0, next + 1);
  return block.trimEnd();
}

const collab = extractFunction(recovery, "CollaborationSlider");
const capability = extractFunction(recovery, "CapabilityAccordion");

if (!collab || !capability) {
  console.error("Missing recovery components", { collab: !!collab, capability: !!capability });
  process.exit(1);
}

if (!current.includes("CollaborationSlider")) {
  current = current.trimEnd() + "\n\n" + collab + "\n\n" + capability + "\n";
  fs.writeFileSync(target, current);
}

const out = fs.readFileSync(target, "utf8");
console.log(
  JSON.stringify({
    exports: [...out.matchAll(/export function (\w+)/g)].map((m) => m[1]),
    bytes: out.length
  })
);
