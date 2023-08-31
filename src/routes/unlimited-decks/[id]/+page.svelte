<script lang="ts">
	import { onMount } from 'svelte';

	let GamePage: any;

	onMount(async () => {
		GamePage = (await import('../../../pages/unlimited/game/unmatched-game.svelte')).default;
	});
</script>



<svelte:head>
	<title>UNmatched | Game</title>
</svelte:head>

<svelte:component this={GamePage} />
