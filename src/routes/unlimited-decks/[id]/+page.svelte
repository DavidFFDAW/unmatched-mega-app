<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import HttpService from '../../../services/http.service';
	import type { DeckCards } from '../models';
	import type { ApiResponse } from '../../../models/models';
	import UnmatchedRealCard from './unmatched-real-card.svelte';
	import SingleCard from './pages/single-card.svelte';
	import useDeck from './state/useDeck';
	import HeroCard from './pages/hero-card.svelte';
	const { id } = $page.params;

	let currentTab = 'hand';
	let groupView: boolean = false;
	let isFooterVisible: boolean = false;
	const { deck, cardSelected, functions } = useDeck();

	console.log({ $deck });

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

	const showFooter = (e: Event) => {
		e.preventDefault();
		isFooterVisible = !isFooterVisible;
	};

	const selectCard = (card: DeckCards, deckType: string) => {
		const cards = { ...card, deckPlace: deckType };
		functions.selectCard(cards);
	};

	const tabs: any = {
		hand: 'MANO',
		discard: 'DESCARTE',
		deck: 'ROBAR',
		deckinfo: 'INFORMACIÓN'
	};

	const setView = () => {
		groupView = !groupView;
	};
</script>

{#if $cardSelected}
	<SingleCard bind:card={$cardSelected} bind:deck={$deck} {functions} />
{:else if $deck}
	<header class="unlimited-head">
		<div class="health flex between acenter gap">
			<div class="health-bar">
				<div
					class="health-bar-fill"
					style="background-color: {$deck.deckData?.deck_data.appearance
						.highlightColour}; color: {$deck.deckData?.deck_data.appearance.borderColour}"
				>
					<span>
						{$deck.deckData?.deck_data.hero.hp}
					</span>
				</div>
			</div>
			<div class="health-text">
				<span>
					{$deck.deckData?.deck_data.hero.name}
				</span>
			</div>
		</div>
	</header>

	<div class="unlimited-decks-buttons flex center acenter gap">
		<button
			class="unlimited-decks-button hand"
			on:click={() => (currentTab = 'hand')}
			on:contextmenu={showFooter}
		>
			<p class="label-text">Mano</p>
			{$deck?.hand?.length}
		</button>
		<button class="unlimited-decks-button discard" on:click={() => (currentTab = 'discard')}>
			<p class="label-text">Descarte</p>
			{$deck?.discard?.length}
		</button>
		<button class="unlimited-decks-button deck" on:click={functions.drawCard}>
			<p class="label-text">Robar</p>
			{$deck?.deck?.length}
		</button>
		<button class="unlimited-decks-button info" on:click={() => (currentTab = 'deckinfo')}>
			<p class="label-text">Info</p>
			<span class="league">i</span>
		</button>
	</div>

	<div class="separator {currentTab}">{tabs[currentTab]}</div>

	<button type="button" on:click={setView}>Cambiar vista</button>

	{#if currentTab === 'hand'}
		<div class="flex center acenter mega-container" class:group={groupView}>
			<div class="cards-container slider">
				{#each $deck.hand as item}
					<div class="slide">
						<UnmatchedRealCard
							width={63}
							height={88}
							card={item}
							on:cardclick={() => selectCard(item, 'hand')}
						/>
					</div>
				{/each}
			</div>
		</div>
	{:else if currentTab === 'discard'}
		<div class="flex center acenter mega-container" class:group={groupView}>
			<div class="cards-container slider">
				{#each $deck.discard as item}
					<div class="slide">
						<UnmatchedRealCard
							width={63}
							height={88}
							card={item}
							on:cardclick={() => selectCard(item, 'discard')}
						/>
					</div>
				{/each}
			</div>
		</div>
	{:else if currentTab === 'deckinfo'}
		<div class="info">
			<HeroCard />
		</div>
	{/if}
{/if}

<footer class="animate__animated animate__fadeInUp" class:block={isFooterVisible}>
	aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</footer>

<style>
	header.unlimited-head {
		width: 100%;
		background-color: #282a36;
		padding: 20px;
		margin-bottom: 30px;
		color: #fff;
	}
	header.unlimited-head .health-bar-fill {
		position: relative;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #ddb364 !important;
		color: #030303 !important;
		padding: 20px;
	}
	header.unlimited-head .health-bar-fill span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
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
