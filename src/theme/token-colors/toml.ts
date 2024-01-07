import { PaletteType } from "@/types/index.ts";

export const tcToml = (palette: PaletteType) => [
	{
		name: "Toml: properties",
		scope: ["support.type.property-name"],
		settings: {
			foreground: palette.semantic.variable,
		},
	},
	{
		name: "Toml: properties",
		scope: ["support.type.property-name.table"],
		settings: {
			foreground: palette.semantic.type,
		},
	},
];
