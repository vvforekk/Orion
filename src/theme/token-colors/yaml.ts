import { PaletteType } from "@/types/index.ts";

// TODO: token colors for yaml
export const tcYaml = (palette: PaletteType) => [
	{
		name: "Value",
		scope: ["string.unquoted.plain.out.yaml"],
		settings: {
			foreground: palette.semantic.string,
		},
	},
	{
		name: "Tag",
		scope: ["entity.name.tag.yaml"],
		settings: {
			foreground: palette.semantic.variable,
		},
	},
	{
		name: "Sequence",
		scope: [
			"punctuation.definition.block.sequence.item.yaml",
			"punctuation.definition.sequence.begin.yaml",
			"punctuation.definition.sequence.end.yaml",
		],
		settings: {
			foreground: palette.semantic.function,
		},
	},
	{
		name: "Boolean",
		scope: ["constant.language.boolean.yaml"],
		settings: {
			foreground: palette.semantic.boolean,
		},
	},
];
