import type { HeroCardInterface } from '@components/hero-card/hero.model';
import type { UnlimitedDecks } from '../hooks';

export const defaultData = {
	hasSidekick: false,
	hero: {
		name: '',
		attack: '',
		ability: '',
		hp: 0,
		move: 0,
		quote: ''
	},
	sidekick: {
		quantity: 0,
		name: '',
		attack: '',
		hp: 0
	}
};

export const getData = (writable: UnlimitedDecks): HeroCardInterface => {
	if (!writable.deckData) return defaultData;
	const data = writable.deckData.deck_data;

	return {
		hasSidekick: data.sidekick.quantity > 0,
		hero: {
			name: data.hero.name,
			attack: data.hero.isRanged ? 'Ranged' : 'Melee',
			ability: data.hero.specialAbility,
			hp: data.hero.hp,
			move: data.hero.move,
			quote: data.sidekick.quote
		},
		sidekick: {
			quantity: data.sidekick.quantity,
			name: data.sidekick.name,
			attack: data.sidekick.isRanged ? 'Ranged' : 'Melee',
			hp: data.sidekick.hp
		}
	};
};
