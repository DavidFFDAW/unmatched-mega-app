<script lang="ts">
	import ButtonFile from '../../components/buttons/button-file.svelte';
	import ButtonFill from '../../components/buttons/button-fill.svelte';
	import CardBack from '../../components/cards/card-back.svelte';
	import ColorPicker from '../../components/colorpicker/color-picker.svelte';
	import { downloadPngFromElement } from '../../services/dom.screenshot.service';
	import UnmatchedLogoSvg from './components/unmatched-logo-svg.svelte';

	let deckName: string = 'Sample';
	let borderColor: string = '#FFFFFF';
	let imageUrl: string = '';
	let lettersColor: string = '#000';
	let backgroundColor: string = '#eee';

	const downloadImage = () => {
		const downloadableImg: HTMLElement | null = document.getElementById('downloadable-image');
		downloadPngFromElement(downloadableImg, `${deckName}-CardBack`);
	};

	const submitForm = (e: Event) => {
		e.preventDefault();
	};
</script>

<div class="flex start gap astart flex-responsive">
	<div>
		<div class="flex center acenter" id="downloadable-image">
			<CardBack src={imageUrl}>
				<UnmatchedLogoSvg bind:lettersColor bind:backgroundColor />
				<div class="internal-border-line" style={`border-color: ${borderColor}`} />
				<div class="flex end internal-text league upper" style={`color: ${borderColor}`}>
					{deckName}
				</div>
			</CardBack>
		</div>

		<div class="w1 form-item down">
			<ButtonFile bind:image={imageUrl} />
		</div>
	</div>

	<div class="w1 box p">
		<h3 class="title">Parte trasera</h3>
		<form on:submit={submitForm} class="flex center astart column gap">
			<div class="w1 form-item">
				<label for="">Nombre del mazo</label>
				<input type="text" name="deck-name" bind:value={deckName} />
			</div>

			<div class="w1 form-item">
				<label for="">Color del borde de la carta</label>
				<input type="color" name="border-color" bind:value={borderColor} />
			</div>

			<div class="w1 form-item">
				<label for="">Unmatched logo color de letras</label>
				<input type="color" name="letters-color" bind:value={lettersColor} />
			</div>

			<ColorPicker />

			<div class="w1 form-item">
				<label for="">Unmatched logo color de fondo</label>
				<input type="color" name="bg-color" bind:value={backgroundColor} />
			</div>

			<div class="w1 flex end">
				<ButtonFill label="Descargar" click={downloadImage} />
			</div>
		</form>
	</div>
</div>

<style>
	.internal-border-line {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 88%;
		height: 90%;
		background: transparent;
		transform: translate(-50%, -50%);
		border-width: 3px;
		border-style: solid;
		border-radius: 8px;
	}
	.internal-text {
		padding: 0 22px;
		padding-top: 77.5mm;
	}
</style>
