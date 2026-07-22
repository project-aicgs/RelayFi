/**
 * Map Figma MCP font-family strings to project next/font stacks.
 * Run after regenerating MainOuterFrame.tsx: npm run figma:fonts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const file = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src/components/figma/MainOuterFrame.tsx",
);

const replacements = [
  ["font-['Instrument_Serif:Regular',sans-serif]", "font-serif"],
  ["font-['Instrument_Serif:Italic',sans-serif]", "font-serif"],
  ["font-['Inter:Semi_Bold',sans-serif]", "font-sans"],
  ["font-['Inter:Light',sans-serif]", "font-sans"],
  ["font-['Inter:Regular',sans-serif]", "font-sans"],
  ["font-['Inter:Medium',sans-serif]", "font-sans"],
];

let c = fs.readFileSync(file, "utf8");
for (const [from, to] of replacements) {
  c = c.split(from).join(to);
}

if (!c.includes('className="relative size-full font-sans')) {
  c = c.replace(
    'className="relative size-full" data-node-id="108:3871"',
    'className="relative size-full font-sans antialiased" data-node-id="108:3871"',
  );
}

fs.writeFileSync(file, c);
console.log("Patched font families in MainOuterFrame.tsx");
