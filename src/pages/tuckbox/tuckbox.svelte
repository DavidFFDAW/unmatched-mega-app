<script lang="ts">
	import ButtonFile from '@components/buttons/button-file.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import Input from '@components/forms/input.svelte';
	import { getPngFromElement } from '@services/dom.screenshot.service';
	import { onMount } from 'svelte';
	import { TuckboxPdfService } from './tuckbox.pdf.service';
	import ToggleBox from '@components/boxed/toggle-box.svelte';
	import ColorPicker from '@components/colorpicker/color-picker.svelte';
	import TuckboxBackground from './components/tuckbox-background.svelte';
	import TuckboxTemplate from './components/tuckbox-template.svelte';

	// the unit used is mm
	let deckName: string = 'Beowulf';
	let secondDeckName: string = 'Wiglaf';
	let spaces: number = 25;
	let cardNumber: number = 31;
	let fontSize: number = 80;
	let backgroundColor: string = '#001622';
	let borderColor: string = '#ffffff';
	let cardBackgroundImage: string = '/cardsback/beowulf.webp';
	let cardFrontImage: string = '/cardsback/beowulf.webp';

	const calculateSpaces = (numberOfCards: number) => {
		spaces = (numberOfCards * 24) / 31;
	};

	const changeBorderColorCss = (ev: any) => {
		const tuckboxContainer = document.getElementById('tuckbox-container');
		tuckboxContainer && tuckboxContainer.style.setProperty('--border-color', ev.target.value);
	};

	const changeBgColorCss = (ev: any) => {
		const tuckboxContainer = document.getElementById('tuckbox-container');
		tuckboxContainer && tuckboxContainer.style.setProperty('--bg-color', ev.target.value);
	};

	const downloadTuckbox = async () => {
		const tuckboxImage = await getPngFromElement(document.getElementById('tuckbox-container'));

		const pdf = new TuckboxPdfService({
			tuckbox: tuckboxImage,
			deckName
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

<ToggleBox title="Datos" customContainerCss="relative" width={550} showBox={false}>
	<div class="flex center astart gap-small column">
		<div class="w1 flex start aend gap">
			<Input label="Primer texto" type="text" bind:value={deckName} name="deckName" />
			<Input label="Segundo texto" type="text" bind:value={secondDeckName} name="secondDeckName" />
		</div>

		<div class="w1 flex start aend gap">
			<Input
				label="Nº de Cartas"
				type="number"
				bind:value={cardNumber}
				name="numberOfCards"
				onchange={eventChange}
			/>

			<Input
				label="Tamaño de letra"
				min={55}
				max={100}
				type="number"
				bind:value={fontSize}
				name="fontSize"
			/>
		</div>

		<div class="w1 flex start aend gap">
			<div class="w1 form-item">
				<label for="backgroundColor" class="s-A2gJlL5q-8_9">Color de fondo</label>
				<input
					type="color"
					name="backgroundColor"
					class="w1"
					bind:value={backgroundColor}
					on:input={changeBgColorCss}
				/>
			</div>

			<div class="w1 form-item">
				<label for="backgroundColor" class="s-A2gJlL5q-8_9">Color de borde y letras</label>
				<input
					type="color"
					name="borderColor"
					class="w1"
					bind:value={borderColor}
					on:input={changeBorderColorCss}
				/>
			</div>
		</div>

		<div class="w1 flex between gap">
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

		<div class="w1 flex between acenter down gap-small">
			<ButtonFill label="Compartir URL" click={shareUrl} />
			<ButtonFill label="Descargar" click={downloadTuckbox} />
		</div>
	</div>
</ToggleBox>

<div class="flex center astart column gap no-bg">
	<div class="w1 flex center absolute" style="top: 120px; z-index: 10;">
		<div id="tuckbox-container">
			<TuckboxTemplate
				bind:deckName
				bind:secondDeckName
				bind:cardFrontImage
				bind:cardBackgroundImage
				bind:spaces
				bind:fontSize
			/>
		</div>
	</div>
</div>
