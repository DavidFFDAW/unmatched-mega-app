<script lang="ts">
	import Suspense from '@components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let CardBackPage: any;

	onMount(async () => {
		CardBackPage = (await import('@pages/cardsback/cards-back-page.svelte')).default;
	});
</script>


<svelte:head>
	<title>UNmatched | Cardback Designer</title>
</svelte:head>

<!-- <Suspense component="{CardBackPage}"/> -->
<svelte:component this={CardBackPage} />
