<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import HttpService from '../../../services/http.service';
	import type { DeckCards, SearchUserDeck } from '../models';
	import type { ApiResponse } from '../../../models/models';
	import TypeCard from './type-card.svelte';
	import UnmatchedRealCard from './unmatched-real-card.svelte';

	const { id } = $page.params;
	let state: {
		hand: DeckCards[];
		discard: DeckCards[];
		deck: DeckCards[];
		entireDeck: DeckCards[];
		response: SearchUserDeck | { name: string };
	} = {
		hand: [],
		discard: [],
		deck: [],
		entireDeck: [],
		response: {
			name: 'Deck'
		}
	};

	onMount(() => {
		HttpService.get(`/api/deck/${id}`).then((resp: ApiResponse) => {
			console.log({
				content: resp.content
			});

			const { cards } = resp.content.deck_data;
			const totalDeck = cards.reduce((acc: DeckCards[], curr: DeckCards) => {
				return [...acc, ...Array.from({ length: curr.quantity }).fill(curr)];
			}, []);

			const shuffled = totalDeck.sort(() => 0.5 - Math.random());
			state.hand = shuffled.slice(0, 5);
			state.deck = shuffled.slice(5, shuffled.length);
			state.entireDeck = resp.content.deck_data.cards;
			state.response = resp.content;
		});
	});
</script>

{#if state}
	<h1 class="fff league">Mazo {state.response?.name}</h1>

	<div class="flex center acenter mega-container">
		<div class="cards-container">
			{#each state.entireDeck as item}
				<UnmatchedRealCard
					image={item.imageUrl}
					basic={item.basicText}
					value={item.value}
					character={item.characterName}
					boost={item.boost}
					after={item.afterText}
					during={item.duringText}
					immediate={item.immediateText}
					quantity={item.quantity}
					type={item.type}
					title={item.title}
				/>
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
