<script lang="ts">
	import CardBack from '../../../../components/cards/card-back.svelte';
	import UnmatchedRealCard from '../unmatched-real-card.svelte';

	let flipped: boolean = false;

	export let card: any = {};
	export let deck: any = {};
	export let functions: any = {};
</script>

<button on:click={() => functions.selectCard(null)}>Atrás</button>

<div class="flex center acenter">
	<div class="flip-card down" class:flipped>
		<div class="flip-card-inner">
			<div class="flip-card-front">
				<UnmatchedRealCard {card} />
			</div>
			<div class="flip-card-back">
				<CardBack src={deck.deckData?.deck_data.appearance.cardbackUrl} />
			</div>
		</div>
	</div>
</div>

<button
	on:click={() => {
		flipped = !flipped;
	}}>Flip</button
>

<style>
	.flip-card {
		background-color: transparent;
		width: 63mm;
		height: 88mm;
		perspective: 1000px;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.flip-card.flipped .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.flip-card-back {
		transform: rotateY(180deg);
	}
</style>
