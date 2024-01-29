<script lang="ts">
	import Suspense from '@src/components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let TuckboxPage: any;

	onMount(async () => {
		TuckboxPage = (await import('@pages/tuckbox/tuckbox.svelte')).default;
	});
</script>

<svelte:head>
	<title>UNmatched | Tuckbox</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<Suspense component={TuckboxPage} />
