<script lang="ts">
	import './commons.css';
	import domtoimage from 'dom-to-image';
	import JSZip from 'jszip';
	import DialLetters from './dial-letters.svelte';
	import { ImageKeys, dials, setImage } from './stores/dials.store';
	import InputNumberControls from '@components/forms/input-number-controls.svelte';
	import TypographySelect from './components/typography-select.svelte';
	import ColorPicker from '@components/colorpicker/color-picker.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';

	const loadUploadedImage = (event: Event, key: string) => {
		const { files } = event.target as HTMLInputElement;
		if (!files) return;

		const file = files[0];
		const url = URL.createObjectURL(file);

		setImage(key, url);
	};

	const downloadDials = () => {
		const zip = new JSZip();

		const images = [
			document.getElementById('dialletters') as HTMLDivElement,
			document.getElementById('dialBack') as HTMLDivElement,
			document.getElementById('dialFront') as HTMLDivElement
		].map((item: HTMLDivElement) => {
			return domtoimage.toPng(item);
		});

		Promise.all(images).then((images) => {
			images.forEach((image, index) => {
				// zip.file(`${deckName}-${name}.png`, image, { base64: false, binary: true });
				zip.file(`dial-${index}.png`, image.split('base64,')[1], { base64: true });
			});

			zip.generateAsync({ type: 'blob' }).then(function (content) {
				const a = document.createElement('a');
				a.href = URL.createObjectURL(content);
				a.download = `unmatched-mega-app-dials.zip`;
				a.click();
			});
		});
	};
</script>

<!-- <Alert /> -->
<div class="__class __container">
	<div class="flex row between astart gap flex-responsive">
		<div class="w1 box p">
			<h3 class="title">Dial principal</h3>
			<form class="flex center astart column gap-medium margin-sides-auto">
				<div class="w1 flex start aend gap">
					<InputNumberControls name="life" label="Vida máxima" min={0} bind:value={$dials.life} />
					<InputNumberControls
						name="dialSize"
						label="Tamaño de círculo"
						min={0}
						bind:value={$dials.dialSize}
					/>
				</div>
				<div class="w1 flex start aend gap">
					<InputNumberControls
						name="letterSize"
						label="Tamaño de letra"
						min={0}
						bind:value={$dials.letterSize}
					/>
					<InputNumberControls
						name="dialLetterDistance"
						label="Distancia de letras al borde"
						min={0}
						bind:value={$dials.dialLetterDistance}
					/>
				</div>
				<div class="w1 flex start aend gap">
					<InputNumberControls
						name="dialCenterWidth"
						label="Grosor de centro de circunferencia"
						min={1}
						max={5}
						bind:value={$dials.dialCenterWidth}
					/>
					<TypographySelect name="typography" label="Tipografía" bind:value={$dials.typography} />
				</div>

				<div class="w1 flex center acenter">
					<div id="dialletters">
						<DialLetters />
					</div>
				</div>

				<!-- <div class="w1 flex between align center down">
					<div class="w1">
						<span class="block"><strong>Diámetro: </strong></span>
						<span id="circle_size_cm">5.820833 cm</span>
					</div>

					<div class="w1 flex end">
						<input type="text" class="deck-dial-name" id="deckDialName" />
						<button class="btn download" type="button" onclick="downloadCircles()">Descargar</button
						>
					</div>
				</div> -->
			</form>
		</div>

		<div class="w1 flex center acenter gap column">
			<div class="w1 box p">
				<h3 class="title">Imagenes del resto de diales</h3>
				<form class="flex center astart flex-responsive gap-medium margin-sides-auto">
					<div
						class="relative bg circle background-image"
						id="dialBack"
						style="width: {$dials.dialSize}px; height: {$dials.dialSize}px; background-image: url('{$dials.dialBack}');"
					>
						<div class="circunference center filled" />
						<div style="position: relative; top: 50%" class="flex center column align dissapear">
							<button class="btn download file container disappear">
								<input
									type="file"
									class="disappear"
									on:change={(event) => loadUploadedImage(event, ImageKeys.back)}
								/>
								Subir imagen
							</button>
						</div>
					</div>
					<div
						class="relative bg circle frontal-dial background-image"
						id="dialFront"
						style="width: {$dials.dialSize}px; height: {$dials.dialSize}px; background-image: url('{$dials.dialFront}');"
					>
						<div class="circunference center filled" />
						<div style="position: relative; top: 50%" class="flex center column align dissapear">
							<button class="btn download file container disappear">
								<input
									type="file"
									class="disappear"
									on:change={(event) => loadUploadedImage(event, ImageKeys.front)}
								/>
								Subir imagen
							</button>
						</div>
					</div>
				</form>
			</div>
			<div class="w1 box p">
				<h3 class="title">Colores</h3>
				<form class="flex center aend row gap-medium margin-sides-auto">
					<ColorPicker label="Letras" name="lettersColor" bind:value={$dials.letterColor} />
					<ColorPicker
						label="Centro de circunferencia"
						name="dialCenterColor"
						bind:value={$dials.dialCenterColor}
					/>
					<ColorPicker label="Circunferencia" name="dialColor" bind:value={$dials.dialColor} />
				</form>
			</div>
		</div>
	</div>

	<div class="w1 flex end">
		<ButtonFill label="Descargar diales" click={downloadDials} />
	</div>
</div>

<style>
	.background-image {
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
	}
	.margin-sides-auto {
		margin: 0 auto;
	}
	.btn.download {
		background-color: #ffffff;
		color: #707070;
		border: 1px solid #c9c9c9;
		padding: 10px 20px;
		font-size: 1rem;
		font-weight: 400;
		border-radius: 0 5px 5px 0;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.deck-dial-name {
		background-color: #ffffff;
		color: #707070;
		border: 1px solid #c9c9c9;
		border-right: none;
		padding: 10px 20px;
		font-size: 1rem;
		font-weight: 400;
		border-radius: 5px 0 0 5px;
		cursor: pointer;
		transition: all 0.3s ease;
		outline: none;
	}

	.btn.download:hover {
		border-radius: 0 15px 15px 0;
	}

	.dials .relative.dials-box {
		padding: 30px;
	}

	.relative.circle .dissapear {
		visibility: hidden;
	}

	.relative.circle#dialBack .input,
	.relative.circle#dialFront .input {
		visibility: hidden;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -40%);
		width: 85%;
		padding: 10px 5px;
		box-sizing: border-box;
		background: rgb(41, 41, 41);
		z-index: 3;
		outline: none;
		border: 1px solid #fff;
		color: #fff;
		margin: 0;
		transition: all 0.3s ease;
	}

	.btn.download.file.container {
		position: relative;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 50%;
		background-color: #007bff;
		transform: translate(-50%, -50%);
		border-radius: 5px;
		border: none;
		color: #fff;
		cursor: pointer;
		transition: all 0.3s ease;
		overflow: hidden;
		z-index: 3;
	}

	.btn.download.file.container input[type='file'] {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 6;
		opacity: 0;
		cursor: pointer;
		overflow: hidden;
	}

	.frontal-dial::after {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		width: 40px;
		height: 40px;
		transform: translate(-50%, 0) rotate(-90deg);
		background-color: #fff;
		/* opacity: 0.5; */
		clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
		z-index: 2;
	}

	.relative.circle:hover .dissapear {
		visibility: visible;
	}

	.relative.circle#dialFront:hover .input,
	.relative.circle#dialBack:hover .input {
		visibility: visible;
	}

	.subitem {
		padding: 5px 0;
		padding-left: 80px;
		padding-bottom: 15px;
	}
	.container {
		height: 100vh;
	}
</style>
