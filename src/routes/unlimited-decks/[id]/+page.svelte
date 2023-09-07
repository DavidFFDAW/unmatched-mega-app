<script lang="ts">
	import Suspense from '@components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let GamePage: any;

	onMount(async () => {
		GamePage = (await import('@pages/unlimited/game/unmatched-game.svelte')).default;
	});
</script>

<svelte:head>
	<title>UNmatched | Game</title>
</svelte:head>

<Suspense component={GamePage} />
