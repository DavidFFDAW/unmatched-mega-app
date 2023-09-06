import type { DeckCards } from "@models/deck.model";
import { writable } from "svelte/store";


const intialselectedCard: DeckCards | null = null;
export const selectedCard = writable(intialselectedCard);


export const selectCard = (card: DeckCards) => {
    selectedCard.set(card as any);
};

export const customSelectCard = (card: DeckCards, deckType: string) => {
    const cards = { ...card, deckPlace: deckType };
    selectCard(cards);
};

export const deselectCard = () => {
    selectedCard.set(null);
};