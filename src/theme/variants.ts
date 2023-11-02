import { Configuration } from "@/config.ts";
import { pairedGrayScale } from "@/radix-colors/utils.ts";
import { ThemeOptions } from "@/types/index.ts";

export const themeVariants: (
  { accentColor, neutralGray }: Configuration,
) => ThemeOptions[] = (
  { accentColor, neutralGray },
) => [
  {
    name: "Orion",
    id: "orion",
    type: "dark",
    primary: neutralGray ? "gray" : pairedGrayScale(accentColor),
    secondary: neutralGray ? "gray" : pairedGrayScale(accentColor),
    accent: accentColor,
  },
];
