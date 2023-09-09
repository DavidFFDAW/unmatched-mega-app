<script lang="ts">
	import DeckListPage from './deck-list-page.svelte';
	import { writableDeck, gameState } from '../hooks';
	import { PAGES } from '../../unlimited.constants';
	import HeroCard from '@components/hero-card/hero-card.svelte';
	import { getData } from './game-page.service';

	const characterInfo = getData($writableDeck);
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
