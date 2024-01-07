import { radixColors } from "@/radix-colors/index.ts";
import { RadixColorIdExtended } from "@/radix-colors/type.ts";
import { Color, PaletteType } from "@/types/index.ts";
import { color } from "@/utils/index.ts";

type AddSuffixArgs = {
	({
		scale,
	}: {
		scale: string;
		dark?: boolean;
		alpha?: boolean;
	}): RadixColorIdExtended;
	(scale: string): RadixColorIdExtended;
};

export const createPalette = (
	primary: string,
	secondary: string,
	accent: string,
	type: "dark" | "light",
): PaletteType => {
	const addSuffix: AddSuffixArgs = (args) => {
		const opt: {
			scale: string | undefined;
			dark: boolean;
			alpha: boolean;
		} = { scale: undefined, dark: type === "dark", alpha: false };

		if (typeof args === "string") {
			opt.scale = args;
		} else {
			opt.scale = args.scale;
			if (args.dark) opt.dark = args.dark;
			if (args.alpha) opt.alpha = args.alpha;
		}

		return `${opt.scale}${opt.dark ? "Dark" : ""}${
			opt.alpha ? "A" : ""
		}` as RadixColorIdExtended;
	};

	const primaryColor = radixColors[addSuffix(primary)];
	const primaryAColor = radixColors[addSuffix({ scale: primary, alpha: true })];
	const secondaryColor = radixColors[addSuffix(secondary)];
	const secondaryAColor =
		radixColors[addSuffix({ scale: secondary, alpha: true })];
	const accentColor = radixColors[addSuffix(accent)];
	const accentAColor = radixColors[addSuffix({ scale: accent, alpha: true })];

	// for normal color scales
	const syntaxColorFilter = (color: Color): Color =>
		color.mix(secondaryColor[12], 20);
	// for lighter color scales
	const lighterSyntaxColorFilter = (color: Color): Color =>
		color.mix(secondaryColor[12], 40);

	const syntaxColorsPalette = {
		tomato: syntaxColorFilter(radixColors[addSuffix("tomato")][11]),
		red: syntaxColorFilter(radixColors[addSuffix("red")][11]),
		ruby: syntaxColorFilter(radixColors[addSuffix("ruby")][11]),
		crimson: syntaxColorFilter(radixColors[addSuffix("crimson")][11]),
		pink: syntaxColorFilter(radixColors[addSuffix("pink")][11]),
		plum: syntaxColorFilter(radixColors[addSuffix("plum")][11]),
		purple: syntaxColorFilter(radixColors[addSuffix("purple")][11]),
		violet: syntaxColorFilter(radixColors[addSuffix("violet")][11]),
		iris: syntaxColorFilter(radixColors[addSuffix("iris")][11]),
		indigo: syntaxColorFilter(radixColors[addSuffix("indigo")][11]),
		blue: syntaxColorFilter(radixColors[addSuffix("blue")][11]),
		cyan: syntaxColorFilter(radixColors[addSuffix("cyan")][11]),
		teal: syntaxColorFilter(radixColors[addSuffix("teal")][11]),
		jade: syntaxColorFilter(radixColors[addSuffix("jade")][11]),
		green: syntaxColorFilter(radixColors[addSuffix("green")][11]),
		grass: syntaxColorFilter(radixColors[addSuffix("grass")][11]),
		orange: syntaxColorFilter(radixColors[addSuffix("orange")][11]),
		brown: syntaxColorFilter(radixColors[addSuffix("brown")][11]),

		sky: lighterSyntaxColorFilter(radixColors[addSuffix("sky")][11]),
		mint: lighterSyntaxColorFilter(radixColors[addSuffix("mint")][11]),
		lime: lighterSyntaxColorFilter(radixColors[addSuffix("lime")][11]),
		yellow: lighterSyntaxColorFilter(radixColors[addSuffix("yellow")][11]),
		amber: lighterSyntaxColorFilter(radixColors[addSuffix("amber")][11]),

		gold: syntaxColorFilter(radixColors[addSuffix("gold")][11]),
		bronze: syntaxColorFilter(radixColors[addSuffix("bronze")][11]),
	};

	return {
		primary: primaryColor,
		primaryA: primaryAColor,
		secondary: secondaryColor,
		secondaryA: secondaryAColor,
		accent: accentColor,
		accentA: accentAColor,

		shadow: radixColors.blackA,

		bg: {
			deep: secondaryColor[1],
			default: secondaryColor[2],
			muted: secondaryColor[3],
			hovered: secondaryColor[4],
			active: secondaryColor[5],
			drop: accentAColor[8],
		},

		text: {
			deep: primaryColor[12],
			default: primaryColor[11],
			muted: primaryColor[10],
			inverted: primaryColor[1],
			badge: color("#000"),
		},

		border: {
			active: secondaryColor[8],
			default: secondaryColor[7],
			muted: secondaryColor[6],
			inverted: secondaryAColor[1],
			sash: accentColor[8],
		},

		status: {
			error: radixColors[addSuffix("tomato")],
			errorA: radixColors[addSuffix({ scale: "tomato", alpha: true })],
			warning: radixColors[addSuffix("amber")],
			warningA: radixColors[addSuffix({ scale: "amber", alpha: true })],
			info: radixColors[addSuffix("blue")],
			infoA: radixColors[addSuffix({ scale: "blue", alpha: true })],
			hint: radixColors[addSuffix("indigo")],
			hintA: radixColors[addSuffix({ scale: "indigo", alpha: true })],
			success: radixColors[addSuffix("mint")],
			successA: radixColors[addSuffix({ scale: "mint", alpha: true })],
			match: radixColors[addSuffix("lime")],
			matchA: radixColors[addSuffix({ scale: "lime", alpha: true })],
		},

		git: {
			added: radixColors[addSuffix("jade")],
			modified: radixColors[addSuffix("yellow")],
			deleted: radixColors[addSuffix("ruby")],
			renamed: radixColors[addSuffix("purple")],
			conflicting: radixColors[addSuffix("pink")],
			submodule: radixColors[addSuffix("brown")],
		},

		diff: {
			inserted: radixColors[addSuffix("teal")],
			insertedA: radixColors[addSuffix({ scale: "teal", alpha: true })],
			removed: radixColors[addSuffix("tomato")],
			removedA: radixColors[addSuffix({ scale: "tomato", alpha: true })],
		},

		gradiation: {
			1: syntaxColorsPalette.plum,
			2: syntaxColorsPalette.iris,
			3: syntaxColorsPalette.green,
			4: syntaxColorsPalette.yellow,
			5: syntaxColorsPalette.orange,
			6: syntaxColorsPalette.ruby,
		},

		semantic: {
			keyword: syntaxColorsPalette.plum,
			controlKeyword: syntaxColorsPalette.ruby,
			function: syntaxColorsPalette.cyan,
			storage: syntaxColorsPalette.blue,
			variable: syntaxColorsPalette.yellow,
			type: syntaxColorsPalette.orange,
			interface: syntaxColorsPalette.pink,
			namespace: syntaxColorsPalette.violet,

			string: syntaxColorsPalette.grass,
			escape: syntaxColorsPalette.brown,
			regex: syntaxColorsPalette.amber,
			number: syntaxColorsPalette.teal,
			boolean: syntaxColorsPalette.teal,
			nullish: syntaxColorsPalette.crimson,

			punctuation: primaryColor[11],
			operator: syntaxColorsPalette.iris,
			controlOperator: syntaxColorsPalette.ruby,
			bracket: primaryColor[11],

			comment: primaryColor[10],
			async: syntaxColorsPalette.mint,
			unsafe: syntaxColorsPalette.tomato,
			deprecated: syntaxColorsPalette.tomato,
			invalid: syntaxColorsPalette.tomato,

			html: {
				text: syntaxColorsPalette.grass,
				tag: syntaxColorsPalette.blue,
				component: syntaxColorsPalette.cyan,
				metaTag: syntaxColorsPalette.blue,
				attribute: syntaxColorsPalette.purple,
			},

			css: {
				attribute: syntaxColorsPalette.green,
				value: syntaxColorsPalette.orange,
				tag: syntaxColorsPalette.red,
				class: syntaxColorsPalette.yellow,
				id: syntaxColorsPalette.blue,
				property: syntaxColorsPalette.cyan,
				units: syntaxColorsPalette.teal,
				pseudoClass: syntaxColorsPalette.purple,
				sassFunction: syntaxColorsPalette.blue,
				sassInterpolation: syntaxColorsPalette.red,
			},

			markdown: {
				heading: syntaxColorsPalette.orange,
				link: syntaxColorsPalette.sky,
				quote: syntaxColorsPalette.grass,
				list: syntaxColorsPalette.purple,
				code: syntaxColorsPalette.cyan,
			},
		},

		general: syntaxColorsPalette,

		test: {
			testA: color("#f00"),
			testB: color("#0f0"),
			testC: color("#00f"),
		},
	};
};
