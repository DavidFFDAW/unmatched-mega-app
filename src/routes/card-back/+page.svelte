<script lang="ts">
	import domtoimage from 'dom-to-image';
	import EmptyCard from '../../components/cards/empty-card.svelte';

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

	const submitForm = (e: Event) => {
		e.preventDefault();
		console.log({
			deckName,
			borderColor,
			isImageChecked,
			imageUrl,
		});
		
	}
</script>

<div class="flex row start gap astart">
	<div class="ca" id="downloadable-image">
		<EmptyCard src={imageUrl}>
			<img src="/noimage.png" class="unmatched-logo" alt="" />
			<div class="internal-border-line" style={`border-color: ${borderColor}`} />
			<div class="flex end internal-text league upper" style={`color: ${borderColor}`}>
				{deckName}
			</div>
		</EmptyCard>
	</div>
	<div class="w1 box p">
		<h3 class="title">Generales</h3>
		<form on:submit={submitForm}>
			<div>
				<input type="text" name="deck-name" bind:value={deckName}/>
			</div>
			<div>
				<input type="color" name="border-color" bind:value={borderColor}/>
			</div>
			<div>
				<label for="">
					<input type="radio" name="image" bind:value={isImageChecked}/>
					Voy a subir una imagen
				</label>
				<label for="">
					<input type="radio" name="image" bind:value={isImageChecked}>
					La imagen es de Internet
				</label>
			</div>

			<div class="flex end">
				<input type="submit" class="btn fill" value="Descargar"/>
				<!-- <a role="button" class="btn fill" href="/" on:click={downloadImage}>Descargar</a> -->
			</div>		
		</form>
	</div>
</div>


<style>
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
