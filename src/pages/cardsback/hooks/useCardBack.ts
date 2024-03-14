import type { CardBack } from '@models/card.model';
import {
	downloadPngFromElement,
	downloadScaledVersionOfElement
} from '@services/dom.screenshot.service';
import { get, writable } from 'svelte/store';

const initialCardBack: CardBack = {
	deck: 'Sample',
	border: '#FFFFFF',
	image: '',
	letters: '#000000',
	background: '#eeeeee',
	backgroundPosition: 'center'
};
export const downloadID = 'card-back-downloadable-image';
export const cardBackState = writable(initialCardBack);

export const downloadImage = () => {
	const stored = get(cardBackState);

	return downloadScaledVersionOfElement(
		document.getElementById(downloadID),
		`${stored.deck}-card-back`,
		3
	);
};
