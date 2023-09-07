<script lang="ts">
	import Suspense from '@components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let UnlimitedDecksPage: any;

	onMount(async () => {
		UnlimitedDecksPage = (await import('@pages/unlimited/unlimited-search.page.svelte')).default;
	});
</script>

<svelte:head>
	<title>UNmatched | Unlimited</title>
</svelte:head>

<Suspense component={UnlimitedDecksPage} />
