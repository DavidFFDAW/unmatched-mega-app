<script lang="ts">
	import { onMount } from 'svelte';
	let UnlimitedDecksPage: any;

	onMount(async () => {
		UnlimitedDecksPage = (await import('../../pages/unlimited/unlimited-search.page.svelte'))
			.default;
	});
</script>

<svelte:component this={UnlimitedDecksPage} />
