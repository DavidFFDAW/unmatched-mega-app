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
	const { deck, cardSelected, functions } = useDeck();

	onMount(() => {
		
		if (!$deck?.deckData && $deck?.hand?.length <= 0 && $deck?.discard?.length <= 0) {
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

	const selectCard = (card: DeckCards, deckType: string) => {
		const cards = {...card, deckPlace: deckType};
		functions.selectCard(cards);
	};

	const tabs: any = {
		hand: 'MANO',
		discard: 'DESCARTE',
		deck: 'ROBAR',
		deckinfo: 'INFORMACIÓN',
	}

	const setView = () => {
		groupView = !groupView;
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
		<button class="unlimited-decks-button info" on:click={() => currentTab = 'deckinfo'}>
			<p class="label-text">Info</p>
			<span class="league">i</span>
		</button>
	</div>
	
	<div class="separator {currentTab}">{tabs[currentTab]}</div>

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