<script lang="ts">
	import domtoimage from 'dom-to-image';
	import CardBack from '../../components/cards/card-back.svelte';
	import UnmatchedSVG from '/images/unmatched.svg';

	let deckName: string = 'Sample';
	let borderColor: string = '#FFFFFF';
	let imageUrl: string = '';
	let isImageChecked: boolean = false;

	const downloadImage = (e: Event) => {
		e.preventDefault();

		const downloadableImg = document.getElementById('downloadable-image');

		if (domtoimage && downloadableImg) {
			domtoimage.toPng(downloadableImg).then((dataUrl: string) => {
				console.log(dataUrl);
				const link = document.createElement('a');
				link.download = `${deckName}.png`;
				link.href = dataUrl;
				document.body.appendChild(link);
				link.click();
				link.remove();
			});
		}
	};

	const uploadImage = (e: any) => {
		const { target } = e;
		console.log(target.files[0]);
		imageUrl = URL.createObjectURL(target.files[0]);
	};

	const submitForm = (e: Event) => {
		e.preventDefault();
		console.log({
			deckName,
			borderColor,
			isImageChecked,
			imageUrl
		});
	};
</script>

<div class="flex row start gap astart flex-responsive">
	<div class="ca" id="downloadable-image">
		<CardBack src={imageUrl}>
			<!-- Component with unmatched logo on it svg so it can change its colors -->
			<img src="/images/unmatched.svg" class="unmatched-logo" alt="" />
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
				<label for="">Imagen de Internet (URL)</label>
				<input type="text" class="input" name="img-url-web" bind:value={imageUrl} />
			</div>
			<div class="w1 form-item">
				<label for="">Subir imagen de forma manual</label>
				<input type="file" name="file" on:change={uploadImage} />
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
	.form-item label {
		display: block;
		font-size: 18px;
	}
	.form-item input {
		display: block;
		font-size: 15px;
		border: none;
		background: #eee;
		padding: 10px 16px;
		width: 100%;
		border-radius: 6px;
		margin-top: 5px;
	}
	.unmatched-logo {
		position: absolute;
		top: 0;
		left: 25px;
		width: 80px;
		height: auto;
		z-index: 10;
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
