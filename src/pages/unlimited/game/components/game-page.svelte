<script>
	import DeckListPage from './deck-list-page.svelte';
	import { writableDeck, gameState } from '../hooks';
	import { PAGES } from '../../unlimited.constants';
	import HeroCard from '@components/hero-card/hero-card.svelte';

	const characterInfo = {
		// @ts-ignore
		hasSidekick: $writableDeck.deckData?.deck_data.sidekick?.quantity > 0,
		hero: {
			name: $writableDeck.deckData?.deck_data.hero.name,
			attack: $writableDeck.deckData?.deck_data.hero.isRanged ? 'ranged' : 'melee',
			ability: $writableDeck.deckData?.deck_data.hero.specialAbility,
			hp: $writableDeck.deckData?.deck_data.hero.hp,
			move: $writableDeck.deckData?.deck_data.hero.move,
			quote: $writableDeck.deckData?.deck_data.sidekick.quote
		},
		sidekick: {
			quantity: $writableDeck.deckData?.deck_data.sidekick.quantity,
			name: $writableDeck.deckData?.deck_data.sidekick.name,
			attack: $writableDeck.deckData?.deck_data.sidekick.isRanged ? 'ranged' : 'melee',
			hp: $writableDeck.deckData?.deck_data.sidekick.hp
		}
	};

	console.log({
		info: $writableDeck.deckData?.deck_data
	});
</script>

{#if $gameState.currentTab === PAGES.hand}
	<DeckListPage
		bind:list={$writableDeck.hand}
		bind:groupView={$gameState.groupView}
		bind:currentTab={$gameState.currentTab}
	/>
{:else if $gameState.currentTab === PAGES.discard}
	<DeckListPage
		bind:list={$writableDeck.discard}
		bind:currentTab={$gameState.currentTab}
		bind:groupView={$gameState.groupView}
	/>
{:else if $gameState.currentTab === PAGES.info}
	<div class="info">
		<HeroCard
			datas={characterInfo}
			highlight={$writableDeck.deckData?.deck_data.appearance.highlightColour}
		/>
	</div>
{/if}
