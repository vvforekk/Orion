import { TinyColor } from "@ctrl/tinycolor";
import { Color } from "@/types/index.ts";

export const color = (from: string | Color): Color =>
  typeof from === "string" ? new TinyColor(from) : from;
