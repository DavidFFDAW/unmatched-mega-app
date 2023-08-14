<script lang="ts">
	export let src: string = '';
</script>

<div class="card relative">
	<slot />
	{#if src}
		<img {src} draggable="false" alt="unmatched card" />
	{/if}
</div>

<style>
	.card {
		width: 63.5mm;
		height: 88mm;
		background-color: lightgray;
		border-radius: 5px;
	}
	.card img {
		width: 100%;
		height: 100%;
	}
</style>
