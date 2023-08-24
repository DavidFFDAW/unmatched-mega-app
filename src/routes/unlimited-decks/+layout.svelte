<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	const dark = 'dark-background';
	import './[id]/common.css';
	import './[id]/unmatched-card.css';

	onMount(() => {
		if (browser) document.body.classList.add(dark);
	});

	onDestroy(() => {
		if (browser) document.body.classList.remove(dark);
	});
</script>

<section class="unlimited-decks">
	<slot />
</section>
