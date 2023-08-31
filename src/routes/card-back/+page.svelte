<script lang="ts">
	import { onMount } from 'svelte';
	import CardsBackPage from '../../pages/cardsback/cards-back-page.svelte';
	let CardBackPage: any;

	onMount(async () => {
		CardBackPage = (await import('../../pages/cardsback/cards-back-page.svelte')).default;
	});
</script>


<svelte:head>
	<title>UNmatched | Cardback Designer</title>
</svelte:head>

<svelte:component this={CardsBackPage} />
