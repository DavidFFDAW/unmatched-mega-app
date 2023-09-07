<script>
	import { PAGES } from '@pages/unlimited/unlimited.constants';
	import DeckListPage from './deck-list-page.svelte';
	import HeroCard from '@components/cards/hero-card.svelte';
	import { writableDeck, gameState, selectCard } from '../hooks';
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
		<HeroCard />
	</div>
{/if}
