import type { CardBack } from "@models/card.model";
import { downloadPngFromElement } from "@services/dom.screenshot.service";
import { get, writable } from "svelte/store";

const initialCardBack: CardBack = {
    deck: 'Sample',
    border: '#FFFFFF',
    image: '',
    letters: '#000000',
    background: '#eeeeee',
};
export const downloadID = "card-back-downloadable-image";
export const cardBackState = writable(initialCardBack);

export const downloadImage = () => {
    const stored = get(cardBackState);
    const downloadableImg: HTMLElement | null = document.getElementById(downloadID);
    return downloadPngFromElement(downloadableImg, `${stored.deck}-card-back`);
};