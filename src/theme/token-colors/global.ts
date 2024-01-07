import { PaletteType } from "@/types/index.ts";

export const tcGlobal = (palette: PaletteType) => [
	{
		name: "Global: comments",
		scope: ["comment", "punctuation.definition.comment"],
		settings: {
			foreground: palette.semantic.comment,
			fontStyle: "italic",
		},
	},
	{
		name: "Global: variables",
		scope: ["variable.language", "variable.parameter", "variable.other"],
		settings: {
			foreground: palette.semantic.variable,
		},
	},
	{
		name: "Global: functions",
		scope: ["entity.name.function", "support.function"],
		settings: {
			foreground: palette.semantic.function,
		},
	},
	{
		name: "Global: numerics",
		scope: ["constant.numeric", "constant.language.numeric"],
		settings: {
			foreground: palette.semantic.number,
		},
	},
	{
		name: "Global: booleans",
		scope: ["constant.boolean", "constant.language.boolean"],
		settings: {
			foreground: palette.semantic.boolean,
		},
	},
	{
		name: "Global: types",
		scope: ["entity.name.type", "support.type.primitive"],
		settings: {
			foreground: palette.semantic.type,
		},
	},
	{
		name: "Global: keywords",
		scope: ["keyword"],
		settings: {
			foreground: palette.semantic.keyword,
		},
	},
	{
		name: "Global: control keywords",
		scope: ["keyword.control.flow", "keyword.control.conditional"],
		settings: {
			foreground: palette.semantic.controlKeyword,
		},
	},
	{
		name: "Global: storage",
		scope: ["storage"],
		settings: {
			foreground: palette.semantic.storage,
		},
	},
	{
		name: "Global: namespaces",
		scope: "entity.name.namespace",
		settings: {
			foreground: palette.semantic.namespace,
		},
	},
	{
		name: "Global: punctuations",
		scope: ["punctuation"],
		settings: {
			foreground: palette.semantic.punctuation,
		},
	},
	{
		name: "Global: operator",
		scope: ["keyword.operator"],
		settings: {
			foreground: palette.semantic.operator,
		},
	},
	{
		name: "Global: strings",
		scope: ["string"],
		settings: {
			foreground: palette.semantic.string,
		},
	},
];
