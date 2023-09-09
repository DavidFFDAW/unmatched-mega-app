<script lang="ts">
	import Suspense from '@src/components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let TranslatePage: any;

	onMount(async () => {
		TranslatePage = (await import('@pages/translate/translate.svelte')).default;
	});
</script>

<svelte:head>
	<title>UNmatched | Translate</title>
</svelte:head>

<Suspense component={TranslatePage} />
