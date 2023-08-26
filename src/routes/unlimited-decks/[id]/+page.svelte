<script lang="ts">
	import { onMount } from 'svelte';

	let GamePage: any;

	onMount(async () => {
		GamePage = (await import('../../../pages/unlimited/game/unmatched-game.svelte')).default;
	});
</script>

<svelte:component this={GamePage} />
