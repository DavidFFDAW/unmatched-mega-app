<script lang="ts">
	import { onMount } from 'svelte';
	let PrintPage: any;

	onMount(async () => {
		PrintPage = (await import('../../pages/print.svelte')).default;
	});
</script>

<svelte:component this={PrintPage} />