<script lang="ts">
	import { onMount } from 'svelte';
	let DialsPage: any;

	onMount(async () => {
		DialsPage = (await import('@pages/dials/dials.svelte')).default;
	});
</script>


<svelte:head>
	<title>UNmatched | Dials</title>
</svelte:head>

<svelte:component this={DialsPage} />
