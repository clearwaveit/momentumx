import { readFileSync } from "node:fs";
import path from "node:path";

// Width / height of a logo file in /public, read at build time. Logos are then
// sized by sqrt(ratio) so wide wordmarks and square marks carry a similar
// visual weight instead of all filling the same box.
export function logoAspectRatio(src?: string) {
  if (!src) {
    return undefined;
  }

  try {
    const file = readFileSync(path.join(process.cwd(), "public", src));

    if (src.endsWith(".svg")) {
      const match = file
        .toString("utf8")
        .match(/viewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)/);
      return match ? Number(match[1]) / Number(match[2]) : undefined;
    }

    if (src.endsWith(".png")) {
      return file.readUInt32BE(16) / file.readUInt32BE(20);
    }
  } catch {
    return undefined;
  }

  return undefined;
}
