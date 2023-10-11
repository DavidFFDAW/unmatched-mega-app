<script lang="ts">
	import Image from '@components/image.svelte';
	import { deleteStoredGame } from '../useUnlimitedSearch';

	export let id: string;
	export let name: string;
	export let user: string;
	export let firstCard: {
		imageUrl: string;
	};
	export let cardback: string;
</script>

<a class="search-result-item unmatched-deck deck-{id}" href="/unlimited-decks/{id}">
	<div class="image-card-continer">
		{#if firstCard}
			<Image
				width={'100%'}
				height={326}
				src={firstCard.imageUrl}
				alt="unmatched game decks search {name} image"
			/>
		{:else}
			<Image
				width={'100%'}
				height={326}
				src={cardback}
				alt="unmatched game decks search {name} image"
			/>
		{/if}
	</div>
	<div class="flex between acenter" style="margin-top: 15px">
		<div class="bebas upper deck-name">{name}</div>
		<div class="league author">{user}</div>
	</div>
</a>
