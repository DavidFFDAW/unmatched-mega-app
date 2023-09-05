<script lang="ts">
	import Suspense from '@src/components/suspense/suspense.svelte';
	import { onMount } from 'svelte';
	let DialsPage: any;

	onMount(async () => {
		DialsPage = (await import('@pages/dials/dials.svelte')).default;
	});
</script>


<svelte:head>
	<title>UNmatched | Dials</title>
</svelte:head>

<Suspense component={DialsPage} />
