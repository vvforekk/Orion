import { PaletteType } from "@/types/index.ts";

export const tcHtml = (palette: PaletteType) => [
	{
		name: "Html: tag name",
		scope: ["meta.tag entity.name.tag"],
		settings: {
			foreground: palette.semantic.html.tag,
		},
	},
	{
		name: "Html: tag attributes",
		scope: ["meta.tag entity.other.attribute-name"],
		settings: {
			foreground: palette.semantic.html.attribute,
		},
	},
	{
		name: "Html: tag angles",
		scope: ["meta.tag punctuation.definition.tag"],
		settings: {
			foreground: palette.semantic.html.metaTag,
		},
	},
	{
		name: "Html: tag angles",
		scope: ["meta.tag meta.jsx.children.tsx"],
		settings: {
			foreground: palette.semantic.html.text,
		},
	},
];
