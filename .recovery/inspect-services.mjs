import { readFileSync } from "fs";

const src = readFileSync("app/site-data.ts", "utf8");
const keys = [...src.matchAll(/"([a-z0-9-]+)": \{\s*\n\s*hero:/g)].map((m) => m[1]);
console.log("service details", keys);

for (const key of keys) {
  const start = src.indexOf(`"${key}":`);
  const next = keys.map((k) => src.indexOf(`"${k}":`)).filter((i) => i > start).sort((a, b) => a - b)[0];
  const block = src.slice(start, next ?? start + 4000);
  const processCount = (block.match(/process: \{[\s\S]*?items: \[([\s\S]*?)\]/)?.[1].match(/title:/g) || []).length;
  const stepCount = (block.match(/steps: \[([^\]]+)\]/)?.[1].match(/"/g) || []).length / 2;
  const valueCount = (block.match(/valueAreas: \{[\s\S]*?items: \[([\s\S]*?)\]/)?.[1].match(/title:/g) || []).length;
  const subCount = (block.match(/subServices: \{[\s\S]*?items: \[([\s\S]*?)\]/)?.[1].match(/title:/g) || []).length;
  const hasLab = /lab:\s*\{/.test(block);
  const hasModels = /serviceModels:\s*\{/.test(block);
  console.log({ key, processCount, stepCount, valueCount, subCount, hasLab, hasModels });
}
