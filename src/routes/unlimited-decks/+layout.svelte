<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	const dark = 'dark-background';

	onMount(() => {
		document.body.classList.add(dark);
	});

	onDestroy(() => {
		document.body.classList.remove(dark);
	});
</script>

<section class="unlimited-decks">
	<slot />
</section>
