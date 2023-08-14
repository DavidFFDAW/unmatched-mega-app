<section class="grid cards-container">
	<slot />
</section>

<style>
	.grid.cards-container {
		display: grid;
		grid-template-columns: repeat(4, 0fr);
		height: 100mm;
		overflow: auto;
	}
</style>
