import * as colors from "@radix-ui/colors";
import range from "just-range";
import { ColorScale12 } from "@/types/index.ts";
import { color } from "@/utils/index.ts";
import { RadixColorsType } from "@/radix-colors/type.ts";

export const radixColors = Object.fromEntries(
  Object.entries(colors as Record<string, Record<string, string>>).map(
    ([scaleId, scaleColors]) => {
      return [
        scaleId,
        Object.fromEntries(
          range(1, 13).map((x) => {
            const step = x.toString();

            return [
              step,
              color(
                scaleColors[
                  Object.keys(scaleColors).find((key) =>
                    key.includes(step)
                  ) as string
                ],
              ),
            ];
          }),
        ) as ColorScale12,
      ];
    },
  ),
) as RadixColorsType;
