<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: string;

	import { onMount } from 'svelte';

	let canvas: any = null;
	let colorSelected: string = value;
	let showColorModal: boolean = false;
	let userCoords: { x: number; y: number } = { x: 0, y: 0 };

	const rgbaToHex = (color: string): string => {
		if (/^rgb/.test(color)) {
			const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');

			// rgb to hex
			// eslint-disable-next-line no-bitwise
			let hex = `#${(
				(1 << 24) +
				(parseInt(rgba[0], 10) << 16) +
				(parseInt(rgba[1], 10) << 8) +
				parseInt(rgba[2], 10)
			)
				.toString(16)
				.slice(1)}`;

			// added alpha param if exists
			if (rgba[4]) {
				const alpha = Math.round(0o1 * 255);
				const hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
				hex += hexAlpha;
			}

			return hex;
		}
		return color;
	};

	function initColorPicker() {
		if (!canvas) return;
		const canvasContext = canvas.getContext('2d');

		const image = new Image(250, 250);
		image.onload = () => canvasContext.drawImage(image, 0, 0, image.width, image.height);
		image.src = '/images/picker.png';

		canvas.onclick = function (mouseEvent: MouseEvent) {
			const imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
			const rgba = imgData.data;
			colorSelected = 'rgba(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ', ' + rgba[3] + ')';
			value = rgbaToHex(colorSelected);
		};
	}

	onMount(() => {
		setTimeout(() => {
			initColorPicker();
		}, 1000);
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
		class="w1 relative color-picker-canvas animate__animated animate__fadeIn animate__faster"
	>
		<!-- <div class="user-coords"></div> -->
		<div class="w1 flex start acenter gap-small column">
			<canvas bind:this={canvas} class="w1 color-canvas" width="250" height="250">
				<!-- Draw a circle inside canvas element -->
				<circle cx="100" cy="100" r="50" stroke="black" stroke-width="2" fill="red" />
			</canvas>

			<button class="btn" on:click={setShowColorModal}> Aceptar</button>
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
