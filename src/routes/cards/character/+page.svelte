<script lang="ts">
	import Suspense from '@src/components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let CharacterPage: any;

	onMount(async () => {
		CharacterPage = (await import('@pages/characters/character.svelte')).default;
	});
</script>

<svelte:head>
	<title>UNmatched | Personaje</title>
</svelte:head>

<Suspense component={CharacterPage} />
