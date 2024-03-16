export interface DeckCards {
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
}

export interface DeckHero {
	hp: number;
	isRanged: boolean;
	move: number;
	name: string;
	specialAbility: string;
}

export interface DeckSidekick {
	hp: number;
	isRanged: boolean;
	name: string;
	quantity: number;
	quote: string;
}

export interface Appearance {
	borderColour: string;
	cardbackUrl: string;
	highlightColour: string;
	isPNP: boolean;
	patternName: string;
}

export interface RuleCard {
	title: string;
	content: string;
}

export interface DeckData {
	appearance: Appearance;
	cards: DeckCards[];
	hero: DeckHero;
	sidekick: DeckSidekick;
	name: string;
	ruleCards: RuleCard[];
}

export interface SearchUserDeck {
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
}
