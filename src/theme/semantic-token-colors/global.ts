import { PaletteType } from "@/types/index.ts";

export const stcGlobal = (palette: PaletteType) => ({
  namespace: palette.semantic.namespace,
  class: palette.semantic.type,
  "class.defaultLibrary": palette.semantic.type,
  enum: palette.semantic.type,
  struct: palette.semantic.type,
  interface: palette.semantic.interface,
  typeParameter: palette.semantic.type,
  type: palette.semantic.type,
  "type.defaultLibrary": palette.semantic.type,
  parameter: palette.semantic.variable,
  variable: palette.semantic.variable,
  "variable.readonly": palette.semantic.variable,
  "variable.readonly.defaultLibrary": palette.semantic.variable,
  property: palette.semantic.variable,
  "property.readonly": palette.semantic.variable,
  enumMember: palette.semantic.type,
  decorator: palette.semantic.function,
  event: palette.semantic.type,
  function: palette.semantic.function,
  "function.defaultLibrary": palette.semantic.function,
  method: palette.semantic.function,
  macro: palette.semantic.function,
  label: palette.semantic.controlKeyword,
  comment: palette.semantic.comment,
  string: palette.semantic.string,
  keyword: palette.semantic.keyword,
  number: palette.semantic.number,
  regexp: palette.semantic.regex,
  operator: palette.semantic.operator,
});
