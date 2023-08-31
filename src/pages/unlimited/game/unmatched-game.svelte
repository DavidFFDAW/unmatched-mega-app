<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import SingleCard from './components/single-card.svelte';
	import useDeck from './hooks/useDeck';
	import HeroCard from './components/hero-card.svelte';
	import { FOOTER_TABS, PAGES } from '../unlimited.constants';
	import DeckListPage from './components/deck-list-page.svelte';
	import GameHeader from './components/game-header.svelte';
	import DiscardFooter from './components/footers/discard-footer.svelte';
	const { id } = $page.params;

	let currentTab = 'hand';
	let groupView: boolean = false;
	let footer: { tab: string; component: any, visible: boolean } = {
		tab: 'hand',
		component: DiscardFooter,
		visible: false
	};
	const { deck, cardSelected, functions } = useDeck($page.url.pathname);

	onMount(() => {
		if (functions.isDataQueryNeeded($deck, $page.url.pathname)) {
			functions.getCards(id, $page.url.pathname);
		}
	});

	const setView = () => {
		groupView = !groupView;
	};

	const changeFooter = (ev: CustomEvent) => {
		const tab = ev.detail.tab;
		footer.tab = tab;
		footer.visible = true;
		const component = FOOTER_TABS[tab] || FOOTER_TABS.default;
		footer.component = component;
	}
</script>

{#if $cardSelected}
	<SingleCard bind:card={$cardSelected} bind:deck={$deck} {functions} />
{:else if $deck}
	<GameHeader
		bind:decks={$deck}
		bind:deckData={$deck.deckData}
		bind:currentTab
		bind:drawCard={functions.drawCard}
		on:contextmenu={changeFooter}
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

	{#if footer.visible}
		<svelte:component this={footer.component} bind:visible={footer.visible} />
	{/if}
{/if}
