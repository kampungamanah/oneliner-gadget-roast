import * as fs from "node:fs";

// One line aimed at the gadget that never leaves the wrist.
// A watch that celebrates standing up sets the fitness bar at "vertical".
// The file must end exactly at the last character of the line: no newline is appended.
// The smartwatch has already awarded itself a badge for this entry.
const entry = "My smartwatch just congratulated me for standing up. My fitness goal is now officially 'vertical'.";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
