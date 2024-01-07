import { PaletteType } from "@/types/index.ts";

export const tcMarkdown = (palette: PaletteType) => [
	{
		name: "Markdwon: heading punct",
		scope: [
			"punctuation.definition.heading.markdown",
			"markup.heading.markdown",
		],
		settings: {
			foreground: palette.semantic.markdown.heading,
		},
	},
	{
		name: "Markdwon: code",
		scope: [
			"markup.inline.raw.string.markdown",
			"markup.fenced_code.block.markdown",
		],
		settings: {
			foreground: palette.semantic.markdown.code,
		},
	},
	{
		name: "Markdown: code punct and language specifier",
		scope: [
			"markup.fenced_code.block.markdown punctuation.definition.markdown",
			"fenced_code.block.language.markdown",
		],
		settings: {
			foreground: palette.semantic.markdown.code,
		},
	},
	{
		name: "Markdwon: link title",
		scope: [
			"string.other.link.title.markdown",
			"markup.underline.link.markdown",
		],
		settings: {
			foreground: palette.semantic.markdown.link,
		},
	},
	{
		name: "Markdwon: quate punct",
		scope: [
			"punctuation.definition.quote.begin.markdown",
			// "markup.quote.markdown",
		],
		settings: {
			foreground: palette.semantic.markdown.quote,
		},
	},
	{
		name: "Markdwon: list punct",
		scope: [
			"punctuation.definition.list.begin.markdown",
			// "markup.list.unnumbered.markdown",
			// "markup.list.numbered.markdown",
		],
		settings: {
			foreground: palette.semantic.markdown.list,
		},
	},
];
