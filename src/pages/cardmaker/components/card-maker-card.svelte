<script lang="ts">
	import TypeCard from './../../../components/type-card.svelte';
	import type { DeckCards } from '@models/deck.model';

	const initialCardValues = {
		title: '',
		characterName: '',
		deckName: '',
		type: 'attack',
		value: 0,
		boost: 0,
		basicText: '',
		immediateText: '',
		duringText: '',
		afterText: '',
		quantity: 1,
		imageUrl: ''
	};
	export let card: DeckCards = initialCardValues;
	const editable: boolean = false;
	let component: HTMLElement;
	export let width: number = 63;
	export let height: number = 88;
	let cantonAdjust = 0;
</script>

<div bind:this={component} role="presentation" class="zoom-box unmatched-card-container">
	<div style="transform: scale(1); transform-origin: left top;">
		<div
			data-v-d8d5fac2=""
			style="width: {width}mm; height: {height}mm"
			class="unmatched-card float-left shadow {card.type || initialCardValues.type} editable"
		>
			<div data-v-d8d5fac2="" class="main-wrapper">
				<div
					data-v-d8d5fac2=""
					class="inner-top card-image-wrapper-container background-zero"
					style="background-image: url('{card.imageUrl ||
						initialCardValues.imageUrl}'); background-repeat: no-repeat; background-size: cover;"
				/>
				<div data-v-d8d5fac2="" class="upper-left">
					<svg data-v-d8d5fac2="" width="100%" height="100%" viewBox="0 0 10.8 47"
						><polygon
							data-v-d8d5fac2=""
							points={`0,0 10.8,0 10.8,${43.7 + cantonAdjust} 5,${47 + cantonAdjust} 0,${
								44.2 + cantonAdjust
							}`}
							class="border"
						/><polygon
							data-v-d8d5fac2=""
							points={`0,14.2 10,14.2 10,${43.3 + cantonAdjust} 5,${46.2 + cantonAdjust} 0,${
								43.3 + cantonAdjust
							}`}
							class="name-panel"
						/><polygon
							data-v-d8d5fac2=""
							points="0,0 10,0 10,14.2 5,17.1 0,14.2"
							class="canton"
						/></svg
					>
				</div>
				<div data-v-d8d5fac2="" class="upper-left icon">
					<div data-v-d8d5fac2="" class="icon-wrapper editor">
						<div data-v-12719f0f="" data-v-d8d5fac2="" class="unmatched-icon">
							<TypeCard type={card.type || initialCardValues.type} />
						</div>
					</div>
					{#if card.type !== 'scheme'}
						<div data-v-d8d5fac2="" class="value">
							{card.value || initialCardValues.value}
						</div>
					{/if}
				</div>
				<div data-v-d8d5fac2="" class="upper-left character">
					<div
						data-v-d8d5fac2=""
						contenteditable={editable}
						class="character-name"
						style="transform: rotate(-90deg) scaleX(1);"
					>
						{card.characterName || initialCardValues.characterName}
					</div>
				</div>
				<div data-v-d8d5fac2="" class="inner-bottom">
					<div data-v-d8d5fac2="" class="boost-circle inner-border">
						<div data-v-d8d5fac2="" class="boost-value">
							{card.boost || initialCardValues.boost}
						</div>
					</div>
					<div
						data-v-d8d5fac2=""
						contenteditable={editable}
						class="card-title"
						class:deline={!card.basicText &&
							!card.immediateText &&
							!card.duringText &&
							!card.afterText}
						style="min-height: 1.17em;"
					>
						{card.title || initialCardValues.title}
					</div>
					<div data-v-d8d5fac2="" class="card-text">
						<div data-v-d8d5fac2="">
							<div
								data-v-d8d5fac2=""
								contenteditable={editable}
								class="empty"
								style="min-height: 100%; white-space: pre-wrap;"
							/>
							{#if card.type === 'scheme' || Boolean(card.basicText?.trim())}
								<div
									data-v-d8d5fac2=""
									contenteditable={editable}
									style="min-height: 100%; white-space: pre-wrap;"
								>
									{card.basicText}
								</div>
							{/if}
							<div data-v-d8d5fac2="" class:empty={!Boolean(card.immediateText)}>
								<strong data-v-d8d5fac2="">Inmediatamente:</strong><span
									data-v-d8d5fac2=""
									contenteditable={editable}
									style="white-space: pre-wrap;">{card.immediateText}</span
								>
							</div>
							<div data-v-d8d5fac2="" class:empty={!Boolean(card.duringText)}>
								<strong data-v-d8d5fac2="">Durante el combate:</strong><span
									data-v-d8d5fac2=""
									contenteditable={editable}
									style="white-space: pre-wrap;">{card.duringText}</span
								>
							</div>
							<div data-v-d8d5fac2="" class:empty={!Boolean(card.afterText)}>
								<strong data-v-d8d5fac2="">Después del combate:</strong><span
									data-v-d8d5fac2=""
									contenteditable={editable}
									style="white-space: pre-wrap;">{card.afterText}</span
								>
							</div>
						</div>
					</div>
					<div data-v-d8d5fac2="" class="bottom-right">
						<span data-v-d8d5fac2="" class="deck-name"
							>{card.deckName || initialCardValues.deckName}</span
						><span data-v-d8d5fac2="" class="card-quantity">
							x{card.quantity || initialCardValues.quantity}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* :root {
		--background-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%23FFF' fill-opacity='0.075'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	} */

	.unmatched-card {
		width: 63mm;
		height: 88mm;
		line-height: normal;
		background: #f7eadb;
		padding: 3mm;
		border-radius: 2.5mm;
	}
	.main-wrapper[data-v-d8d5fac2] {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		border-radius: 1.5mm;
	}

	.inner-top {
		position: relative;
		flex: 1;
		background: #fff;
		border-top-left-radius: 1.5mm;
		border-top-right-radius: 1.5mm;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}

	.upper-left {
		position: absolute;
		width: 10.8mm;
		height: 47mm;
		border-top-left-radius: 1.5mm;
		overflow: hidden;
	}
	.upper-left .border {
		fill: var(--card-border);
	}
	.attack .upper-left .canton {
		fill: var(--attack);
	}
	.scheme .upper-left .canton {
		fill: var(--scheme);
	}
	.defence .upper-left .canton {
		fill: var(--defense);
	}
	.versatile .upper-left .canton {
		fill: var(--versatile);
	}
	.upper-left .name-panel {
		fill: #000;
	}

	.upper-left.icon {
		width: 10mm;
		height: 17.1mm;
		text-align: center;
		overflow: visible;
	}
	.editable .unmatched-icon {
		cursor: pointer;
	}

	.editable .value {
		position: relative;
	}

	.editable[data-v-d8d5fac2] .value .editor {
		left: 6mm;
		top: -4.5mm;
		width: 10mm;
		height: 18mm;
		visibility: hidden;
	}
	.upper-left.icon .value[data-v-d8d5fac2] {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		margin: 7.5mm 0 0;
		color: #fff;
		font-size: 7.8mm;
	}
	.editable .editor {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.icon-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.inner-bottom[data-v-d8d5fac2] {
		display: flex;
		flex-direction: column;
		position: relative;
		min-height: 28.8mm;
		border-top: 0.8mm solid #f7eadb;
		border-bottom-left-radius: 1.5mm;
		border-bottom-right-radius: 1.5mm;
		padding: 2mm 3mm 1mm;
		background: #000;
		background-image: var(--background-pattern);
		color: #fff;
	}
	.unmatched-card,
	.unmatched-card * {
		font-weight: 400;
		font-family: 'bebas', sans-serif;
		print-color-adjust: exact;
		/* -webkit-print-color-adjust: exact; */
		/* color-adjust: exact; */
	}
	.editable .upper-left.character {
		cursor: vertical-text;
	}

	.upper-left.character {
		top: 17.1mm;
		width: 10mm;
		height: 29.1mm;
	}
	.upper-left.character .character-name {
		white-space: nowrap;
		color: #fff;
		padding: 0;
		margin: 0;
		transform: rotate(-90deg);
		position: absolute;
		transform-origin: right bottom;
		text-align: right;
		text-transform: uppercase;
		font-size: 6mm;
		bottom: 26.5mm;
		right: 1.1mm;
	}

	.inner-bottom {
		display: flex;
		flex-direction: column;
		position: relative;
		min-height: 28.8mm;
		border-top: 0.8mm solid #f7eadb;
		border-bottom-left-radius: 1.5mm;
		border-bottom-right-radius: 1.5mm;
		padding: 2mm 3mm 1mm;
		background: #000;
		background-image: none;
		color: #fff;
	}
	.boost-circle {
		position: absolute;
		z-index: 1;
		top: -4.5mm;
		left: 48mm;
		background: #000;
		border-width: 0.8mm;
		border-style: solid;
		width: 7.5mm;
		height: 7.5mm;
		border-radius: 100%;
		text-align: center;
	}
	.boost-circle .boost-value[data-v-d8d5fac2] {
		color: #fff;
		padding-top: 0.1mm;
		position: relative;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		display: block;
		font-size: 1.17em;
		-webkit-margin-before: 1em;
		margin-block-start: 1em;
		-webkit-margin-after: 1em;
		margin-block-end: 1em;
		-webkit-margin-start: 0;
		margin-inline-start: 0;
		-webkit-margin-end: 0;
		margin-inline-end: 0;
		margin: 0;
	}
	.inner-bottom .card-title[data-v-d8d5fac2] {
		min-height: 1.17em;
		display: block;
		font-size: 1.17em;
		-webkit-margin-before: 1em;
		margin-block-start: 1em;
		-webkit-margin-after: 1em;
		margin-block-end: 1em;
		-webkit-margin-start: 0;
		margin-inline-start: 0;
		-webkit-margin-end: 0;
		margin-inline-end: 0;
		margin: 0 0 1.8mm;
		border-bottom: 0.3mm solid;
	}
	.inner-bottom .card-title[data-v-d8d5fac2].deline {
		border-bottom: none;
	}
	.inner-bottom .card-text[data-v-d8d5fac2] {
		flex: 1;
		overflow: hidden;
		scrollbar-width: none;
		padding-bottom: 2.5mm;
	}
	.inner-bottom .card-text div[data-v-d8d5fac2],
	.inner-bottom .card-text span[data-v-d8d5fac2] {
		font-size: 3.3mm;
		line-height: 1.2em;
		font-family: narrow, sans-serif;
	}
	.inner-bottom .card-text .empty[data-v-d8d5fac2] {
		display: none;
	}
	.inner-bottom .card-text div strong[data-v-d8d5fac2],
	.inner-bottom .card-text span strong[data-v-d8d5fac2] {
		font-size: 4mm;
		margin-right: 1mm;
	}
	.inner-bottom .bottom-right[data-v-d8d5fac2] {
		padding: inherit;
		font-size: 1.8mm;
		position: absolute;
		bottom: 0;
		right: -1mm;
	}
	.inner-bottom .bottom-right .card-quantity[data-v-d8d5fac2] {
		position: relative;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		font-family: League Gothic, sans-serif;
		border-left: 0.2mm solid #fff;
		padding-left: 0.5mm;
		/* padding-top: 0.7mm; */
		margin-left: 0.5mm;
	}
	.um-invisible[data-v-d8d5fac2] {
		opacity: 0;
	}
</style>
