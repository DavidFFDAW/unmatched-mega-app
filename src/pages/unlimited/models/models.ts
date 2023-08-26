export type DeckCards = {
	afterText: string | null | undefined;
	basicText: string | null | undefined;
	boost: number;
	characterName: string;
	duringText: string | null | undefined;
	imageUrl: string;
	immediateText: string;
	quantity: number;
	title: string;
	type: string;
	value: number;
	deckName: string;
};

export type DeckHero = {
	hp: number;
	isRanged: boolean;
	move: number;
	name: string;
	specialAbility: string;
};

export type DeckSidekick = {
	hp: number;
	isRanged: boolean;
	name: string;
	quantity: number;
	quote: string;
};

export type DeckData = {
	appearance: {
		borderColour: string;
		cardbackUrl: string;
		highlightColour: string;
		isPNP: boolean;
		patternName: string;
	};
	cards: DeckCards[];
	hero: DeckHero;
	sidekick: DeckSidekick;
	name: string;
	ruleCards: {
		title: string;
		content: string;
	}[];
};

export type SearchUserDeck = {
	bgg_link: string;
	created_on: string;
	deck_data: DeckData;
	deck_first_published_on: string;
	deck_published: string;
	family_id: string;
	id: string;
	liked: boolean;
	likes: number;
	name: string;
	note: string;
	published: boolean;
	published_on: string;
	tags: any[];
	updated_on: string;
	user: string;
	version_id: string;
	version_name: string;
};
