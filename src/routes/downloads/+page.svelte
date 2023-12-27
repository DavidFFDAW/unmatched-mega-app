<script lang="ts">
	import Suspense from '@src/components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let Landing: any;

	onMount(async () => {
		Landing = (await import('@pages/downloads/downloads.svelte')).default;
	});
</script>

<svelte:head>
	<title>UNmatched | Downloads</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<Suspense component={Landing} />
