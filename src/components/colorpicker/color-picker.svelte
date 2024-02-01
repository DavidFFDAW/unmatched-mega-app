<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: string;
	import { usedColors, addColor } from './color.store';
	import { clickOutside } from '@services/click.outside';

	let colorSelected: string = value;
	let showColorModal: boolean = false;

	const setShowColorModal = (event: Event) => {
		event.preventDefault();
		showColorModal = !showColorModal;
	};

	const selectColor = (event: Event) => {
		event.preventDefault();
		addColor(value);
	};

	const setColor = (color: string) => {
		value = color;
		colorSelected = color;
	};

	const handleClickOutside = () => {
		showColorModal = false;
	};

	export let onInputHandler = (event: Event) => {
		event.preventDefault();
		const target = event.target as HTMLInputElement;
		setColor(target.value);
	};
</script>

<div
	class="w1 form-item custom-color-picker-wrapper"
	use:clickOutside={() => {
		handleClickOutside();
	}}
>
	<label for={name}>{label}</label>
	<input
		id={name}
		{name}
		type="color"
		class="input w1 pointer"
		bind:value
		readonly
		on:click={setShowColorModal}
	/>

	<div
		class:hidden={!showColorModal}
		class="w1 relative color-picker-canvas animate__animated animate__fadeIn animate__faster"
	>
		<div class="input-container">
			<div class="w1 flex end acenter">
				<button type="button" class="close-button" on:click={setShowColorModal}>&times;</button>
			</div>
			<div class="w1 flex start acenter column gap">
				<div class="w1">
					<h5 class="bebas upper color-module-title">Seleccionar color:</h5>
					<input type="color" class="real-color-input input w1 pointer" bind:value on:input={onInputHandler} />
					<button type="button" class="league select-color" on:click={selectColor}>
						Seleccionar color
					</button>
				</div>
				<div class="w1">
					<h5 class="bebas upper color-module-title used-colors">Colores anteriormente usados:</h5>
					{#if $usedColors.length > 0}
						<div class="used-colors-container">
							{#each $usedColors as color}
								<div
									role="presentation"
									class="used-color-item"
									style="background-color: {color}"
									on:click={() => setColor(color)}
								/>
							{/each}
						</div>
					{:else}
						<p style="padding: 10px 0;" class="w1 tcenter">Selecciona colores y aparecerán aquí</p>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.hidden {
		display: none;
	}
	.input-container {
		width: 100%;
		position: absolute;
		padding: 10px 15px;
		top: 100%;
		min-height: 10vh;
		max-height: 50vh;
		overflow: hidden;
		background-color: #fff;
		/* border: 2px solid lightgray; */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-top: none;
		z-index: 1000000000;
	}
	.color-module-title {
		font-size: 18px;
	}
	.close-button {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: #fff;
		border: 2px solid lightgray;
		cursor: pointer;
	}
	.real-color-input.input.w1.pointer {
		height: 80px;
	}
	.select-color {
		width: 100%;
		padding: 10px 15px;
		background-color: transparent;
		color: #000;
		border: 2px solid lightgray;
		cursor: pointer;
		font-size: 18px;
		transition: all 0.3s ease;
	}
	.used-colors::after {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		border-top: 2px dotted lightgray;
	}

	.used-colors-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 10px 5px;
		place-items: center;
		margin-top: 10px;
	}
	.used-colors-container .used-color-item {
		width: 30px;
		height: 30px;
		border-radius: 10px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}
</style>
