<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import HttpService from '../../../services/http.service';
	import type { DeckCards, SearchUserDeck } from '../models';
	import type { ApiResponse } from '../../../models/models';

	const { id } = $page.params;
	let state: {
		hand: DeckCards[];
		discard: DeckCards[];
		deck: DeckCards[];
		response: SearchUserDeck | { name: string };
	} = {
		hand: [],
		discard: [],
		deck: [],
		response: {
			name: 'Deck'
		}
	};

	onMount(() => {
		HttpService.get(`/api/deck/${id}`).then((resp: ApiResponse) => {
			const { cards } = resp.content.deck_data;
			const totalDeck = cards.reduce((acc: DeckCards[], curr: DeckCards) => {
				return [...acc, ...Array.from({ length: curr.quantity }).fill(curr)];
			}, []);

			const shuffled = totalDeck.sort(() => 0.5 - Math.random());
			state.hand = shuffled.slice(0, 5);
			state.deck = shuffled.slice(5, shuffled.length);
			state.response = resp.content;
		});
	});
</script>

{#if state}
	<h1 class="fff league">Mazo {state.response?.name}</h1>

	<div class="cards-container">
		{#each state.hand as card}
			<div class="zoom-box" style="width: 63mm; height: 88mm;">
				<div class="unmatched-card {card.type} type-card">
					<div class="main-wrapper">
						<div class="inner-top" style="background-image: url('{card.imageUrl}');" />
						<div class="upper-left">
							<svg width="100%" height="100%" viewBox="0 0 10.8 47"
								><polygon
									points="0,0 10.8,0 10.8,30.39595947265625 5,33.69595947265625 0,30.89595947265625"
									class="border"
								/><polygon
									points="0,14.2 10,14.2 10,29.995959472656246 5,32.89595947265625 0,29.995959472656246"
									class="name-panel"
								/><polygon points="0,0 10,0 10,14.2 5,17.1 0,14.2" class="canton" /></svg
							>
						</div>

						<div class="upper-left character">
							<div
								contenteditable="true"
								class="character-name"
								style="transform: rotate(-90deg) scaleX(1);"
							>
								{card.characterName}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	.cards-container {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 5px;
	}
	.unmatched-card {
		width: 63mm;
		height: 88mm;
		line-height: normal;
		background: #f7eadb;
		padding: 3mm;
		border-radius: 2.5mm;
	}
	.main-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		border-radius: 1.5mm;
	}

	.inner-top {
		position: relative;
		flex: 1;
		background: #fff;
		border-top-left-radius: 1.5mm;
		border-top-right-radius: 1.5mm;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}

	.upper-left {
		position: absolute;
		width: 10.8mm;
		height: 47mm;
		border-top-left-radius: 1.5mm;
		overflow: hidden;
	}
	.upper-left .border {
		fill: #f7eadb;
	}
	.attack .upper-left .canton {
		fill: #dc3034;
	}
	.scheme .upper-left .canton {
		fill: #fcbd71;
	}
	.defence .upper-left .canton {
		fill: #3853dc;
	}
	.versatile .upper-left .canton {
		fill: #fc71f5;
	}
	.upper-left .name-panel {
		fill: #000;
	}
	.unmatched-card,
	.unmatched-card * {
		font-weight: 400;
		font-family: 'bebas', sans-serif;
		print-color-adjust: exact;
		/* -webkit-print-color-adjust: exact; */
		/* color-adjust: exact; */
	}
	.editable .upper-left.character {
		cursor: vertical-text;
	}

	.upper-left.character {
		top: 17.1mm;
		width: 10mm;
		height: 29.1mm;
	}
	.upper-left.character .character-name {
		white-space: nowrap;
		color: #fff;
		padding: 0;
		margin: 0;
		transform: rotate(-90deg);
		position: absolute;
		transform-origin: right bottom;
		text-align: right;
		text-transform: uppercase;
		font-size: 6mm;
		bottom: 26.5mm;
		right: 1.1mm;
	}
</style>
