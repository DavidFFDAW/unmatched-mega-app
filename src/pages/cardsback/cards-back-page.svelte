<script lang="ts">
	import ButtonFile from '@components/buttons/button-file.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import CardBack from '@components/cards/card-back.svelte';
	import ColorPicker from '@components/colorpicker/color-picker.svelte';
	import UnmatchedLogoSvg from './components/unmatched-logo-svg.svelte';
	import { downloadID, downloadImage, cardBackState } from './hooks/useCardBack';
</script>

<div class="flex start gap astart flex-responsive">
	<div>
		<div class="flex center acenter" id={downloadID}>
			<CardBack src={$cardBackState.image}>
				<UnmatchedLogoSvg
					bind:lettersColor={$cardBackState.letters}
					bind:backgroundColor={$cardBackState.background}
				/>
				<div class="internal-border-line" style={`border-color: ${$cardBackState.border}`} />
				<div class="flex end internal-text league upper" style={`color: ${$cardBackState.border}`}>
					{$cardBackState.deck}
				</div>
			</CardBack>
		</div>

		<div class="w1 form-item down">
			<ButtonFile bind:image={$cardBackState.image} />
		</div>
	</div>

	<div class="w1 box p">
		<h3 class="title">Parte trasera</h3>
		<form class="flex center astart column gap">
			<div class="w1 form-item">
				<label for="">Nombre del mazo</label>
				<input type="text" name="deck-name" bind:value={$cardBackState.deck} />
			</div>

			<div class="w1 form-item">
				<label for="">Color del borde de la carta</label>
				<input type="color" name="border-color" bind:value={$cardBackState.border} />
			</div>

			<div class="w1 form-item">
				<label for="">Unmatched logo color de letras</label>
				<input type="color" name="letters-color" bind:value={$cardBackState.letters} />
			</div>

			<ColorPicker />

			<div class="w1 form-item">
				<label for="">Unmatched logo color de fondo</label>
				<input type="color" name="bg-color" bind:value={$cardBackState.background} />
			</div>

			<div class="w1 flex end">
				<ButtonFill label="Descargar" click={downloadImage} />
			</div>
		</form>
	</div>
</div>

<style>
	.internal-border-line {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 88%;
		height: 90%;
		background: transparent;
		transform: translate(-50%, -50%);
		border-width: 3px;
		border-style: solid;
		border-radius: 8px;
	}
	.internal-text {
		padding: 0 22px;
		padding-top: 77.5mm;
	}
</style>
