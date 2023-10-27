import { assertEquals } from "$std/assert/assert_equals.ts";
import { delay } from "$std/async/delay.ts";
import { compile } from "@/compiler.ts";

Deno.test("Verify the generated theme file", async () => {
  await compile("dist/test/themes");
  await delay(100); // ensure compile task is finished

  const themeJson = JSON.parse(
    await Deno.readTextFile(
      "dist/test/themes/orion-color-theme.json",
    ),
  );
  assertEquals(themeJson["name"], "Orion");
});
