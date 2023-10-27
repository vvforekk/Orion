import { RadixColorId } from "@/radix-colors/type.ts";
import { pairedGrayScale } from "@/radix-colors/utils.ts";
import { ThemeOptions } from "@/types/index.ts";

export const themeVariants: (
  { accent }: {
    accent: RadixColorId;
  },
) => ThemeOptions[] = (
  { accent },
) => [
  {
    name: "Orion",
    id: "orion",
    type: "dark",
    primary: pairedGrayScale(accent),
    secondary: pairedGrayScale(accent),
    accent: accent,
  },
];
