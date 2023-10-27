import { TinyColor } from "@ctrl/tinycolor";

export type Color = TinyColor;

export type ColorScale12 = {
  1: Color;
  2: Color;
  3: Color;
  4: Color;
  5: Color;
  6: Color;
  7: Color;
  8: Color;
  9: Color;
  10: Color;
  11: Color;
  12: Color;
};

export interface PaletteType {
  primary: ColorScale12;
  primaryA: ColorScale12;
  secondary: ColorScale12;
  secondaryA: ColorScale12;
  accent: ColorScale12;
  accentA: ColorScale12;

  shadow: ColorScale12;
  // whiteA: ColorScale12;

  bg: {
    deep: Color;
    default: Color;
    muted: Color;
    hovered: Color;
    active: Color;
    drop: Color;
  };
  text: {
    deep: Color;
    default: Color;
    muted: Color;
    inverted: Color;
    badge: Color;
  };
  border: {
    active: Color;
    default: Color;
    muted: Color;
    inverted: Color;
    sash: Color;
  };

  status: {
    error: ColorScale12;
    errorA: ColorScale12;
    warning: ColorScale12;
    warningA: ColorScale12;
    info: ColorScale12;
    infoA: ColorScale12;
    hint: ColorScale12;
    hintA: ColorScale12;
    success: ColorScale12;
    successA: ColorScale12;
  };

  git: {
    added: ColorScale12;
    modified: ColorScale12;
    deleted: ColorScale12;
    renamed: ColorScale12;
    conflicting: ColorScale12;
    submodule: ColorScale12;
  };

  diff: {
    inserted: ColorScale12;
    insertedA: ColorScale12;
    removed: ColorScale12;
    removedA: ColorScale12;
  };

  gradiation: {
    1: Color;
    2: Color;
    3: Color;
    4: Color;
    5: Color;
    6: Color;
  };

  general: {
    tomato: Color;
    red: Color;
    ruby: Color;
    crimson: Color;
    pink: Color;
    plum: Color;
    purple: Color;
    violet: Color;
    iris: Color;
    indigo: Color;
    blue: Color;
    cyan: Color;
    teal: Color;
    jade: Color;
    green: Color;
    grass: Color;
    orange: Color;
    brown: Color;

    sky: Color;
    mint: Color;
    lime: Color;
    yellow: Color;
    amber: Color;

    gold: Color;
    bronze: Color;
  };

  semantic: {
    keyword: Color;
    controlKeyword: Color;
    function: Color;
    storage: Color;
    variable: Color;
    type: Color;
    interface: Color;
    namespace: Color;

    string: Color;
    escape: Color;
    regex: Color;
    number: Color;
    boolean: Color;
    nullish: Color;

    punctuation: Color; // separator like ,.:;
    operator: Color; // =&|^~+-*/<>
    controlOperator: Color;
    bracket: Color; // (){}[]

    comment: Color;
    async: Color;
    unsafe: Color;
    deprecated: Color;
    invalid: Color;

    html: {
      tag: Color;
      component: Color;
      metaTag: Color;
      attribute: Color;
      text: Color;
    };

    css: {
      attribute: Color;
      value: Color;
      tag: Color;
      class: Color;
      id: Color;
      property: Color;
      units: Color;
      pseudoClass: Color;

      sassFunction: Color;
      sassInterpolation: Color;
    };

    markdown: {
      heading: Color;
      link: Color;
      quote: Color;
      list: Color;
      code: Color;
    };
  };

  test: {
    testA: Color;
    testB: Color;
    testC: Color;
  };
}

export interface ThemeOptions {
  name: string;
  id: string;
  type: "light" | "dark";
  primary: string; // text
  secondary: string; // bg
  accent: string; // bg of badges/buttons
}
