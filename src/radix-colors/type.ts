import { ColorScale12 } from "@/types/index.ts";
import {
	radixColorIds,
	radixColorIdsExtended,
} from "@/radix-colors/constants.ts";

export type RadixColorId = typeof radixColorIds[number];

export type RadixColorIdExtended = typeof radixColorIdsExtended[number];

export type RadixColorsType = Record<RadixColorIdExtended, ColorScale12>;
