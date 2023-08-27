<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import HttpService from '../../../services/http.service';
	import type { DeckCards } from '../models/models';
	import type { ApiResponse } from '../../../models/models';
	import SingleCard from './components/single-card.svelte';
	import useDeck from './hooks/useDeck';
	import HeroCard from './components/hero-card.svelte';
	import { PAGES } from '../unlimited.constants';
	import DeckListPage from './components/deck-list-page.svelte';
	import GameHeader from './components/game-header.svelte';
	const { id } = $page.params;

	let currentTab = 'hand';
	let groupView: boolean = false;
	let isFooterVisible: boolean = false;
	const { deck, cardSelected, functions } = useDeck($page.url.pathname);

	onMount(() => {
		if (
			(!$deck?.deckData && $deck?.hand?.length <= 0 && $deck?.discard?.length <= 0) ||
			$deck.url !== $page.url.pathname
		) {
			HttpService.get(`/api/deck/${id}`).then((resp: ApiResponse) => {
				const { cards } = resp.content.deck_data;

				const totalDeck = cards.reduce((acc: DeckCards[], curr: DeckCards) => {
					const current = { ...curr, deckName: resp.content.name };
					return [...acc, ...Array.from({ length: curr.quantity }).fill(current)];
				}, []);
				functions.shuffleDeck(totalDeck, resp.content, $page.url.pathname);
			});
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
		/>
	{:else if currentTab === PAGES.info}
		<div class="info">
			<HeroCard />
		</div>
	{/if}
{/if}

<footer class="animate__animated animate__fadeInUp" class:block={isFooterVisible}>
	aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</footer>

<style>
	footer {
		display: none;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100px;
		background: #030303;
		color: #fff;
		z-index: 100;
	}
	footer.block {
		display: block;
	}
</style>
