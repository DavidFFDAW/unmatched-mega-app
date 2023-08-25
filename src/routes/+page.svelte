<script lang="ts">
	import { onMount } from 'svelte';
	let Landing: any;

	onMount(async () => {
		Landing = (await import('../pages/landing/landing.svelte')).default;
	});
</script>

<svelte:component this={Landing} />
