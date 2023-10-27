import { createPalette } from "@/theme/palette.ts";
import { semanticTokenColors } from "@/theme/semantic-token-colors/index.ts";
import { tokenColors } from "@/theme/token-colors/index.ts";
import { uiColors } from "@/theme/ui-colors/index.ts";
import { ThemeOptions } from "@/types/index.ts";
import { color } from "@/utils/index.ts";
import { TinyColor } from "@ctrl/tinycolor";

export const compileTheme = (
  { name, type, primary, secondary, accent }: ThemeOptions,
) => {
  const palette = createPalette(primary, secondary, accent, type);
  const theme = {
    "$schema": "vscode://schemas/color-theme",
    "name": `${name}`,
    "type": type,
    "colors": uiColors(palette),
    "tokenColors": tokenColors(palette),
    "semanticHighlighting": true,
    "semanticTokenColors": semanticTokenColors(palette),
  };

  return JSON.stringify(theme, (_key, val) => {
    if (typeof val === "string" && color(val).isValid) {
      return color(val).toHex8String();
    } else if (val instanceof TinyColor) {
      return val.toHex8String();
    } else {
      return val;
    }
  }, 0);
};
