import { stcGlobal } from "@/theme/semantic-token-colors/global.ts";
import { stcRust } from "@/theme/semantic-token-colors/rust.ts";
import { PaletteType } from "@/types/index.ts";

export const semanticTokenColors = (palette: PaletteType) => ({
	...stcGlobal(palette),
	...stcRust(palette),
});
