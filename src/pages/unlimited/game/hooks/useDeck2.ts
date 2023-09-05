import { writable } from 'svelte/store';
import { getFromStorage, persistStorage } from '@services/persistent.storage.service';
import type { DeckCards, SearchUserDeck } from '@models/deck.model';
import HttpService from '@services/http.service';
import type { ApiResponse } from '@models/api.model';

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

const storedGame = getFromStorage('game', null) as UnlimitedDecks | null;
const initialState: UnlimitedDecks =
	storedGame ? storedGame : initialDeckValue;
const intialSelectedCard: DeckCards | null = null;

export const writableDeck = writable(initialState);
export const cardSelected = writable(intialSelectedCard);

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

const selectCard = (card: DeckCards) => {
	cardSelected.set(card as any);
};

const customSelectCard = (card: DeckCards, deckType: string) => {
	const cards = { ...card, deckPlace: deckType };
	selectCard(cards);
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

const cardsAreEqual = (card1: DeckCards, card2: DeckCards) => {
	return (
		card1.title === card2.title &&
		card1.type === card2.type &&
		card1.boost === card2.boost &&
		card1.value === card2.value &&
		card1.quantity === card2.quantity &&
		card1.characterName === card2.characterName &&
		card1.imageUrl === card2.imageUrl
	);
};

const discardCard = (card: any) => {
	writableDeck.update((deck) => {
		deck.discard = [...deck.discard, card];
		const index = deck.hand.findIndex((c) => cardsAreEqual(c, card));
		const sliced = deck.hand.slice(index + 1, deck.hand.length);

		deck.hand = deck.hand.slice(0, index).concat(sliced);
		return deck;
	});
};

const returnCardToHand = (card: any) => {
	writableDeck.update((deck) => {
		deck.hand = [...deck.hand, card];
		const index = deck.discard.findIndex((c) => cardsAreEqual(c, card));
		const sliced = deck.discard.slice(index + 1, deck.discard.length);

		deck.discard = deck.discard.slice(0, index).concat(sliced);
		return deck;
	});
};

const putCardInTopHand = (card: any) => {
	writableDeck.update((deck) => {
		deck.deck = [card, ...deck.deck];
		const index = deck.discard.findIndex((c) => cardsAreEqual(c, card));
		const sliced = deck.discard.slice(index + 1, deck.discard.length);

		deck.discard = deck.discard.slice(0, index).concat(sliced);
		return deck;
	});
};

const isDataQueryNeeded = (deck: UnlimitedDecks, url: string) => {
	return (!deck?.deckData && deck?.hand?.length <= 0 && deck?.discard?.length <= 0) ||
		deck.url !== url;
}

const getCards = (id: string, url: string,) => {
	HttpService.get(`/api/deck/${id}`).then((resp: ApiResponse) => {
		const { cards } = resp.content.deck_data;

		const totalDeck = cards.reduce((acc: DeckCards[], curr: DeckCards) => {
			const current = { ...curr, deckName: resp.content.name };
			return [...acc, ...Array.from({ length: curr.quantity }).fill(current)];
		}, []);

		shuffleDeck(totalDeck, resp.content, url);
	});
};

const selectRandomHandCard = (deck: UnlimitedDecks) => {
	const randomIndex = Math.floor(Math.random() * deck.hand.length);
	const card = deck.hand[randomIndex];
	customSelectCard(card, 'hand');
	return card;
};

const discardHand = () => {
	return writableDeck.update((deck) => {
		deck.discard = [...deck.discard, ...deck.hand];
		deck.hand = [];
		return deck;
	});
};

const retrieveRandomDiscardCard = () => {
	writableDeck.update((deck) => {
		const randomIndex = Math.floor(Math.random() * deck.discard.length);
		const card = deck.discard[randomIndex];
		deck.discard = deck.discard.filter((c) => !cardsAreEqual(c, card));
		deck.hand = [...deck.hand, card];
		return deck;
	});
}


writableDeck.subscribe((deck) => {
	persistStorage('game', deck);
});

export const functions = {
	isDataQueryNeeded,
	getCards,
	resetDeck,
	setDeck,
	shuffleDeck,
	selectCard,
	deselectCard,
	drawCard,
	discardCard,
	returnCardToHand,
	putCardInTopHand,
	customSelectCard,
	selectRandomHandCard,
	discardHand,
	retrieveRandomDiscardCard
};


export default {
	deck: writableDeck,
	cardSelected,
	functions
};
