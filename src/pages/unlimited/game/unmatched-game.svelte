<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import SingleCard from './components/single-card.svelte';
	import GameHeader from './components/game-header.svelte';
	import GamePage from './components/game-page.svelte';
	import {
		selectedCard,
		deckFunctions,
		writableDeck,
		gameState,
		changeFooter,
		setView
	} from './hooks';
	import { deleteStoredGame } from '../useUnlimitedSearch';

	onMount(() => {
		if (deckFunctions.isDataQueryNeeded($writableDeck, $page.url.pathname)) {
			deckFunctions.getCards();
		}
	});

	onDestroy(() => {
		selectedCard.set(null);
		deleteStoredGame(new Event('click'));
	});
</script>

{#if $selectedCard}
	<SingleCard bind:card={$selectedCard} bind:deck={$writableDeck} functions={deckFunctions} />
{:else if $writableDeck}
	<GameHeader
		bind:decks={$writableDeck}
		bind:deckData={$writableDeck.deckData}
		bind:currentTab={$gameState.currentTab}
		on:contextmenu={changeFooter}
	/>
	<!-- <button type="button" on:click={setView}>Cambiar vista</button> -->

	<GamePage />

	{#if $gameState.footer.visible}
		<svelte:component this={$gameState.footer.component} bind:visible={$gameState.footer.visible} />
	{/if}
{/if}
