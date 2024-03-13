<script lang="ts">
	import domtoimage from 'dom-to-image';
	// import UnmatchedRealCard from '@components/unmatched-real-card.svelte';
	// import InputNumberControls from '@components/forms/input-number-controls.svelte';
	import Input from '@components/forms/input.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import ButtonFile from '@components/buttons/button-file.svelte';
	import Boxed from '@components/boxed/boxed.svelte';
	import CardMakerCard from './components/card-maker-card.svelte';
	import Textarea from '@components/forms/textarea.svelte';
	import Select from '@components/forms/select.svelte';
	import ImageHttpService from '@services/image.service';
	import CardTypeSelector from './components/card-type-selector.svelte';
	let activeTab = 'data';

	let card: any = {
		title: 'Finta',
		basicText: '',
		immediateText: 'Cancela todos los efectos de la carta de tu oponente.',
		duringText: '',
		afterText: '',
		value: 3,
		boost: 1,
		characterName: 'CUALQUIERA',
		quantity: 3,
		imageUrl: '',
		deckName: 'Bigfoot',
		type: 'attack'
	};

	const downloadImage = (e: Event) => {
		e.preventDefault();

		const downloadableImg = document.getElementById('downloabable-image');

		if (domtoimage && downloadableImg) {
			domtoimage.toPng(downloadableImg).then((dataUrl: string) => {
				const link = document.createElement('a');
				link.download = `${card.deckName}.png`;
				link.href = dataUrl;
				document.body.appendChild(link);
				link.click();
				link.remove();
			});
		}
	};

	async function changeImage(e: Event) {
		const imageURL = (e.target as HTMLInputElement).value;
		const blob = await ImageHttpService.get(imageURL);
		card.imageUrl = URL.createObjectURL(blob);
	}
</script>

<div class="flex column gap">
	<div
		class="flex center astart gap flex-responsive-reverse flex-responsive-align-center"
		data-active-tab={activeTab}
	>
		<Boxed title="Datos de carta">
			<form class="flex center astart column gap-smaller responsive">
				<CardTypeSelector bind:type={card.type} />
				<!-- <Select label="Tipo de carta" name="card_type" bind:value={card.type}>
						<option value="attack">Ataque</option>
						<option value="defence">Defensa</option>
						<option value="versatile">Versátil</option>
						<option value="scheme">rayito</option>
					</Select> -->
				<div class="w1 flex between aend gap">
					<Input label="Nombre del mazo" name="deck_name" bind:value={card.deckName} />
					<Input label="Título de carta" name="card_title" bind:value={card.title} />
				</div>
				<div class="w1 flex between aend gap">
					<Input label="Personaje" name="character" bind:value={card.characterName} />
					<Input type="number" label="Cantidad" name="qty" bind:value={card.quantity} />
				</div>
				<div class="w1 flex between aend gap">
					<Input type="number" label="Valor Potenciador" name="boost" bind:value={card.boost} />
					<Input type="number" label="Valor de carta" name="value" bind:value={card.value} />
				</div>

				<div class="w1 form-item">
					<div class="w1 flex between aend gap" style="margin-top: 5px;">
						<Input
							type="url"
							name="image"
							onchange={changeImage}
							label="Imagen de carta"
							bind:value={card.imageUrl}
						/>

						<div class="w1">
							<ButtonFile bind:image={card.imageUrl} label="Subir carta" />
						</div>
					</div>
				</div>
			</form>
		</Boxed>
		<div id="unmatched-translate-card">
			<div id="downloabable-image">
				<CardMakerCard {card} />
			</div>
			<div class="flex center acenter" style="margin-top: 10px">
				<ButtonFill label="Descargar carta" click={downloadImage} />
			</div>
		</div>
	</div>

	<div class="flex center astart gap flex-responsive responsive-margin-top">
		<Boxed title="Efectos">
			<form class="flex center astart column gap-smaller">
				<div class="w1 flex between aend gap">
					<Textarea label="De inmediato" name="inmediate" bind:value={card.immediateText} />
					<Textarea label="Durante el combate" name="during" bind:value={card.duringText} />
				</div>
				<div class="w1 flex between aend gap">
					<Textarea label="Después del combate" name="after" bind:value={card.afterText} />
					<Textarea label="Rayito" name="rayito" bind:value={card.basicText} />
				</div>
			</form>
		</Boxed>

		<!-- <Boxed title="Posicionamiento">
			<form class="flex center astart column gap-small">
				<div class="w1 flex between aend gap">
					<Input type="number" label="Altura de nombre de personaje" value={0} name="position" />

					<Input
						type="number"
						label="Posición vertical de nombre de personaje"
						name="character_inner_height"
						value={0}
					/>
				</div>

				<div class="w1 flex between aend gap">
					<Input
						type="number"
						label="Posicion horizontal de barra de personaje"
						name="horizontal_left_character"
						value={0}
						min={0}
					/>

					<Input
						type="number"
						label="Anchura horizontal de espacio para efectos de carta"
						name="effect_space_width"
						value={0}
					/>

					<InputNumberControls
						label="Posicion izquierda de efectos de carta"
						name="effect_space_width"
						value={0}
					/>
				</div>
			</form>
		</Boxed> -->
	</div>
</div>

<!-- <div class="flex start acenter gap down">
	<div class="flex start acenter column gap-smaller">
		<input type="text" bind:value={card.title} placeholder="Titulo" />
		<input type="text" bind:value={card.basicText} placeholder="Texto carta" />
		<input type="text" bind:value={card.immediateText} placeholder="Texto de inmediato" />
		<input type="text" bind:value={card.duringText} placeholder="Texto durante el combate" />
		<input type="text" bind:value={card.afterText} placeholder="Texto después del combate" />
		<input type="number" bind:value={card.value} placeholder="5" />
		<input type="number" bind:value={card.boost} placeholder="8" />
		<input type="quantity" bind:value={card.quantity} placeholder="2" />
		<input type="text" bind:value={card.characterName} placeholder="CUALQUIERA" />
		<input type="text" bind:value={card.imageUrl} placeholder="Imagen de carta" />
		<input type="text" bind:value={card.deckName} placeholder="MAZO" />
	</div>
</div>
<a class="down button btn fill download" on:click={downloadImage} href="#s"> Descargar imagen </a> -->
