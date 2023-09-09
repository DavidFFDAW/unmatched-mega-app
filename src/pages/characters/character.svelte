<script lang="ts">
	import ButtonFile from '@components/buttons/button-file.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import Input from '@components/forms/input.svelte';
	import Switch from '@components/forms/switch.svelte';
</script>

<div class="flex center acenter gap flex-responsive-reverse">
	<div class="w1 box p">
		<h3 class="title">Datos</h3>
		<form class="flex center astart column gap-smaller">
			<Input label="Nombre del mazo" name="deck_name" value={''} />
			<Input label="Título de carta" name="card_title" value="" />
			<Input label="Personaje" name="character" value="" />
			<Input type="number" label="Cantidad" name="qty" value="" />

			<div class="w1 form-item">
				<span class="label">Imagen</span>
				<div style="margin-top: 5px;">
					<!-- <ButtonFile bind:image={$cardData.image} /> -->
				</div>
			</div>
		</form>
	</div>
	<div id="unmatched-translate-card">
		<div id="unmatchedTranslateCard">
			<!-- <TranslateCard bind:cardData={$cardData} /> -->
		</div>
		<div class="flex center acenter">
			<!-- <ButtonFill label="Descargar carta" click={functions.downloadCard} /> -->
		</div>
	</div>
</div>

<style>
	@media only screen and (max-width: 768px) {
		.flex-responsive-reverse {
			flex-direction: column-reverse;
		}
	}
</style>
