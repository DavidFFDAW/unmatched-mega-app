<script lang="ts">
	import CardBack from '../../components/cards/card-back.svelte';
	import ColorPicker from '../../components/colorpicker/color-picker.svelte';
	import { downloadPngFromElement } from '../../services/dom.screenshot.service';
	import UnmatchedLogoSvg from './components/unmatched-logo-svg.svelte';

	let deckName: string = 'Sample';
	let borderColor: string = '#FFFFFF';
	let imageUrl: string = '';
	let lettersColor: string = '#000';
	let backgroundColor: string = '#eee';

	const downloadImage = (e: Event) => {
		e.preventDefault();

		const downloadableImg: HTMLElement | null = document.getElementById('downloadable-image');
		downloadPngFromElement(downloadableImg, `${deckName}-CardBack`);
	};

	const uploadImage = (e: any) => {
		const { target } = e;
		console.log(target.files[0]);
		imageUrl = URL.createObjectURL(target.files[0]);
	};

	const submitForm = (e: Event) => {
		e.preventDefault();
	};
</script>

<div class="flex row start gap astart flex-responsive">
	<div class="ca" id="downloadable-image">
		<CardBack src={imageUrl}>
			<UnmatchedLogoSvg bind:lettersColor bind:backgroundColor />
			<!-- <img src="/images/noimage.png" class="unmatched-logo" alt="" /> -->
			<div class="internal-border-line" style={`border-color: ${borderColor}`} />
			<div class="flex end internal-text league upper" style={`color: ${borderColor}`}>
				{deckName}
			</div>
		</CardBack>
	</div>

	<div class="w1 box p">
		<h3 class="title">Generales</h3>
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
				<button class="btn button fill input file">
					Subir imagen de forma manual
					<input type="file" name="file" on:change={uploadImage} />
				</button>
				<!-- <label for="">Subir imagen de forma manual</label> -->
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
				<!-- <input type="submit" class="btn fill" value="Descargar" /> -->
				<a role="button" class="btn fill" href="/" on:click={downloadImage}>Descargar</a>
			</div>
		</form>
	</div>
</div>

<style>
	.title {
		font-size: 25px;
		font-family: 'bebas', sans-serif;
	}

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
