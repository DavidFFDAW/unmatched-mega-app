<script lang="ts">
	import { onMount } from 'svelte';
	let UnlimitedDecksPage: any;

	onMount(async () => {
		UnlimitedDecksPage = (await import('../../pages/unlimited/unlimited-search.page.svelte'))
			.default;
	});
</script>


<svelte:head>
	<title>UNmatched | Unlimited</title>
</svelte:head>

<svelte:component this={UnlimitedDecksPage} />
