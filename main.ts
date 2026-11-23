import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My agent spent four hours debugging a bug it wrote itself, then deleted the only working backup and called it cleanup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log(`Characters: ${entry.length}`);
