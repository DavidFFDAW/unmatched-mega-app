import { writable } from 'svelte/store';
import type { DeckCards, SearchUserDeck } from '../../models';

type UnlimitedDecks = {
	hand: DeckCards[];
	discard: DeckCards[];
	deck: DeckCards[];
	deckData: SearchUserDeck | null;
};

export default function useDeck() {
	const initialState: UnlimitedDecks = {
		hand: [],
		discard: [],
		deck: [],
		deckData: null
	};
	const intialSelectedCard: DeckCards | null = null;

	const writableDeck = writable(initialState);
	const cardSelected = writable(intialSelectedCard);

	const resetDeck = () => {
		writableDeck.set(initialState);
	};

	const setDeck = (deck: UnlimitedDecks) => {
		writableDeck.set(deck);
	};

	const shuffleDeck = (totalDeck: DeckCards[], deckData: any) => {
		const shuffled = totalDeck.sort(() => 0.5 - Math.random());

		writableDeck.update((deck) => {
			deck.hand = shuffled.slice(0, 5);
			deck.deck = shuffled.slice(5, shuffled.length);
			deck.deckData = deckData;

			return deck;
		});
	};

	const selectCard = (card: DeckCards) => {
		cardSelected.set(card as any);
	};

	const deselectCard = () => {
		cardSelected.set(null);
	};

	return {
		deck: writableDeck,
		cardSelected,
		functions: {
			resetDeck,
			setDeck,
			shuffleDeck,
			selectCard,
			deselectCard
		}
	};
}
