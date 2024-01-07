import { equal } from "$std/assert/equal.ts";
import { RadixColorId } from "@/radix-colors/type.ts";
import { VSCodeAPI } from "vscode-deno";

export type Configuration = {
	accentColor: RadixColorId;
	neutralGray: boolean;
};

export const defaultConfig: Configuration = {
	accentColor: "indigo",
	neutralGray: false,
};

export const isDefaultConfig = (config: Configuration) => {
	return equal(config, defaultConfig);
};

export const getConfig = (vscode: VSCodeAPI): Configuration => {
	const config = vscode.workspace.getConfiguration("orion-vscode");

	return {
		accentColor:
			config.get<RadixColorId>("accentColor") ?? defaultConfig.accentColor,
		neutralGray:
			config.get<boolean>("neutralGray") ?? defaultConfig.neutralGray,
	};
};
