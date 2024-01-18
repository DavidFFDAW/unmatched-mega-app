<script lang="ts">
	import Suspense from '@src/components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let CardMakerPage: any;

	onMount(async () => {
		CardMakerPage = (await import('@pages/cardmaker/cardmaker.svelte')).default;
	});
</script>

<svelte:head>
	<title>UNmatched | Cardmaker</title>
</svelte:head>

<Suspense component={CardMakerPage} />
