import { PaletteType } from "@/types/index.ts";

export const tcCss = (palette: PaletteType) => [
	{
		name: "Css: attributes",
		scope: ["entity.other.attribute-name.css"],
		settings: {
			foreground: palette.semantic.css.attribute,
		},
	},
	{
		name: "Css: properties",
		scope: [
			"support.type.property-name.css",
			"support.type.vendored.property-name.css",
		],
		settings: {
			foreground: palette.semantic.css.property,
		},
	},
	{
		name: "Css: values",
		scope: [
			"support.constant.property-value.css",
			"support.constant.vendored.property-value.css",
			"support.constant.font-name.css",
			"meta.property-value.scss",
		],
		settings: {
			foreground: palette.semantic.css.value,
		},
	},
	{
		name: "Css: operators",
		scope: ["keyword.operator.css"],
		settings: {
			foreground: palette.semantic.operator,
		},
	},
	{
		name: "Css: units",
		scope: ["keyword.other.unit.css"],
		settings: {
			foreground: palette.semantic.operator,
		},
	},
	{
		name: "Css: @",
		scope: [
			"punctuation.definition.keyword.css",
			"punctuation.definition.keyword.scss",
			"keyword.control.at-rule",
		],
		settings: {
			foreground: palette.semantic.css.sassFunction,
		},
	},
	{
		name: "Css: tags",
		scope: ["entity.name.tag.css"],
		settings: {
			foreground: palette.semantic.css.tag,
		},
	},
	{
		name: "Css: classes",
		scope: ["entity.other.attribute-name.class.css"],
		settings: {
			foreground: palette.semantic.css.class,
		},
	},
];
