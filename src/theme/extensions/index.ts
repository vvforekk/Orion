import { PaletteType } from "@/types/index.ts";
import { errorLensColors } from "@/theme/extensions/error-lens.ts";

export const extensionColors = (palette: PaletteType) => ({
	...errorLensColors(palette),
});
