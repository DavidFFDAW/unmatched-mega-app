<script>
	import { unlimitedSearch } from '../useUnlimitedSearch';
	import DeckItemLoading from './deck-item-loading.svelte';
</script>

{#if $unlimitedSearch.response.error}
	<p class="error" style="color: tomato;">Error: {$unlimitedSearch.response.message}</p>
{:else if $unlimitedSearch.response.loading}
	<div class="search-results list down">
		<DeckItemLoading />
		<DeckItemLoading />
		<DeckItemLoading />

		<DeckItemLoading />
		<DeckItemLoading />
		<DeckItemLoading />
	</div>
{/if}
