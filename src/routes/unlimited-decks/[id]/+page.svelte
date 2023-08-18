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

	const { deck, cardSelected, functions } = useDeck();

	onMount(() => {
		HttpService.get(`/api/deck/${id}`).then((resp: ApiResponse) => {
			const { cards } = resp.content.deck_data;
			const totalDeck = cards.reduce((acc: DeckCards[], curr: DeckCards) => {
				return [...acc, ...Array.from({ length: curr.quantity }).fill(curr)];
			}, []);

			functions.shuffleDeck(totalDeck, resp.content);
		});
	});

	const selectCard = (card: DeckCards) => {
		functions.selectCard(card);
	};
</script>

{#if $cardSelected}
	<SingleCard bind:card={$cardSelected} bind:deck={$deck} />
{:else if $deck}
	{#if $deck.deckData}<h1 class="fff league">Mazo {$deck.deckData.name}</h1>{/if}

	<div class="flex center acenter mega-container">
		<div class="cards-container">
			{#each $deck.hand as item}
				<UnmatchedRealCard card={item} on:cardclick={() => selectCard(item)} />
			{/each}
		</div>
	</div>
{/if}

<style>
	.cards-container {
		/* width: 100%; */
		display: grid;
		grid-template-columns: repeat(4, 0fr);
		gap: 25px 15px;
	}

	.mega-container {
		padding: 10px 0 80px 0;
	}

	@media only screen and (max-width: 768px) {
		.cards-container {
			grid-template-columns: repeat(1, 0fr);
		}
	}
</style>
