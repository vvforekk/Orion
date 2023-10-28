import { equal } from "$std/assert/equal.ts";
import { RadixColorId } from "@/radix-colors/type.ts";
import { VSCodeAPI } from "vscode-deno";

type Configuration = {
  accent: RadixColorId;
};

const packageJsonText = Deno.readTextFileSync("package.json");
const packageJsonObject = JSON.parse(packageJsonText);
export const configSchemaJson =
  packageJsonObject["contributes"]["configuration"]["properties"];

export const defaultConfig: Configuration = {
  accent: configSchemaJson["orion-vscode.accentColor"]
    .default as RadixColorId,
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
