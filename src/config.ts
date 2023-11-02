import { equal } from "$std/assert/equal.ts";
import { RadixColorId } from "@/radix-colors/type.ts";
import { VSCodeAPI } from "vscode-deno";

type Configuration = {
  accent: RadixColorId;
};

export const defaultConfig: Configuration = {
  accent: "indigo"
};

export const isDefaultConfig = (config: Configuration) => {
  return equal(config, defaultConfig);
};

export const getConfig = (vscode: VSCodeAPI): Configuration => {
  const config = vscode.workspace.getConfiguration("orion-vscode");

  return {
    accent: config.get<RadixColorId>("accentColor") ??
      defaultConfig.accent,
  };
};
