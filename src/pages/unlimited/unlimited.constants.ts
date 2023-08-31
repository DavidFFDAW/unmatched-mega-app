import DeckFooter from "./game/components/footers/deck-footer.svelte";
import DiscardFooter from "./game/components/footers/discard-footer.svelte";
import HandFooter from "./game/components/footers/hand-footer.svelte";

export const PAGES: any = {
	hand: 'hand',
	discard: 'discard',
	deck: 'deck',
	info: 'deckinfo'
};

export const TABS: any = {
	hand: 'MANO',
	discard: 'DESCARTE',
	deck: 'ROBAR',
	info: 'INFORMACIÓN'
};

export const FOOTER_TABS = {
	[PAGES.hand]: HandFooter,
	[PAGES.discard]: DiscardFooter,
	[PAGES.deck]: DeckFooter,
	'default': HandFooter,
}
