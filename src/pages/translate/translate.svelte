<script lang="ts">
	import ButtonFile from '../../components/buttons/button-file.svelte';
	import Input from '../../components/forms/input.svelte';
	import Switch from '../../components/forms/switch.svelte';
	import { downloadPngFromElement } from '../../services/dom.screenshot.service';
	import TranslateCard from './components/translate-card.svelte';

	let cardData: any = {
		name: 'Dracula',
		image: '',
		title: 'Finta',
		character: 'Cualquiera',
		line: true,
		qty: '1'
	};

	const setCardBackground = (event: Event) => {
		event.preventDefault();

		const target = event.target as HTMLInputElement;

		if (target.files) {
			const file = target.files[0];
			cardData.image = URL.createObjectURL(file);
		}
	};

	const setData = (key: string, value: string) => {
		if (value) {
			cardData[key] = value;
		}
	};
	const setEffectHeight = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;

		const inner = document.getElementById('unmatchedCardInner');
		const innerText = document.getElementById('unmatchedCardInnerTexts');
		if (inner && innerText) {
			inner.style.height = `${value}px`;
			innerText.style.height = `${value}px`;
		}
	};

	const setCharacterHeight = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;

		const character = document.getElementById('unmatchedCharacterImage');
		if (character) {
			character.style.height = `${value}px`;
		}
	};

	const setCharacterNameHeight = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;

		const characterName = document.getElementById('unmatchedCardCharacterText');
		if (characterName) {
			characterName.style.width = `${value}px`;
		}
	};

	const downloadCard = () => {
		return downloadPngFromElement(document.getElementById('unmatchedCard'), 'unmatched-card');
	};
</script>

<div class="flex center acenter gap flex-responsive-reverse">
	<div class="w1 box p">
		<h3 class="title">Datos</h3>
		<form class="flex center astart column gap-smaller">
			<Input label="Nombre del mazo" name="deck_name" bind:value={cardData.name} />
			<Input label="Título de carta" name="card_title" bind:value={cardData.title} />
			<Input label="Personaje" name="character" bind:value={cardData.character} />
			<Input type="number" label="Cantidad" name="qty" bind:value={cardData.qty} />

			<div class="w1 form-item">
				<label for="image">Imagen</label>
				<div style="margin-top: 5px;">
					<ButtonFile bind:image={cardData.image} />
				</div>
			</div>
		</form>
	</div>
	<div id="unmatched-translate-card">
		<TranslateCard {cardData} />
	</div>
</div>

<div class="flex center astart gap down flex-responsive">
	<div class="w1 box p">
		<h3 class="title">Efectos</h3>
		<form class="flex center astart column gap-smaller">
			<Input label="Efecto inmediato" name="inmediate" bind:value={cardData.inmediate} />
			<Input label="Efecto durante el combate" name="during" bind:value={cardData.during} />
			<Input label="Efecto después del combate" name="after" bind:value={cardData.after} />
			<Input label="Rayito" name="rayito" bind:value={cardData.rayito} />
		</form>
	</div>
	<div class="w1 box p">
		<h3 class="title">Posicionamiento</h3>
		<form class="flex center astart column gap-smaller">
			<Switch label="Línea" name="line" bind:value={cardData.line} />
		</form>
	</div>
</div>

<style>
	@media only screen and (max-width: 768px) {
		.flex-responsive-reverse {
			flex-direction: column-reverse;
		}
	}
</style>
