// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one funny line to /output/entry.txt (1-200 chars, no trailing newline).
//
// The joke: the vacuum testifies like a witness in court. The oath is a stock
// phrase everyone knows, twisted at the last word — "truth" becomes "lint".
// Courtroom deadpan fits the excuse (a defense), and no other entry in the
// field uses the oath angle: the field is full of first-person apologies
// ("I was hired to eat the floor", "the sock attacked first", "it identified
// as lint"). A familiar phrase with one word swapped lands harder than a new
// excuse, and at 69 chars every word works.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, as one named constant so the gate below checks the same
// text the program writes.
const OUTPUT =
  "I swear to tell the truth, the whole truth, and nothing but the lint.";

// Gate: the sealed scorer only accepts UTF-8 text of 1-200 characters that is
// not only whitespace, one line. Fail loudly instead of shipping an invalid entry.
if (OUTPUT.length < 1 || OUTPUT.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${OUTPUT.length}`);
}
if (!OUTPUT.trim() || OUTPUT.includes("\n") || OUTPUT !== OUTPUT.trim()) {
  throw new Error("entry must be a single non-blank line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");
