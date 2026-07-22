/**
 * Downloads Figma MCP asset URLs from MainOuterFrame.tsx into public/figma/.
 * Run: node scripts/download-figma-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "src/components/figma/MainOuterFrame.tsx");
const outDir = path.join(root, "public/figma");

const text = fs.readFileSync(source, "utf8");
const re = /const (img\w+) = "(https:\/\/www\.figma\.com\/api\/mcp\/asset\/[^"]+)"/g;
const entries = [...text.matchAll(re)];

if (!entries.length) {
  console.error("No asset URLs found in MainOuterFrame.tsx");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const map = {};
for (const [, name, url] of entries) {
  const id = url.split("/").pop();
  const ext = ".png";
  const filename = `${name}${ext}`;
  const dest = path.join(outDir, filename);
  process.stdout.write(`fetch ${name}... `);
  const res = await fetch(url);
  if (!res.ok) {
    console.log(`FAIL ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  map[name] = `/figma/${filename}`;
  console.log("ok");
}

fs.writeFileSync(
  path.join(root, "src/lib/figma-asset-map.json"),
  JSON.stringify(map, null, 2),
);
console.log(`Wrote ${entries.length} assets to public/figma/`);
