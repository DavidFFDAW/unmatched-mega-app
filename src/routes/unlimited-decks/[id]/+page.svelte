<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import HttpService from '../../../services/http.service';
	import type { SearchUserDeck } from '../models';
	import type { ApiResponse } from '../../../models/models';
	import CardContainer from '../../../components/card-container.svelte';

	const { id } = $page.params;
	let response: SearchUserDeck | null = null;

	onMount(() => {
		HttpService.get(`/api/deck/${id}`).then((resp: ApiResponse) => {
			response = resp.content;
		});
	});
</script>

{#if response}
	<h1>Mazo {response.name}</h1>
	<CardContainer>
		{#each response.deck_data.cards as item}
			<img style="width: 63.5mm; height: 88mm;" src={item.imageUrl} alt="" srcset="" />
		{/each}
	</CardContainer>
{/if}
