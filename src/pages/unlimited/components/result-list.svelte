<script>
	import { unlimitedSearch } from '../useUnlimitedSearch';
	import DeckItem from './deck-item.svelte';
</script>

<div class="search-results list down">
	{#if $unlimitedSearch.response.data.length > 0}
		{#each $unlimitedSearch.response.data as item}
			<DeckItem
				bind:id={item.id}
				bind:name={item.name}
				bind:user={item.user}
				bind:firstCard={item.deck_data.cards[0]}
				bind:cardback={item.deck_data.appearance.cardbackUrl}
			/>
		{/each}
	{/if}
</div>
