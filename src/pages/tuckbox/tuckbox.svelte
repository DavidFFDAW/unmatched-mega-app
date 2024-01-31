<script lang="ts">
	import ButtonFile from '@components/buttons/button-file.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import Input from '@components/forms/input.svelte';
	import { getPngFromElement } from '@services/dom.screenshot.service';
	import { onMount } from 'svelte';
	import { TuckboxPdfService } from './tuckbox.pdf.service';
	import ToggleBox from '@components/boxed/toggle-box.svelte';

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
		spaces = (numberOfCards * 22) / 31;
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
		const tuckboxImage = await getPngFromElement(
			document.getElementById('tuckbox-container'),
		);

		const pdf = new TuckboxPdfService({
			tuckbox: tuckboxImage,
			deckName,
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
		url.searchParams.set('cardBackgroundImage', cardBackgroundImage);
		url.searchParams.set('cardFrontImage', cardFrontImage);
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
		cardBackgroundImage = url.searchParams.get('cardBackgroundImage') || cardBackgroundImage;
		cardFrontImage = url.searchParams.get('cardFrontImage') || cardFrontImage;
	}

	onMount(() => {
		initializeParams();
		calculateSpaces(cardNumber);
		changeBgColorCss({ target: { value: backgroundColor } });
		changeBorderColorCss({ target: { value: borderColor } });
	});
</script>

<ToggleBox>a</ToggleBox>
<div class="flex center astart column gap no-bg">
	<div class="w1 box p">
		<h3 class="title">Datos</h3>
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

				<Input label="Tamaño de letra" type="number" bind:value={fontSize} name="fontSize" />
			</div>


			<input
				type="color"
				name="backgroundColor"
				class="w1"
				bind:value={backgroundColor}
				on:input={changeBgColorCss}
			/>

			<input
				type="color"
				name="borderColor"
				class="w1"
				bind:value={borderColor}
				on:input={changeBorderColorCss}
			/>

			<div class="w1 flex between column gap-small">
				<ButtonFile label="Imagen de fondo" bind:image={cardBackgroundImage} />
				<ButtonFile label="Imagen de frente" bind:image={cardFrontImage} />
			</div>

			<div class="w1 flex end acenter down gap-small">
				<ButtonFill label="Compartir URL" click={shareUrl} />
				<ButtonFill label="Descargar" click={downloadTuckbox} />
			</div>
		</div>
	</div>

	<div class="w1 flex center down">
		<div class="total-tuckbox-container tuckbox-container" id="tuckbox-container">
			<div class="main-card-top-block flex column astart" style="margin-left: {spaces}mm">
				<div
					class="wmm main-card-top-rounded border-sides border-top bg"
					style="height: {spaces / 2}mm;"
				/>
			</div>

			<div class="main-card-top-compound flex start astart">
				<div
					class="main-card-space-rounded-first border-top border-left bg"
					style="width: {spaces}mm; height: {spaces}mm;"
				/>
				<div class="wmm relative main-card-space border-sides border-top bg" style="height: {spaces}mm;" >
					<p class="box-upper-place deck-title league" style="font-size: {fontSize}px">{deckName}</p>
				</div>
				<div
					class="main-card-space-rounded-last bg"
					style="width: {spaces}mm; height: {spaces}mm;"
				/>
			</div>

			<div class="main-cards-block flex start astart main-card-block-can-have-background-in-spaces">
				<div
					class="hmm relative main-card-sides border-top bg"
					style="width: {spaces}mm;"
				>
					<p class="vertical-text non-rotated deck-title league" style="font-size: {fontSize}px">{secondDeckName}</p>
				</div>
				<div
					class="main-card-space background-image bg"
					style="background-image: url({cardBackgroundImage});"
				/>
				<div
					class="hmm relative main-card-sides border-top bg"
					style="width: {spaces}mm;"
				>
					<p class="vertical-text deck-title rotated league" style="font-size: {fontSize}px">{deckName}</p>
					<!-- <svg
						data-v-d8d5fac2=""
						width="100%"
						height="100%"
						viewBox="0 0 10.8 47"
						class="s-Thnhrs2SdwLA svg-attached"
					>
						<polygon
							data-v-d8d5fac2=""
							points="-{spaces},0 {spaces},0 12,14.2 5,17.1 -{spaces},14.2"
							class="canton s-Thnhrs2SdwLA canton-attack"
						/>
					</svg>
					<svg
						data-v-12719f0f=""
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="22"
						viewBox="0 0 8680 8520"
						preserveAspectRatio="xMidYMid meet"
						class="s-eLSG9Otq9K-Q svg-attached-attack-icon"
						><g data-v-12719f0f="" class="s-eLSG9Otq9K-Q"
							><path
								data-v-12719f0f=""
								d="M5991 8453 c-12 -21 -25 -45 -31 -53 -5 -8 -241 -448 -525 -977 -285 -530 -520 -963 -525 -963 -7 0 -1014 1904 -1034 1956 -11 28 -26 32 -26 7 -1 -10 -47 -465 -103 -1012 -66 -637 -107 -996 -114 -998 -12 -4 -379 265 -376 276 1 4 -4 8 -10 8 -20 0 -806 587 -799 597 3 5 1 6 -5 3 -5 -3 -103 64 -217 149 -114 84 -213 154 -219 154 -8 0 -9 -3 -1 -8 5 -4 40 -79 76 -167 37 -88 231 -558 433 -1045 202 -487 370 -895 373 -907 2 -13 2 -23 -2 -23 -15 0 -2213 1125 -2223 1139 -7 8 -13 12 -13 8 0 -7 -341 160 -350 172 -3 3 -9 7 -15 8 -5 1 -19 5 -30 9 -14 6 -8 -7 22 -42 51 -61 129 -137 135 -133 10 8 1849 -1794 1840 -1803 -19 -19 -1165 -547 -1175 -541 -5 3 -8 2 -4 -3 3 -5 -82 -49 -188 -99 -107 -49 -193 -90 -192 -92 2 -1 365 -58 807 -128 890 -138 860 -133 860 -145 0 -13 -1490 -1365 -1501 -1362 -6 1 -8 -1 -5 -6 6 -10 -211 -208 -225 -204 -5 1 -8 -2 -7 -7 2 -5 -62 -69 -142 -142 -487 -445 -479 -437 -451 -434 14 1 33 5 41 9 37 14 235 56 247 52 7 -3 13 -2 13 3 0 12 197 54 211 45 7 -4 10 -3 6 2 -3 6 100 34 236 65 133 31 673 156 1200 279 527 122 960 220 963 217 3 -3 -134 -519 -306 -1148 -240 -882 -308 -1144 -299 -1153 9 -8 10 -8 6 0 -8 14 36 57 47 47 4 -5 6 -3 4 3 -4 14 953 1004 964 998 5 -3 7 -1 6 4 -4 12 573 612 587 612 10 -1 909 -1146 904 -1152 -2 -2 8 -14 21 -28 21 -21 27 -23 36 -10 7 8 10 20 7 27 -3 7 -1 13 4 13 5 0 9 8 9 18 1 19 441 1443 449 1451 3 2 22 -11 43 -30 20 -19 102 -95 182 -169 80 -73 172 -158 205 -190 170 -160 1715 -1590 1719 -1590 3 0 -18 51 -46 113 -28 61 -51 120 -52 130 0 9 -3 17 -6 17 -11 0 -40 71 -34 82 4 6 3 9 -2 6 -10 -6 -430 926 -428 948 1 8 -1 12 -5 10 -4 -3 -29 46 -56 107 -27 62 -63 144 -81 182 -89 193 -423 943 -426 956 -2 8 2 13 7 13 47 -5 1812 -511 1808 -518 -4 -5 -1 -6 6 -2 6 4 51 -4 101 -18 49 -14 94 -26 100 -26 6 0 -142 129 -328 288 -187 158 -337 290 -335 295 2 4 0 6 -5 5 -12 -4 -338 272 -335 284 2 4 -1 7 -6 5 -11 -2 -951 792 -951 804 0 11 -85 -9 800 185 415 90 763 163 773 160 9 -2 15 -1 13 3 -3 4 137 38 310 76 181 40 314 73 314 80 0 6 -8 11 -17 11 -10 0 -270 90 -578 199 -308 109 -722 256 -920 325 -267 95 -360 132 -360 144 0 19 1437 1935 1448 1929 4 -3 7 -1 6 4 -4 15 13 43 22 37 5 -3 8 -1 7 4 -4 14 211 302 225 302 6 0 8 3 4 6 -3 4 6 23 21 42 15 20 23 33 17 30 -54 -32 -550 -246 -558 -241 -7 3 -9 2 -4 -2 9 -11 -581 -278 -595 -269 -6 4 -9 3 -5 -2 6 -10 -977 -458 -1005 -458 -9 0 -15 -3 -13 -6 4 -6 -495 -233 -501 -227 -4 3 32 586 96 1582 12 176 29 444 39 595 10 151 17 277 15 278 -1 2 -12 -13 -23 -35z m-5605 -1805 l29 -33 -32 29 c-31 28 -38 36 -30 36 2 0 16 -15 33 -32z"
								class="s-eLSG9Otq9K-Q"
								style="fill: #ffffff;"
							/></g
						></svg
					> -->
					<!-- <polygon data-v-d8d5fac2="" points="0,0 10,0 10,14.2 5,17.1 0,14.2" class="canton s-Thnhrs2SdwLA"></polygon> -->
				</div>
				<div
					class="relative main-card-space background-image bg card-cutout"
					style="background-image: url({cardFrontImage});"
				/>
				<div class="hmm main-card-sides bg" style="width: {spaces}mm;" />
			</div>

			<div class="main-card-spaces-block flex start astart no-background">
				<div
					class="main-card-bottom-sides bg border-top opacity-filter"
					style="width: {spaces}mm; height: {spaces}mm;"
				/>
				<div
					class="wmm main-card-sides border-left border-right bg"
					style="height: {spaces}mm;"
				/>
				<div
					class="main-card-sides bg border-top opacity-filter"
					style="width: {spaces}mm; height: {spaces}mm;"
				/>
				<div class="wmm main-card-sides border-left bg" style="height: {spaces}mm;" />
				<div class="main-card-sides" style="width: {spaces}mm; height: {spaces}mm;" />
			</div>
		</div>
	</div>
</div>

<style>
	.wmm {
		width: 68mm;
	}
	.hmm {
		height: 92mm;
	}
	.bg {
		background-color: var(--bg-color);
	}
	.border-top {
		border-top: 1px solid var(--border-color);
	}
	/* .border-bottom {
		border-bottom: 1px solid var(--border-color);
	} */
	.border-left {
		border-left: 1px solid var(--border-color);
	}
	.border-right {
		border-right: 1px solid var(--border-color);
	}

	.border-sides {
		border-left: 1px solid var(--border-color);
		border-right: 1px solid var(--border-color);
	}
	/* .bordered {
		border: 1px solid var(--border-color);
	} */

	/* .svg-attached-attack-icon {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1500;
	}

	.canton-attack {
		fill: var(--attack);
	} */

	.vertical-text.deck-title {
		height: 100%;
		text-align: center;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(180deg);
		z-index: 1500;
		font-size: 80px;
		color: var(--border-color);
		text-transform: uppercase;
	}

	.box-upper-place.deck-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
		color: var(--border-color);
		text-transform: uppercase;
		font-size: 70px;
		margin: 0;
		padding: 0;
	}
	.vertical-text.deck-title.rotated {
		transform: translate(-50%, -50%) rotate(180deg);
	}
	.vertical-text.non-rotated.deck-title {
		transform: translate(-50%, -50%);
	}
	.main-card-space {
		width: 68mm;
		height: 92mm;
	}

	.main-card-top-rounded {
		width: 68mm;
		border-radius: 50% 50% 0 0;
	}
	.main-card-space-rounded-first {
		border-radius: 100% 0 0 0;
	}
	.main-card-space-rounded-last {
		border-radius: 0 100% 0 0;
	}

	.card-cutout::after {
		content: '';
		position: absolute;
		top: -1px;
		left: 50%;
		width: 40%;
		height: 25px;
		transform: translateX(-50%);
		border-radius: 0 0 150px 150px;
		background-color: #fff;
		z-index: 1550;
	}
	.background-image {
		background-image: url('/cardsback/beowulf.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.bg.opacity-filter {
		position: relative;
		/* opacity: .8; */
	}
	.bg.opacity-filter::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 98%;
		/* create a trapezoid */
		height: 35px;
		background: #eee;
		border: 1px solid var(--bg-color);
		border-top: none;
	}
</style>
