<script lang="ts">
	import ButtonFile from '@components/buttons/button-file.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import Input from '@components/forms/input.svelte';
	import Switch from '@components/forms/switch.svelte';
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
				<div class="flex between acenter" style="margin-top: 5px;">
					<ButtonFile bind:image={$cardData.image} label="Subir carta" />
					<ButtonFile bind:image={$cardData.backgroundIcon} label="Icono de fondo de texto" />
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
		<form class="flex center astart column gap-small">
			<div class="w1 flex between aend gap">
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
			
			<div class="w1 flex between aend gap">
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
			</div>
		</form>
	</div>
</div>

<div class="down box p">
	<h3 class="title">Templates de cartas</h3>
	<form class="template-cards-list flex start acenter gap-smaller flex-responsive">
		<ButtonFill label="Finta" click={functions.setFeintTemplate} />
		<ButtonFill label="Escaramuza" click={functions.setSkirmishTemplate} />
		<ButtonFill label="Regroup" click={functions.setRegroupTemplate} />
		<ButtonFill label="Giro trascendental" click={functions.setMomentousShiftTemplate} />
		<ButtonFill label="A bocajarro" click={functions.setABocajarroTemplate} />
		<ButtonFill label="Contrincante hábil" click={functions.setWillyFightingTemplate} />
		<ButtonFill label="Curtido en la batalla" click={functions.setBattleHardenedTemplate} />
	</form>
</div>

<style>
	@media only screen and (max-width: 768px) {
		.template-cards-list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			place-items: stretch;
			gap: 10px;
		}
		.flex-responsive-reverse {
			flex-direction: column-reverse;
		}
	}
</style>
