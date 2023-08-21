<script lang="ts">
	import { onMount } from 'svelte';
	let DialsPage: any;

	onMount(async () => {
		DialsPage = (await import('../../pages/dials.svelte')).default;
	});
</script>

<svelte:component this={DialsPage} />