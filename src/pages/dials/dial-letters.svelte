<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { dials } from './stores/dials.store';

	let circle: any;
	let lifeArray: any[] = [];

	const getCoordinates = (angle: number, radius: number) => {
		const x = radius * Math.cos((angle * Math.PI) / 180);
		const y = radius * Math.sin((angle * Math.PI) / 180);

		return { x, y };
	};

	const createNumber = (number: number, angle: number, radius: number, rotation: number) => {
		const { x, y } = getCoordinates(angle, radius);

		return {
			className: 'letters-number-item',
			textContent: number.toString(),
			style: `position: absolute; top: calc(46% + ${Math.round(
				y
			)}px); left: calc(47% + ${Math.round(x)}px); transform: rotate(${rotation}deg); font-size: ${
				$dials.letterSize
			}px; font-weight: bold; color: ${$dials.letterColor}; font-family: ${$dials.typography};`
		};
	};

	const createLetters = () => {
		let rotations = 90;
		let angle = 360 / ($dials.life + 1);
		let radius = 0;

		if (browser && circle) {
			circle.style.width = `${$dials.dialSize}px`;
			circle.style.height = `${$dials.dialSize}px`;
			radius = circle.clientWidth / 2 - $dials.dialLetterDistance;
		}

		lifeArray = Array.from({ length: $dials.life + 1 })
			.map((_, i) => i)
			.map((number, index) => {
				const genR = createNumber(number, angle * index, radius, rotations);
				rotations += angle;

				return genR;
			});
	};

	dials.subscribe((_) => {
		createLetters();
	});

	onMount(() => {
		setTimeout(() => {
			createLetters();
		}, 500);
	});
</script>

<div
	bind:this={circle}
	class="relative bg circle"
	style="background: {$dials.dialBackground}; box-sizing: border-box;"
>
	<div
		class="circunference center"
		style="border-width: {$dials.dialCenterWidth}px; border-color: {$dials.dialCenterColor}"
	/>
	<div class="letters-container" id="lettersContainer">
		{#each lifeArray as letter}
			<div class="letters-number-item" style={letter.style.toString()}>{letter.textContent}</div>
		{/each}
	</div>
</div>

<style>
	.bg.circle .letters-container {
		width: 100%;
		height: 100%;
		/* padding: 5px; */
		background: inherit;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
</style>
