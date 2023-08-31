<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import TypeCard from './type-card.svelte';
	import type { DeckCards } from '../pages/unlimited/models/models';
	const dispatch = createEventDispatcher();

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

	export let editable: boolean = false;
	export let card: DeckCards = initialCardValues;
	let component: HTMLElement;
	export let width: number = 63;
	export let height: number = 88;
	let cantonAdjust = 0;

	const resizeCanton = function () {
		const characterName: HTMLElement | null = component.querySelector('.character-name');
		const width = characterName?.scrollWidth;

		if (width) {
			const cantonHeight = component.querySelector('.upper-left')?.scrollHeight || 0;

			const mmToPixels = 47 / cantonHeight;
			const newAdjust = -22.1 + width * mmToPixels;
			if (newAdjust <= 0) {
				characterName.style['transform'] = `rotate(-90deg) scaleX(1)`;
				cantonAdjust = -22.1 + width * mmToPixels;
			} else {
				cantonAdjust = 0;
				characterName.style['transform'] = `rotate(-90deg) scaleX(${90 / width})`;
			}
		}
	};

	onMount(() => {
		setTimeout(() => {
			resizeCanton();
		}, 500);
	});

	const emitClick = () => {
		dispatch('cardclick', {
			...card
		});
	};
</script>

<div
	bind:this={component}
	role="presentation"
	class="zoom-box"
	style="width: {width}mm; height: {height}mm;"
	on:click={emitClick}
>
	<div style="transform: scale(1); transform-origin: left top;">
		<div
			data-v-d8d5fac2=""
			style="width: {width}mm; height: {height}mm"
			class="unmatched-card float-left shadow {card.type || initialCardValues.type} editable"
		>
			<div data-v-d8d5fac2="" class="main-wrapper">
				<div
					data-v-d8d5fac2=""
					class="inner-top"
					style="background-image: url('{card.imageUrl ||
						initialCardValues.imageUrl}'); background-repeat: no-repeat; background-size: cover; background-position: center center;"
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
						</span><span data-v-d8d5fac2="" class="card-quantity-editing um-invisible">
							x{card.quantity || initialCardValues.quantity}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
