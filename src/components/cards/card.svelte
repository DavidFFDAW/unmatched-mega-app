<script lang="ts">
	export let src: string = '/images/default-card.jpg';
</script>

<div class="card">
	<img {src} draggable="false" alt="unmatched card" />
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
