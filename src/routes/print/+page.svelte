<script lang="ts">
	import { onMount } from 'svelte';
	let PrintPage: any;

	onMount(async () => {
		PrintPage = (await import('@pages/print/print.svelte')).default;
	});
</script>


<svelte:head>
	<title>UNmatched | Print</title>
</svelte:head>

<svelte:component this={PrintPage} />
