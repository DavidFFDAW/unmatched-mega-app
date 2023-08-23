<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import HttpService from '../../../services/http.service';
	import type { DeckCards } from '../models';
	import type { ApiResponse } from '../../../models/models';
	import UnmatchedRealCard from './unmatched-real-card.svelte';
	import SingleCard from './pages/single-card.svelte';
	import useDeck from './state/useDeck';
	const { id } = $page.params;

	let currentTab = 'hand';
	const { deck, cardSelected, functions } = useDeck();

	onMount(() => {
		
		if (!$deck?.deckData && $deck?.hand?.length <= 0 && $deck?.discard?.length <= 0) {
			HttpService.get(`/api/deck/${id}`).then((resp: ApiResponse) => {
				const { cards } = resp.content.deck_data;
				const totalDeck = cards.reduce((acc: DeckCards[], curr: DeckCards) => {
					return [...acc, ...Array.from({ length: curr.quantity }).fill(curr)];
				}, []);
				functions.shuffleDeck(totalDeck, resp.content, $page.url.pathname);
			});
		}
	});

	const selectCard = (card: DeckCards, deckType: string) => {
		const cards = {...card, deckPlace: deckType};
		functions.selectCard(cards);
	};

	const tabs: any = {
		hand: 'MANO',
		discard: 'DESCARTE',
		deck: 'ROBAR',
	}
</script>

{#if $cardSelected}
	<SingleCard bind:card={$cardSelected} bind:deck={$deck} {functions} />
{:else if $deck}
<div class="unlimited-decks-buttons flex center acenter gap">
	<button class="unlimited-decks-button hand" on:click={() => currentTab = 'hand'}>
			<p class="label-text">Mano</p>
			{$deck?.hand?.length}
		</button>
		<button class="unlimited-decks-button discard" on:click={() => currentTab = 'discard'}>
			<p class="label-text">Descarte</p>
			{$deck?.discard?.length}
		</button>
		<button class="unlimited-decks-button deck" on:click={functions.drawCard}>
			<p class="label-text">Robar</p>
			{$deck?.deck?.length}
		</button>
	</div>
	
	<div class="separator {currentTab}">{tabs[currentTab]}</div>

	{#if currentTab === 'hand'}
	<div class="flex center acenter mega-container">
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
		<div class="flex center acenter mega-container">
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
	{/if}
{/if}

<style>
	.cards-container {
		display: grid;
		grid-template-columns: repeat(4, 0fr);
		gap: 25px 15px;
	}

	.mega-container {
		padding: 10px 0 80px 0;
	}

	.separator {
		width: 100%;
		padding: 5px 20px;
		text-align: center;
		font-size: 1.2rem;
		font-weight: 600;
		margin: 20px 0;
	}

	.separator.hand {
		background-color: #cddc39;
	}
	.separator.discard {
		background-color: #f3f3f3;
	}

	.unlimited-decks-buttons {
		margin-top: 10px;
	}
	.unlimited-decks-buttons .unlimited-decks-button {
		width: 15mm;
		height: 20mm;
		position: relative;
		font-size: 18px;
		border: none;
		outline: none;
		cursor: pointer;
		border-radius: 5px;
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
	}
	.unlimited-decks-buttons .unlimited-decks-button .label-text {
		position: absolute;
		top: -5px;
		right: -5px;
		font-size: 0.8rem;
		font-weight: 600;
		padding: 2px 5px;
		border-radius: 5px;
	}

	.unlimited-decks-buttons .unlimited-decks-button.hand .label-text {
		background-color: #7a861f;
		color: #fff;
	}
	.unlimited-decks-buttons .unlimited-decks-button.discard .label-text {
		background-color: #999898;
		color: #333;
	}
	.unlimited-decks-buttons .unlimited-decks-button.deck .label-text {
		background-color: #14578c;
		color: #fff;
	}
	.unlimited-decks-buttons .unlimited-decks-button.hand {
		--button-bg: #cddc39;
		background-color: var(--button-bg);
	}
	.unlimited-decks-buttons .unlimited-decks-button.discard {
		--button-bg: #f3f3f3;
		background-color: var(--button-bg);
	}
	.unlimited-decks-buttons .unlimited-decks-button.deck {
		--button-bg: #2194ed;
		background-color: var(--button-bg);
		color: #fff;
	}
	.unlimited-decks-buttons .unlimited-decks-button::after {
		background-color: var(--button-bg);
		content: '';
		position: absolute;
		top: -10px;
		left: -10px;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		z-index: -1;
	}

	@media only screen and (max-width: 768px) {
		.cards-container.slider {
			display: flex;
			grid-template-columns: unset;
			width: 100%;
			display: flex;
			overflow-x: auto;
			overflow-y: hidden;
			min-height: 350px;
			scroll-snap-type: x mandatory;
			scroll-behavior: smooth;
		}

		.cards-container.slider .slide {
			scroll-snap-align: start;
			width: 100%;
			object-fit: cover;
		}

		.slider::-webkit-scrollbar {
			display: none;
		}
	}
</style>
