import { mkdirSync, writeFileSync } from "node:fs";

// Winner D14 (25/25, 20 drafts): NapTracker Pro beats the 25/25 runners-up
// ChairCheck (D3) and FridgeLight (D11) because its function is self-defeating —
// the app ends the sleep it exists to track, so detecting sleep and waking the
// user are the same act. That loop is the sharpest absurd logic of the three:
// ChairCheck's failure is abstract and FridgeLight's is mere redundancy, while
// NapTracker Pro's success condition IS its failure condition.
const entry =
  "NapTracker Pro uses your phone's gyroscope to detect when you have fallen asleep, then wakes you up with an alarm to tell you that you fell asleep.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
