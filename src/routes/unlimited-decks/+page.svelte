<script lang="ts">
	import type { SearchUserDeck } from './models';
	import HttpService from '../../services/http.service';
	import CardContainer from '../../components/card-container.svelte';

	let response: SearchUserDeck[] = [];
	let searchTerms: string = '';

	const search = () => {
		if (searchTerms.length > 3) {
			HttpService.get(`/api/search/${searchTerms}`).then((res: any) => {
				response = res.content.decks;
			});
		}
	};
</script>

<input type="text" bind:value={searchTerms} on:change={search} />

<CardContainer>
	{#each response as item}
		<a href={`/unlimited-decks/${item.id}`}>
			<img
				style="width: 63.5mm; height: 88mm;"
				src={item.deck_data.appearance.cardbackUrl}
				alt=""
			/>
		</a>
	{/each}
</CardContainer>
