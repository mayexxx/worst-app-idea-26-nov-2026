import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "SolarPixel is a revolutionary green-tech app that uses patented AI to repurpose your phone's pixels as micro-solar panels, charging your battery as long as you keep the screen at maximum brightness while standing in direct sunlight.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry);
const writtenEntry = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (writtenEntry.length !== 232 || writtenEntry !== entry || /[\r\n]/.test(writtenEntry)) {
  throw new Error(`Invalid entry content: ${JSON.stringify(writtenEntry)}`);
}
