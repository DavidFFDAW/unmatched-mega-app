import { writable } from 'svelte/store';
import type { DeckCards, SearchUserDeck } from '../../models';
import { getFromStorage, persistStorage } from '../../../../services/persistent.storage.service';
import { browser } from '$app/environment';

type UnlimitedDecks = {
	hand: DeckCards[];
	discard: DeckCards[];
	deck: DeckCards[];
	deckData: SearchUserDeck | null;
	url: string;
};

export const initialDeckValue = {
	hand: [],
	discard: [],
	deck: [],
	deckData: null,
	url: ''
};

export default function useDeck() {
	const storedGame = getFromStorage('game', null) as UnlimitedDecks | null;
	const initialState: UnlimitedDecks = storedGame ? storedGame : initialDeckValue;
	const intialSelectedCard: DeckCards | null = null;

	const writableDeck = writable(initialState);
	const cardSelected = writable(intialSelectedCard);

	const resetDeck = () => {
		writableDeck.set(initialState);
	};

	const setDeck = (deck: UnlimitedDecks) => {
		writableDeck.set(deck);
	};

	const shuffleDeck = (totalDeck: DeckCards[], deckData: any, pageURL: string) => {
		const shuffled = totalDeck.sort(() => 0.5 - Math.random());

		writableDeck.update((deck) => {
			deck.hand = shuffled.slice(0, 5);
			deck.deck = shuffled.slice(5, shuffled.length);
			deck.deckData = deckData;
			deck.url = pageURL;

			return deck;
		});
	};

	writableDeck.subscribe((deck) => {
		persistStorage('game', deck);
	});

	const selectCard = (card: DeckCards) => {
		cardSelected.set(card as any);
	};

	const deselectCard = () => {
		cardSelected.set(null);
	};

	const drawCard = () => {
		writableDeck.update((deck) => {
			if (deck.deck.length <= 0) return deck;

			const card = deck.deck[0];
			deck.deck = deck.deck.slice(1, deck.deck.length);
			deck.hand = [...deck.hand, card];
			return deck;
		});
	};

	const discardCard = (card: DeckCards) => { 
		writableDeck.update((deck) => {
			deck.discard = [...deck.discard, card];
			const index = deck.hand.findIndex((c) => c === card);
			const sliced = deck.hand.slice(index + 1, deck.hand.length);

			deck.hand = deck.hand.slice(0, index).concat(sliced);
			return deck;
		});
	}

	return {
		deck: writableDeck,
		cardSelected,
		functions: {
			resetDeck,
			setDeck,
			shuffleDeck,
			selectCard,
			deselectCard,
			drawCard,
			discardCard
		}
	};
}
