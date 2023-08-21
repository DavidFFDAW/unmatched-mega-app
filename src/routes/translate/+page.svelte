<script lang="ts">
	import { onMount } from 'svelte';
	let TranslatePage: any;

	onMount(async () => {
		TranslatePage = (await import('../../pages/translate.svelte')).default;
	});
</script>

<svelte:component this={TranslatePage} />