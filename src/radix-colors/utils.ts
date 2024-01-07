import { RadixColorId } from "@/radix-colors/type.ts";

export const pairedGrayScale = (color: RadixColorId): RadixColorId => {
	if (["gray", "mauve", "slate", "sage", "olive", "sand"].includes(color)) {
		return color;
	} else if (
		[
			"tomato",
			"red",
			"ruby",
			"crimson",
			"pink",
			"plum",
			"purple",
			"violet",
		].includes(color)
	) {
		return "mauve";
	} else if (["iris", "indigo", "blue", "sky", "cyan"].includes(color)) {
		return "slate";
	} else if (["mint", "teal", "jade", "green"].includes(color)) {
		return "sage";
	} else if (["grass", "lime"].includes(color)) {
		return "olive";
	} else if (["yellow", "orange", "amber", "brown"].includes(color)) {
		return "sand";
	} else {
		return "gray";
	}
};
