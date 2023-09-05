<script lang="ts">
	import CardContainer from '@components/card-container.svelte';
	import Card from '@components/cards/card.svelte';
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

<h1>Impresion de mazos</h1>

<div>
	<label for="" class="tcenter">Indica tu carta de atras aqui</label>
	<div class="w1 down flex center acenter gap-small flex-responsive">
		<div
			class="background card"
			style="background-image: url('{cardBack}');"
			class:thereiscard={Boolean(cardBack)}
		>
			<p class="card-back-text bebas tcenter">Sube la parte de atrás de la carta aquí</p>
			<input
				accept="image/*"
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
		class="box dropzone flex center acenter down"
		role="presentation"
		on:dragover={functions.dragover}
		on:drop={functions.drop}
	>
		<input
			class="input-card-back"
			type="file"
			multiple
			accept="image/*"
			on:change={functions.change}
		/>
		{#if $cards.length <= 0}<p>Selecciona o arrastra tus cartas aquí</p>{/if}
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

	<div class="flex between acenter down">
		<button type="button" class="btn fill button" on:click={functions.emptyCards}
			>Borrar cartas</button
		>
		<button type="button" class="btn fill button" on:click={() => functions.createPDF(cardBack)}
			>Generar PDF</button
		>
	</div>
</div>

<style>
	.background {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
	.background .card-back-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.background.thereiscard .card-back-text {
		display: none;
	}

	.card {
		width: 63mm;
		height: 88mm;
		background-color: #c9c9c9;
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
		min-height: 100%;
	}
</style>
