// One Line, One Laugh — make.fun bounty
// https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a
//
// Writes a single funny line to <output dir>/entry.txt.
// The gate requires UTF-8 text of 1 to 140 characters, not only white
// space, so the line is validated here before it is written.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The entry: one self-contained joke. A fitness triumph, revealed as
// anxious pacing while the Wi-Fi reconnected.
const LINE =
  "My smartwatch congratulated me on 10,000 steps — I was just pacing while the Wi-Fi reconnected.";

// Gate limits from the competition rules (RULES.txt, "The gate").
const MIN_CHARS = 1;
const MAX_CHARS = 140;

function fail(message: string): never {
  throw new Error(`entry rejected: ${message}`);
}

function validate(line: string): void {
  // Count code points, not UTF-16 units, so the gate's character limit
  // is measured the way a reader sees the line.
  const chars = [...line].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    fail(`line is ${chars} characters, must be ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (line.trim().length === 0) {
    fail("line is only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("line must be a single line");
  }
  // No control characters (this also rules out newlines above).
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    fail("line contains a control character");
  }
}

function outputDir(): string {
  const dir =
    process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
  // Never write into the working directory itself.
  if (resolve(dir) === resolve(".")) {
    fail(`output directory must not be "." (got ${JSON.stringify(dir)})`);
  }
  return dir;
}

function main(): void {
  validate(LINE);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, LINE, "utf8");
  // Read back and confirm the file holds exactly the validated line:
  // a truncated or re-encoded write must fail loudly, not silently ship.
  const written = readFileSync(target, "utf8");
  if (written !== LINE) {
    fail("entry.txt does not match the validated line after writing");
  }
}

main();
