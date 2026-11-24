import { mkdirSync, writeFileSync } from "node:fs";

const entry = "fix: broke prod at 3am - I approved my own PR, tests passed in my head, confidence 99%; the database is in heaven now";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error("entry must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
