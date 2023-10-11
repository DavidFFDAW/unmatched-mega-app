<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let src: string = '/default-card.jpg';
	export let rotate: number = 0;
	const dispatch = createEventDispatcher();

	const emitImageClick = (event: Event) => {
		console.log('emitImageClick');
		dispatch('imageclick', event);
	};
</script>

<div class="card" style={`transform: rotate(${rotate}deg)`}>
	<img {src} draggable="false" alt="unmatched card" on:click={emitImageClick} role="presentation" />
</div>

<style>
	.card {
		width: 63.5mm;
		height: 88mm;
	}
	.card img {
		width: 100%;
		height: 100%;
	}
</style>
