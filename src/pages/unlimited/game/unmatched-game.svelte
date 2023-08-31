<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import SingleCard from './components/single-card.svelte';
	import useDeck from './hooks/useDeck';
	import HeroCard from './components/hero-card.svelte';
	import { PAGES } from '../unlimited.constants';
	import DeckListPage from './components/deck-list-page.svelte';
	import GameHeader from './components/game-header.svelte';
	import DiscardFooter from './components/discard-footer.svelte';
	const { id } = $page.params;

	let currentTab = 'hand';
	let groupView: boolean = false;
	const { deck, cardSelected, functions } = useDeck($page.url.pathname);

	onMount(() => {
		if (functions.isDataQueryNeeded($deck, $page.url.pathname)) {
			functions.getCards(id, $page.url.pathname);
		}
	});

	const setView = () => {
		groupView = !groupView;
	};
</script>

{#if $cardSelected}
	<SingleCard bind:card={$cardSelected} bind:deck={$deck} {functions} />
{:else if $deck}
	<GameHeader
		bind:decks={$deck}
		bind:deckData={$deck.deckData}
		bind:currentTab
		bind:drawCard={functions.drawCard}
	/>
	<button type="button" on:click={setView}>Cambiar vista</button>

	{#if currentTab === PAGES.hand}
		<DeckListPage
			bind:list={$deck.hand}
			bind:groupView
			bind:currentTab
			bind:selectCard={functions.customSelectCard}
		/>
	{:else if currentTab === PAGES.discard}
		<DeckListPage
			bind:list={$deck.discard}
			bind:currentTab
			bind:groupView
			bind:selectCard={functions.customSelectCard}
			footer={DiscardFooter}
		/>
	{:else if currentTab === PAGES.info}
		<div class="info">
			<HeroCard />
		</div>
	{/if}
{/if}
