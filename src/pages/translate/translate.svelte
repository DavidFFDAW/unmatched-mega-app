<script lang="ts">
	import ButtonFile from '../../components/buttons/button-file.svelte';
	import ButtonFill from '../../components/buttons/button-fill.svelte';
	import Input from '../../components/forms/input.svelte';
	import Switch from '../../components/forms/switch.svelte';
	import TranslateCard from './components/translate-card.svelte';
	import { cardData, functions } from './hooks/useTranslateCard';
</script>

<div class="flex center acenter gap flex-responsive-reverse">
	<div class="w1 box p">
		<h3 class="title">Datos</h3>
		<form class="flex center astart column gap-smaller">
			<Input label="Nombre del mazo" name="deck_name" bind:value={$cardData.name} />
			<Input label="Título de carta" name="card_title" bind:value={$cardData.title} />
			<Input label="Personaje" name="character" bind:value={$cardData.character} />
			<Input type="number" label="Cantidad" name="qty" bind:value={$cardData.qty} />

			<div class="w1 form-item">
				<span class="label">Imagen</span>
				<div style="margin-top: 5px;">
					<ButtonFile bind:image={$cardData.image} />
				</div>
			</div>
		</form>
	</div>
	<div id="unmatched-translate-card">
		<div id="unmatchedTranslateCard">
			<TranslateCard bind:cardData={$cardData} />
		</div>
		<div class="flex center acenter">
			<ButtonFill label="Descargar carta" click={functions.downloadCard} />
		</div>
	</div>
</div>

<div class="flex center astart gap down flex-responsive">
	<div class="w1 box p">
		<h3 class="title">Efectos</h3>
		<form class="flex center astart column gap-smaller">
			<Input label="Efecto inmediato" name="inmediate" bind:value={$cardData.inmediate} />
			<Input label="Efecto durante el combate" name="during" bind:value={$cardData.during} />
			<Input label="Efecto después del combate" name="after" bind:value={$cardData.after} />
			<Input label="Rayito" name="rayito" bind:value={$cardData.rayito} />
		</form>
	</div>
	<div class="w1 box p">
		<h3 class="title">Posicionamiento</h3>
		<form class="flex center astart column gap-smaller">
			<Switch label="Línea" name="line" bind:value={$cardData.line} />
			<Input
				type="number"
				label="Posición"
				name="position"
				bind:value={$cardData.characterHeight}
				onchange={functions.setCharacterHeight}
			/>
			<Input
				type="number"
				label="Posición de nombre de personaje"
				name="character_inner_height"
				bind:value={$cardData.characterNameHeight}
				onchange={functions.setCharacterNameHeight}
			/>
			<Input
				type="number"
				label="Altura de efectos"
				name="effects_height"
				min={113}
				bind:value={$cardData.effectsHeight}
				onchange={functions.setEffectHeight}
			/>
		</form>
	</div>
</div>

<div class="down box p">
	<h3 class="title">Templates de cartas</h3>
	<form class="flex start acenter gap-smaller">
		<ButtonFill label="Finta" click={functions.setFeintTemplate} />
		<ButtonFill label="Escaramuza" click={functions.setSkirmishTemplate} />
		<ButtonFill label="Regroup" click={functions.setRegroupTemplate} />
		<ButtonFill label="Momentous Shift" click={functions.setMomentousShiftTemplate} />
	</form>
</div>

<style>
	@media only screen and (max-width: 768px) {
		.flex-responsive-reverse {
			flex-direction: column-reverse;
		}
	}
</style>
