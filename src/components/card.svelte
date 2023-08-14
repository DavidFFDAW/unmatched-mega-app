<script lang="ts">
	export let src: string = '/default-card.jpg';
	export let rotate: number = 0;
</script>

<div class="card" style={`transform: rotate(${rotate}deg)`}>
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
