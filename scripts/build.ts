import { fromFileUrl } from "$std/path/posix/mod.ts";
import { compile } from "@/compiler.ts";
import * as esbuild from "esbuild";
import { denoPlugins } from "esbuild-deno-loader";

await compile();

await esbuild.build({
  plugins: [
    ...denoPlugins({
      importMapURL: `file://${
        fromFileUrl(
          new URL(`${Deno.cwd()}/import_map.json`, import.meta.url),
        )
      }`,
    }),
  ] as esbuild.Plugin[],
  entryPoints: [
    fromFileUrl(new URL(`${Deno.cwd()}/src/main.ts`, import.meta.url)),
  ],
  outfile: "./dist/main.js",
  bundle: true,
  format: "cjs",
  platform: "node",
  minify: true,
});

esbuild.stop();
