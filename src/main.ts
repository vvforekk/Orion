import { getConfig, isDefaultConfig } from "@/config.ts";
import { compileTheme } from "@/theme/index.ts";
import { themeVariants } from "@/theme/variants.ts";
import { ThemeOptions } from "@/types/index.ts";
import { ExtensionContext, importVsCodeApi, VSCodeAPI } from "vscode-deno";

const isFreshInstall = async (ctx: ExtensionContext, vscode: VSCodeAPI) => {
	const flagUri = vscode.Uri.file(ctx.asAbsolutePath("dist/.flag"));
	if (
		await vscode.workspace.fs.stat(flagUri).then(
			() => true,
			() => false,
		)
	) {
		return false;
	} else {
		return vscode.workspace.fs
			.writeFile(flagUri, Uint8Array.from([]))
			.then(() => true);
	}
};

const promptToReload = (vscode: VSCodeAPI) => {
	const message = "Orion: Reload required to apply updated theme.";
	const actionMessage = "Reload";

	vscode.window
		.showInformationMessage(message, actionMessage)
		.then((selectedAction) => {
			if (selectedAction === actionMessage) {
				vscode.commands.executeCommand("workbench.action.reloadWindow");
			}
		});
};

const updateThemes = (
	ctx: ExtensionContext,
	vscode: VSCodeAPI,
	options: ThemeOptions[],
) => {
	const base = ctx.extensionUri;
	const encoder = new TextEncoder();

	const results = options.map((variant) => {
		const themeJson = compileTheme(variant);

		console.log(themeJson);

		const path = vscode.Uri.joinPath(
			base,
			"dist/themes",
			`${variant.id}-color-theme.json`,
		);

		return vscode.workspace.fs.writeFile(path, encoder.encode(themeJson)).then(
			() => {},
			(e) => {
				vscode.window.showErrorMessage(e.message);
			},
		);
	});

	Promise.all(results).then(() => {
		promptToReload(vscode);
	});
};

export const activate = async (ctx: ExtensionContext) => {
	const vscode = importVsCodeApi();

	if (vscode === undefined) {
		throw new Error("couldn't activate orion theme extension runtime");
	}

	const config = getConfig(vscode);

	if ((await isFreshInstall(ctx, vscode)) && !isDefaultConfig(config)) {
		updateThemes(ctx, vscode, themeVariants(config));
	}

	ctx.subscriptions.push(
		vscode.workspace.onDidChangeConfiguration((event) => {
			if (event.affectsConfiguration("orion-vscode")) {
				const updatedConfig = getConfig(vscode);
				const options = themeVariants(updatedConfig);

				updateThemes(ctx, vscode, options);
			}
		}),
	);
};

export const deactivate = async () => {};
