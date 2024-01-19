<script lang="ts">
	import ButtonFile from '@components/buttons/button-file.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import CardBack from '@components/cards/card-back.svelte';
	import UnmatchedLogoSvg from './components/unmatched-logo-svg.svelte';
	import { downloadID, downloadImage, cardBackState } from './hooks/useCardBack';
	import Input from '@components/forms/input.svelte';
	import Select from '@components/forms/select.svelte';
	import RelatedCardsPage from './related-cards-page.svelte';
</script>

<div class="flex column gap">
	<div class="flex start gap astart flex-responsive">
		<div>
			<div class="flex center acenter" id={downloadID}>
				<CardBack src={$cardBackState.image} bgPosition={$cardBackState.backgroundPosition}>
					<UnmatchedLogoSvg
						bind:lettersColor={$cardBackState.letters}
						bind:backgroundColor={$cardBackState.background}
					/>
					<div class="internal-border-line" style={`border-color: ${$cardBackState.border}`} />
					<div
						class="flex end internal-text league upper"
						style={`color: ${$cardBackState.border}`}
					>
						{$cardBackState.deck}
					</div>
				</CardBack>
			</div>

			<div class="w1 form-item down">
				<ButtonFile name="card-background-image-file" bind:image={$cardBackState.image} />
			</div>
		</div>

		<div class="w1 box p">
			<h3 class="title">Parte trasera</h3>
			<form class="flex center astart column gap">
				<Input label="Nombre del mazo" name="deck_name" bind:value={$cardBackState.deck} />
				<Input
					type="color"
					label="Color del borde de la carta"
					name="card-border-color"
					bind:value={$cardBackState.border}
				/>
				<Input
					type="color"
					label="Unmatched logo color de letras"
					name="card-letters-color"
					bind:value={$cardBackState.letters}
				/>

				<!-- <ColorPicker /> -->

				<Input
					type="color"
					label="Unmatched logo color de fondo"
					name="card-background-color"
					bind:value={$cardBackState.background}
				/>

				<Select
					label="Posición del fondo de la carta"
					name="card-type"
					bind:value={$cardBackState.backgroundPosition}
				>
					<option value="top">Hacia arriba</option>
					<option value="center">Centrada</option>
					<option value="bottom">Hacia abajo</option>
					<option value="left">Izquierda</option>
					<option value="right">Derecha</option>
				</Select>

				<div class="w1 flex end">
					<ButtonFill label="Descargar" click={downloadImage} />
				</div>
			</form>
		</div>
	</div>

	<RelatedCardsPage />
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
