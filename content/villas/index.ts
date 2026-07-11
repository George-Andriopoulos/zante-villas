import type { Villa } from "@/content/types";

import { thalassa } from "./thalassa";

// Adding a villa: 1) copy thalassa.ts → newvilla.ts, 2) edit content,
// 3) add one line here. That is the entire process.
export const villas: Record<string, Villa> = {
  [thalassa.slug]: thalassa,
};
