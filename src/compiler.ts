import { defaultConfig } from "@/config.ts";
import { compileTheme } from "@/theme/index.ts";
import { themeVariants } from "@/theme/variants.ts";

export const compile = async (outdir = "dist/themes") => {
	const themes = themeVariants(defaultConfig);
	const themePath = (outdir: string, id: string) => {
		return `./${outdir}/${id}-color-theme.json`;
	};

	await Deno.mkdir(outdir, { recursive: true });

	for (const option of themes) {
		console.log(`Generating '${option.name}'`);

		const path = themePath(outdir, option.id);
		const themeJson = compileTheme(option);

		await Deno.writeTextFile(path, themeJson, { create: true });

		console.log(`'${option.name}' is generated at '${path}'`);
	}
};
