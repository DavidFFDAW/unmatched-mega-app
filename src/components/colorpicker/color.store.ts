import { writable } from 'svelte/store';

export const initialColors: string[] = [];
export const usedColors = writable(initialColors);

export const addColor = (color: string) => {
	usedColors.update((colors) => {
		if (colors.length > 8) {
			colors.shift();
		}
		if (colors.includes(color)) {
			return colors;
		}

		return [...colors, color];
	});
};
