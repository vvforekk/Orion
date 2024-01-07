import { tcCss } from "@/theme/token-colors/css.ts";
import { tcJson } from "@/theme/token-colors/json.ts";
import { tcJsx } from "@/theme/token-colors/jsx.ts";
import { tcMarkdown } from "@/theme/token-colors/markdown.ts";
import { tcToml } from "@/theme/token-colors/toml.ts";
import { tcYaml } from "@/theme/token-colors/yaml.ts";
import { PaletteType } from "@/types/index.ts";
import { tcGlobal } from "@/theme/token-colors/global.ts";
import { tcHtml } from "@/theme/token-colors/html.ts";
import { tcJavaScript } from "@/theme/token-colors/javascript.ts";

export const tokenColors = (palette: PaletteType) => [
	...tcGlobal(palette),

	...tcHtml(palette),
	...tcCss(palette),
	...tcMarkdown(palette),

	...tcJson(palette),
	...tcToml(palette),
	...tcYaml(palette),

	...tcJavaScript(palette),
	...tcJsx(palette),
];
