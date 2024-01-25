<script lang="ts">
	import ButtonFile from '@components/buttons/button-file.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import Input from '@components/forms/input.svelte';
	import Switch from '@components/forms/switch.svelte';
	import TranslateCard from './components/translate-card.svelte';
	import { cardData, functions } from './hooks/useTranslateCard';
	import InputNumberControls from '@components/forms/input-number-controls.svelte';
	import ColorPicker from '@components/colorpicker/color-picker.svelte';
	import Textarea from '@components/forms/textarea.svelte';
	import TemplateCards from './components/template-cards.svelte';
</script>

<div class="flex center acenter gap flex-responsive-reverse">
	<div class="w1 box p">
		<h3 class="title">Datos</h3>
		<form class="flex center astart column gap-smaller">
			<div class="w1 flex start aend gap-small flex-responsive">
				<Input label="Nombre del mazo" name="deck_name" bind:value={$cardData.name} />
				<Input label="Título de carta" name="card_title" bind:value={$cardData.title} />
			</div>

			<div class="w1 flex start aend gap-small flex-responsive">
				<Input label="Personaje" name="character" bind:value={$cardData.character} />
				<Input type="number" label="Cantidad" name="qty" bind:value={$cardData.qty} />
			</div>

			<ColorPicker
				label="Color de fondo de efectos"
				name="background_color"
				bind:value={$cardData.effectsSpaceColor}
			/>

			<div class="w1 form-item">
				<span class="label">Imagen</span>
				<div
					class="w1 flex between astart gap-small flex-responsive-column"
					style="margin-top: 5px;"
				>
					<ButtonFile className="responsive-w1" bind:image={$cardData.image} label="Subir carta" />
					<ButtonFile
						className="responsive-w1"
						bind:image={$cardData.backgroundIcon}
						label="Icono de fondo de texto"
					/>
				</div>
			</div>
		</form>
	</div>
	<div id="unmatched-translate-card">
		<div id="unmatchedTranslateCard">
			<TranslateCard bind:cardData={$cardData} />
		</div>
		<div class="flex center acenter" style="margin-top: 5px;">
			<ButtonFill label="Descargar carta" click={functions.downloadCard} />
		</div>
	</div>
</div>

<div class="flex center astart gap down flex-responsive">
	<div class="w1 box p">
		<div class="w1 flex between acenter">
			<h3 class="title">Efectos</h3>
			<ButtonFill label="Borrar efectos" click={functions.emptyEffects} />
		</div>
		<form class="flex center astart column gap-smaller">
			<Textarea label="Efecto inmediato" name="inmediate" bind:value={$cardData.inmediate} />
			<Textarea label="Efecto durante el combate" name="during" bind:value={$cardData.during} />
			<Textarea label="Efecto después del combate" name="after" bind:value={$cardData.after} />
			<Textarea label="Rayito" name="rayito" bind:value={$cardData.rayito} />
		</form>
	</div>

	<div class="w1 flex column astart gap">
		<div class="w1 box p">
			<h3 class="title">Posicionamiento</h3>
			<form class="flex center astart column gap-small">
				<div class="w1 flex between aend gap flex-responsive-column responsive-gap-small">
					<Input
						type="number"
						label="Altura de nombre de personaje"
						name="position"
						bind:value={$cardData.characterHeight}
						onchange={functions.setCharacterHeight}
					/>

					<Input
						type="number"
						label="Posición vertical de nombre de personaje"
						name="character_inner_height"
						bind:value={$cardData.characterNameHeight}
						onchange={functions.setCharacterNameHeight}
					/>
				</div>

				<div class="w1 flex start aend gap">
					<Switch total={false} label="Línea" name="line" bind:value={$cardData.line} />

					<Input
						type="number"
						label="Altura de efectos"
						name="effects_height"
						min={113}
						bind:value={$cardData.effectsHeight}
						onchange={functions.setEffectHeight}
					/>
				</div>

				<div class="w1 flex between aend gap flex-responsive-column responsive-gap-small">
					<Input
						type="number"
						label="Posicion horizontal de barra de personaje"
						name="horizontal_left_character"
						min={0}
						bind:value={$cardData.horizontalLeftCharacter}
						onchange={functions.setHorizontalLeftCharacter}
					/>

					<Input
						type="number"
						label="Anchura horizontal de espacio para efectos de carta"
						name="effect_space_width"
						bind:value={$cardData.effectSpaceWidth}
						onchange={functions.setEffectSpaceWidth}
					/>

					<InputNumberControls
						label="Posicion izquierda de efectos de carta"
						name="effect_space_width"
						bind:value={$cardData.effectSpaceLeft}
					/>
				</div>
			</form>
		</div>

		<TemplateCards functions={functions} />
	</div>
</div>

<style scoped>
	@media only screen and (max-width: 768px) {
		.flex-responsive-reverse {
			flex-direction: column-reverse;
		}
	}
</style>