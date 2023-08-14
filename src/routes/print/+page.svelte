<script lang="ts">
	import CardContainer from '../../components/card-container.svelte';
	import Card from '../../components/cards/card.svelte';
	import usePrint from './usePrint';

	const { cards, functions } = usePrint();
</script>

<h1>Impresion de cartas</h1>

<div
	class="box dropzone flex center acenter"
	role="presentation"
	on:dragover={functions.dragover}
	on:drop={functions.drop}
>
	{#if $cards.length <= 0}<p>Arrastra tus cartas aquí</p>{/if}
	<div id="grid">
		<CardContainer>
			{#if $cards.length > 0}
				{#each $cards as card}
					<Card src={card.url} />
				{/each}
			{/if}
		</CardContainer>
	</div>
</div>
<div class="flex between acenter fixed buttons">
	<button type="button" class="btn fill button" on:click={functions.emptyCards}
		>Borrar cartas</button
	>
	<button type="button" class="btn fill button" on:click={functions.createPDF}>Generar PDF</button>
</div>

<style>
	.dropzone {
		margin-top: 150px;
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 250px;
	}
	.buttons.fixed {
		width: 100%;
		left: 0;
		padding: 10px;
		z-index: 10;
	}
</style>
