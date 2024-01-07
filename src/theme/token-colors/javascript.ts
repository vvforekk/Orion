import { PaletteType } from "@/types/index.ts";

export const tcJavaScript = (palette: PaletteType) => [
  {
    name: "JavaScript: functional keywords",
    scope: [
      "keyword.operator.new",
      "keyword.operator.expression.instanceof",
      "keyword.operator.expression.keyof",
    ],
    settings: {
      foreground: palette.semantic.function,
    },
  },
  {
    name: "JavaScript: control operators",
    scope: ["keyword.operator.optional", "keyword.operator.ternary"],
    settings: {
      foreground: palette.semantic.controlOperator,
    },
  },
  {
    name: "JavaScript: Object keys",
    scope: ["meta.object-literal.key", "variable.object.property"],
    settings: {
      foreground: palette.semantic.variable,
    },
  },
  {
    name: "JavaScript: async",
    scope: ["storage.modifier.async"],
    settings: {
      foreground: palette.semantic.async,
    },
  },
  {
    name: "JavaScript: glob imports star",
    scope: ["constant.language.import-export-all"],
    settings: {
      foreground: palette.semantic.variable,
    },
  },
  {
    name: "JavaScript: nullish constant",
    scope: [
      "constant.language.undefined",
      "constant.language.null",
      "constant.language.unknown",
    ],
    settings: {
      foreground: palette.semantic.nullish,
    },
  },
  {
    name: "JavaScript: importmeta",
    scope: ["support.variable.property.importmeta"],
    settings: {
      foreground: palette.semantic.keyword,
    },
  },
];
