// Fortune Cookie Funnies for Engineers — make.fun entry.
// Writes one fortune-cookie line for a software engineer to
// <output-dir>/entry.txt (the gate: UTF-8, 1-120 chars, one line).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will fix the bug Friday at 4:59 p.m. It will ship Monday. It will return Tuesday, promoted.";

const MAX_CHARS = 120;

function main(): void {
  // Gate guard: the sealed scorer wants 1-120 chars, one line, no
  // trailing newline (a newline would count toward the 120).
  if (FORTUNE.length < 1 || FORTUNE.length > MAX_CHARS) {
    throw new Error(`fortune is ${FORTUNE.length} chars, gate allows 1-${MAX_CHARS}`);
  }
  if (FORTUNE.includes("\n")) {
    throw new Error("fortune must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
  console.log(`wrote entry.txt (${FORTUNE.length} chars)`);
}

main();
