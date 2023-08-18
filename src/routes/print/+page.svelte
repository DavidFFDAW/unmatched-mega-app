<script lang="ts">
	import CardContainer from '../../components/card-container.svelte';
	import Card from '../../components/cards/card.svelte';
	import usePrint from './usePrint';
	let cardBack: string | null;

	const dropCardBack = (e: DragEvent) => {
		e.preventDefault();
		if (e.dataTransfer) {
			const firstFile = [...e.dataTransfer?.files][0];
			cardBack = URL.createObjectURL(firstFile);
		}
	};

	const onCardBackChange = (ev: any) => {
		const { target } = ev;
		if (target && target?.files[0]) {
			cardBack = URL.createObjectURL(target.files[0]);
		}
	};

	const { cards, functions } = usePrint();
</script>

<h1>Impresion de cartas</h1>

<div>
	<label for="">Indica tu carta de atras aqui</label>
	<div class="background card" style="background-image: url('{cardBack}');">
		<input
			class="input-card-back"
			type="file"
			name="card-back"
			on:dragover={functions.dragover}
			on:drop={dropCardBack}
			on:change={onCardBackChange}
		/>
	</div>
</div>

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
	<button type="button" class="btn fill button" on:click={() => functions.createPDF(cardBack)}
		>Generar PDF</button
	>
</div>

<style>
	.background {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
	.card {
		width: 63mm;
		height: 88mm;
		background-color: #eee;
		position: relative;
		border-radius: 10px;
	}

	.input-card-back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}

	.dropzone {
		/* margin-top: 150px; */
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
