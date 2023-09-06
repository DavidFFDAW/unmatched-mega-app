<script>
	import { PAGES } from '@pages/unlimited/unlimited.constants';
	import { gameState } from '../hooks/useGame';
	import DeckListPage from './deck-list-page.svelte';
	import HeroCard from '@components/cards/hero-card.svelte';
	import { writableDeck as deck, deckFunctions } from '../hooks/useDeck';
</script>

{#if $gameState.currentTab === PAGES.hand}
	<DeckListPage
		bind:list={$deck.hand}
		bind:groupView={$gameState.groupView}
		bind:currentTab={$gameState.currentTab}
		bind:selectCard={deckFunctions.customSelectCard}
	/>
{:else if $gameState.currentTab === PAGES.discard}
	<DeckListPage
		bind:list={$deck.discard}
		bind:currentTab={$gameState.currentTab}
		bind:groupView={$gameState.groupView}
		bind:selectCard={deckFunctions.customSelectCard}
	/>
{:else if $gameState.currentTab === PAGES.info}
	<div class="info">
		<HeroCard />
	</div>
{/if}
