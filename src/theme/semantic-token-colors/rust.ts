import { PaletteType } from "@/types/index.ts";

export const stcRust = (palette: PaletteType) => ({
	"attribute:rust": palette.text.default,
	"enum:rust": palette.semantic.type,
	"function:rust": {
		foreground: palette.semantic.function,
		italic: false,
	},
	"function.unsafe:rust": palette.semantic.unsafe,
	"derive:rust": palette.semantic.interface,
	"macro:rust": palette.semantic.function,
	"method:rust": {
		foreground: palette.semantic.function,
		italic: false,
	},
	"method.unsafe:rust": palette.semantic.unsafe,
	"namespace:rust": palette.semantic.namespace,
	"namespace.crateRoot:rust": {
		foreground: palette.semantic.namespace,
		bold: false,
	},
	"struct:rust": palette.semantic.type,
	"trait:rust": palette.semantic.interface,
	"interface:rust": palette.semantic.interface,
	"typeAlias:rust": palette.semantic.type,
	"union:rust": palette.semantic.type,
	"boolean:rust": {
		foreground: palette.semantic.boolean,
		italic: false,
	},
	"number:rust": palette.semantic.number,
	"string:rust": palette.semantic.string,
	"character:rust": palette.semantic.string,
	"escapeSequence:rust": palette.semantic.escape,
	"formatSpecifier:rust": palette.semantic.escape,
	"operator:rust": palette.semantic.operator,
	"arithmetic:rust": palette.semantic.operator,
	"bitwise:rust": palette.semantic.operator,
	"comparison:rust": palette.semantic.operator,
	"logical:rust": palette.semantic.operator,
	"operator.controlFlow:rust": palette.semantic.controlOperator,
	"punctuation:rust": palette.semantic.punctuation,
	"attributeBracket:rust": palette.semantic.operator,
	"angle:rust": palette.semantic.bracket,
	"brace:rust": palette.semantic.bracket,
	"bracket:rust": palette.semantic.bracket,
	"parenthesis:rust": palette.semantic.bracket,
	"colon:rust": palette.semantic.punctuation,
	"comma:rust": palette.semantic.punctuation,
	"dot:rust": palette.semantic.punctuation,
	"semicolon:rust": palette.semantic.punctuation,
	"macroBang:rust": palette.semantic.function,
	"builtinAttribute:rust": palette.semantic.function,
	"builtinType:rust": palette.semantic.type,
	"comment:rust": palette.semantic.comment,
	"*.injected": {
		italic: false,
	},
	"constParameter:rust": {
		foreground: palette.semantic.type,
		bold: false,
	},
	"enumMember:rust": palette.semantic.type,
	"generic:rust": palette.semantic.type,
	"keyword:rust": {
		foreground: palette.semantic.keyword,
		italic: false,
	},
	"keyword.controlFlow:rust": {
		foreground: palette.semantic.controlKeyword,
		italic: false,
	},
	"keyword.async:rust": palette.semantic.async,
	"keyword.unsafe:rust": palette.semantic.unsafe,
	"label:rust": palette.semantic.controlKeyword,
	"lifetime:rust": palette.semantic.controlKeyword,
	"parameter:rust": palette.semantic.variable,
	"property:rust": palette.semantic.variable,
	"selfKeyword:rust": {
		foreground: palette.semantic.variable,
		bold: false,
		italic: false,
	},
	"selfTypeKeyword:rust": {
		foreground: palette.semantic.type,
		bold: false,
		italic: false,
	},
	"typeParameter:rust": {
		foreground: palette.semantic.type,
		bold: false,
	},
	"variable:rust": palette.semantic.variable,
	"variable.mutable:rust": {
		underline: false,
	},
	"variable.constant:rust": {
		bold: false,
	},
	"variable.static:rust": {
		bold: false,
	},
	"variable.static.mutable:rust": {
		foreground: palette.semantic.variable,
		underline: false,
		bold: false,
	},
	"variable.callable:rust": palette.semantic.function,

	"unresolvedReference:rust": palette.text.default,
});
