import { PaletteType } from "@/types/index.ts";

export const tcJsx = (palette: PaletteType) => [
	{
		name: "Jsx: component name",
		scope: ["meta.tag support.class.component"],
		settings: {
			foreground: palette.semantic.html.component,
		},
	},
];
