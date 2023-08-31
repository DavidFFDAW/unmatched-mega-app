<script lang="ts">
	import { onMount } from 'svelte';
	let Landing: any;

	onMount(async () => {
		Landing = (await import('../pages/landing/landing.svelte')).default;
	});
</script>


<svelte:head>
	<title>UNmatched | Landing</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<svelte:component this={Landing} />
