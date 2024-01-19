<script lang="ts">
	export let title: string = '';
	export let name: string = '';

	const errorImage = (e: Event) => {
		(e.target as HTMLImageElement).src = '/images/not-found-card.png';
	};
</script>

<a
	href="/cardsback/{name}.webp"
	class="w1 related-card-back"
	download="{name}.webp"
	target="_blank"
>
	<img
		src="/cardsback/{name}.webp"
		alt="{name} card back design"
		class="image"
		on:error={errorImage}
		loading="lazy"
		translate="no"
	/>
	<div class="w1 card-back-related-title">
		<p class="bebas">{title}</p>
	</div>
</a>

<style>
	.related-card-back {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--color-text);
		box-shadow: 0 0 5px 0 #00000040;
	}

	.card-back-related-title {
		width: 100%;
		text-align: center;
		padding: 10px;
		background-color: var(--color-background);
		color: var(--color-text);
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		min-height: 75px;
	}

	.related-card-back .image {
		max-width: 100%;
		object-fit: cover;
	}
</style>
