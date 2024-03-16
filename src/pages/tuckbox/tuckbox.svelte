<script lang="ts">
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import Input from '@components/forms/input.svelte';
	import {
		getScaledVersionElement,
		getSimplePngFromElement
	} from '@services/dom.screenshot.service';
	import { onMount } from 'svelte';
	import { TuckboxPdfService } from './tuckbox.pdf.service';
	import ColorPicker from '@components/colorpicker/color-picker.svelte';
	import TuckboxBackground from './components/tuckbox-background.svelte';
	import TuckboxTemplate from './components/tuckbox-template.svelte';
	import TabBox from '@components/boxed/tab-box.svelte';
	import Switch from '@components/forms/switch.svelte';
	import InputNumberControls from '@components/forms/input-number-controls.svelte';
	import PrintInfoBlock from './components/print-info-block.svelte';

	// the unit used is mm
	let deckName: string = 'Beowulf';
	let secondDeckName: string = 'Wiglaf';
	let spaces: number = 25;
	let cardNumber: number = 31;
	let fontSize: number = 70;
	let backgroundColor: string = '#001622';
	let borderColor: string = '#ffffff';
	let cardBackgroundImage: string = '/cardsback/beowulf.webp';
	let cardFrontImage: string = '/cardsback/beowulf.webp';
	let hasNameFrame: boolean = true;
	let nameFrameBackgroundColor: string = '#001622';
	let nameFrameBorderColor: string = '#ffffff';
	let nameFrameColor: string = '#ffffff';
	let nameFrameFontSize: number = 20;

	const calculateSpaces = (numberOfCards: number) => {
		spaces = (numberOfCards * 24.5) / 31;
	};

	const changeBorderColorCss = (ev: any) => {
		const tuckboxContainer = document.getElementById('tuckbox-container');
		tuckboxContainer && tuckboxContainer.style.setProperty('--border-color', ev.target.value);
	};

	const changeBgColorCss = (ev: any) => {
		nameFrameBackgroundColor = ev.target.value;
		const tuckboxContainer = document.getElementById('tuckbox-container');
		tuckboxContainer && tuckboxContainer.style.setProperty('--bg-color', ev.target.value);
	};

	const pixelsToMM = function (element: HTMLElement | null) {
		if (!element) return;
		const width = parseInt(window.getComputedStyle(element, null).width);
		const height = parseInt(window.getComputedStyle(element, null).height);
		const converted = {
			width: Math.floor(width * 0.264583),
			height: Math.floor(height * 0.264583)
		};

		return converted;
	};

	const downloadTuckbox = async () => {
		// const tuckboxImage = await getPngFromElement(document.getElementById('tuckbox-container'));
		// const tuckboxImage = await getSimplePngFromElement(
		// 	document.getElementById('tuckbox-container')
		// );
		const element = document.getElementById('tuckbox-container');
		const tuckboxImage = await getScaledVersionElement(element, 3);
		if (!tuckboxImage) return;

		const pdf = new TuckboxPdfService({
			sizes: pixelsToMM(element),
			tuckbox: tuckboxImage
		});

		const output = pdf.generatePDF();
		window.open(URL.createObjectURL(output));
	};

	const eventChange = (event: any) => {
		calculateSpaces(Number(event.target.value));
	};

	const shareUrl = () => {
		const url = new URL(window.location.href);
		url.searchParams.set('deckName', deckName);
		url.searchParams.set('secondDeckName', secondDeckName);
		url.searchParams.set('cardNumber', cardNumber.toString());
		url.searchParams.set('fontSize', fontSize.toString());
		url.searchParams.set('backgroundColor', backgroundColor);
		url.searchParams.set('borderColor', borderColor);
		navigator.clipboard.writeText(url.toString());
	};

	const initializeParams = () => {
		const url = new URL(window.location.href);
		deckName = url.searchParams.get('deckName') || deckName;
		secondDeckName = url.searchParams.get('secondDeckName') || secondDeckName;
		cardNumber = Number(url.searchParams.get('cardNumber')) || cardNumber;
		fontSize = Number(url.searchParams.get('fontSize')) || fontSize;
		backgroundColor = url.searchParams.get('backgroundColor') || backgroundColor;
		borderColor = url.searchParams.get('borderColor') || borderColor;
	};

	onMount(() => {
		initializeParams();
		calculateSpaces(cardNumber);
		changeBgColorCss({ target: { value: backgroundColor } });
		changeBorderColorCss({ target: { value: borderColor } });
	});
</script>

<div class="w1 flex column gap flex-responsive responsive">
	<div>
		<h1 class="bebas uppercase">Panel de caja para cartas</h1>
		<a href="#printing-datas"
			>Antes de ir a imprimir esta caja te recomendamos que te leas los datos recogidos en la
			sección de impresión de esta página.</a
		>
	</div>

	<div class="w1 flex start astart gap-small flex-row-reverse flex-responsive responsive">
		<div class="w1 box p">
			<h3 class="title">Datos de caja</h3>
			<div class="flex center astart gap-small column">
				<TabBox title="Textos">
					<div class="w1 grid two-column-grid pend">
						<Input label="Héroe" type="text" bind:value={deckName} name="deckName" />
						<Input label="Ayudante" type="text" bind:value={secondDeckName} name="secondDeckName" />
					</div>
				</TabBox>

				<TabBox title="Cartas y fuente">
					<div class="w1 grid two-column-grid pend">
						<Input
							label="Nº de Cartas"
							type="number"
							bind:value={cardNumber}
							name="numberOfCards"
							onchange={eventChange}
						/>

						<Input
							label="Tamaño de letra"
							min={20}
							max={100}
							type="number"
							bind:value={fontSize}
							name="fontSize"
						/>
					</div>
				</TabBox>

				<TabBox title="Letrero con nombre de mazo">
					<div class="w1 grid two-column-grid pend responsive-grid">
						<Switch label="Mostrar marco" name="showframe" bind:value={hasNameFrame} />

						<ColorPicker
							label="Color de fondo"
							name="nameFrameBackgroundColor"
							bind:value={nameFrameBackgroundColor}
						/>

						<ColorPicker
							label="Color de borde"
							name="nameFrameBorderColor"
							bind:value={nameFrameBorderColor}
						/>

						<ColorPicker label="Color de letra" name="nameFrameColor" bind:value={nameFrameColor} />

						<InputNumberControls
							label="Tamaño de letra"
							min={10}
							max={100}
							bind:value={nameFrameFontSize}
							name="nameFrameFontSize"
						/>
					</div>
				</TabBox>

				<TabBox title="Colores">
					<div class="w1 grid two-column-grid pend">
						<ColorPicker
							label="Color de fondo"
							name="backgroundColor"
							bind:value={backgroundColor}
							onInputHandler={changeBgColorCss}
						/>

						<ColorPicker
							label="Color de borde y letras"
							name="borderColor"
							bind:value={borderColor}
							onInputHandler={changeBorderColorCss}
						/>
					</div>
				</TabBox>

				<TabBox title="Imágenes">
					<div class="w1 grid two-column-grid pend responsive-grid">
						<TuckboxBackground
							label="Parte Trasera"
							name="cardBackgroundImage"
							bind:image={cardBackgroundImage}
						/>
						<TuckboxBackground
							label="Parte Frontal"
							name="cardBackgroundImage"
							bind:image={cardFrontImage}
						/>
					</div>
				</TabBox>

				<div class="w1 flex between acenter down gap-small">
					<ButtonFill label="Compartir URL" click={shareUrl} />
					<ButtonFill label="Descargar" click={downloadTuckbox} />
				</div>
			</div>
		</div>

		<div class="tuckbox-container-flex">
			<div id="tuckbox-container">
				<TuckboxTemplate
					bind:deckName
					bind:secondDeckName
					bind:cardFrontImage
					bind:cardBackgroundImage
					bind:spaces
					bind:fontSize
					bind:hasNameFrame
					bind:nameFrameBackgroundColor
					bind:nameFrameBorderColor
					bind:nameFrameFontSize
					bind:nameFrameColor
				/>
			</div>
		</div>
	</div>

	<PrintInfoBlock />
</div>

<style>
	.tuckbox-container-flex {
		padding: 5px;
		z-index: 10;
	}
</style>
