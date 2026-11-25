// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge's ice maker filed a bug report on me: 'User opens the door 47 times a day. Recommend therapy.'";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} chars, must be 1-200`);
}
if (/\r|\n/.test(line) || !line.trim()) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
