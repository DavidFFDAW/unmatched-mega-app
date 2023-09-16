import { writable } from 'svelte/store';

type Dials = {
	life: number;
	dialSize: number;
	letterSize: number;
	letterColor: string;
	dialLetterDistance: number;
	typography: string;
	dialCenterColor: string;
	dialCenterWidth: number;
	dialFront?: string;
	dialBack?: string;
};

const initialDialState: Dials = {
	life: 15,
	dialSize: 220,
	letterSize: 16,
	letterColor: '#FFFFFF',
	dialLetterDistance: 20,
	typography: 'bebas',
	dialCenterColor: '#ffffff',
	dialCenterWidth: 1
};

export const ImageKeys = {
	front: 'dialFront',
	back: 'dialBack'
};

export const dials = writable(initialDialState);
export const setImage = (key: string, url: string) => {
	dials.update((dials: any) => {
		const newDials = { ...dials };
		newDials[key] = url;
		return newDials;
	});
};
