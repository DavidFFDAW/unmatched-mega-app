<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: string;

	import { onMount } from 'svelte';

	let colorSelected: string = value;
	let showColorModal: boolean = false;
	let userCoords: { x: number; y: number } = { x: 0, y: 0 };

	function initColorPicker() {
		const canvasEl: any = document.getElementById('colorCanvas');
		const canvasContext = canvasEl.getContext('2d');

		const image = new Image(250, 250);
		image.onload = () => canvasContext.drawImage(image, 0, 0, image.width, image.height);
		image.src = '/images/picker.png';

		canvasEl.onclick = function (mouseEvent: MouseEvent) {
			const imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
			const rgba = imgData.data;

			console.log({ rgba, mouseCoords: { x: mouseEvent.offsetX, y: mouseEvent.offsetY } });
			colorSelected = 'rgba(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ', ' + rgba[3] + ')';
		};
	}

	onMount(() => {
		initColorPicker();
	});

	const setShowColorModal = () => {
		showColorModal = !showColorModal;
	};
</script>

<div class="w1 form-item custom-color-picker-wrapper">
	<label for={name}>{label}</label>
	<input
		id={name}
		{name}
		type="text"
		class="input w1"
		bind:value
		readonly
		on:click={setShowColorModal}
	/>

	<div
		class:hidden={!showColorModal}
		class="relative color-picker-canvas animate__animated animate__fadeIn animate__faster"
	>
		<!-- <div class="user-coords"></div> -->
		<div class="flex start acenter gap-small">
			<canvas id="colorCanvas" class="color-canvas" width="250" height="250">
				<!-- Draw a circle inside canvas element -->
				<circle cx="100" cy="100" r="50" stroke="black" stroke-width="2" fill="red" />
			</canvas>

			<div class="form-item">
				<input class="w1 input" style="background-color: {colorSelected};" />
			</div>
		</div>
	</div>
</div>

<style>
	.hidden {
		display: none;
	}
	.custom-color-picker-wrapper {
		position: relative;
	}
	.custom-color-picker-wrapper .color-picker-canvas {
		width: 100%;
		position: absolute;
		top: 42px;
		left: 0;
		padding: 15px;
		background-color: #fff;
		box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
		z-index: 990;
	}
	.user-coords {
		position: absolute;
		top: 0;
		left: 0;
		width: 10px;
		height: 10px;
		background-color: red;
	}
</style>
