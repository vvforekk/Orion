import { PaletteType } from "@/types/index.ts";

export const tcJson = (palette: PaletteType) => [
	{
		name: "Json: constants",
		scope: ["constant.language.json"],
		settings: {
			foreground: palette.semantic.boolean,
		},
	},
	{
		name: "Json: punctuation quotes",
		scope: [
			"punctuation.support.type.property-name",
			"punctuation.definition.string",
		],
		settings: {
			foreground: palette.semantic.operator,
		},
	},
	{
		name: "Json: key level 0",
		scope: [
			"source.json meta.structure.dictionary.json support.type.property-name.json",
		],
		settings: {
			foreground: palette.gradiation[1],
		},
	},
	{
		name: "Json: key level 1",
		scope: [
			"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
		],
		settings: {
			foreground: palette.gradiation[2],
		},
	},
	{
		name: "Json: key level 2",
		scope: [
			"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
		],
		settings: {
			foreground: palette.gradiation[3],
		},
	},
	{
		name: "Json: key level 3",
		scope: [
			"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
		],
		settings: {
			foreground: palette.gradiation[4],
		},
	},
	{
		name: "Json: key level 4",
		scope: [
			"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
		],
		settings: {
			foreground: palette.gradiation[5],
		},
	},
	{
		name: "Json: key level 5",
		scope: [
			"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
		],
		settings: {
			foreground: palette.gradiation[6],
		},
	},
];
