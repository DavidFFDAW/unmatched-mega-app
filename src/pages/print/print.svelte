<script lang="ts">
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
	<p>Total de cartas <span>{$cards.length}</span></p>
	<div class="w1 down flex start astart gap-smaller flex-responsive wrap cards-container">
		<div
			class="background card"
			style="background-image: url('{cardBack}'); width: 63mm; height: 88mm;"
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

		{#if $cards.length > 0}
			{#each $cards as card, index}
				<div class="flex column acenter">
					<div class="card custom-printable-card relative" data-index={index}>
						<div class="overlay">
							<div class="flex column aend">
								<button
									data-index={index}
									type="button"
									class="btn button"
									on:click={() => functions.removeCardByIndex(index)}
								>
									&times;
								</button>
								<button
									class="btn button"
									type="button"
									on:click={() => functions.addCardEqualToCard(card, index)}
								>
									+
								</button>
							</div>
						</div>

						<Card src={card.url} />
					</div>
				</div>
			{/each}
		{/if}

		<div class="unmatched-card card card-add-card">
			<input
				type="file"
				class="file"
				multiple
				accept="image/*"
				on:change={functions.change}
				on:dragover={functions.dragover}
				on:drop={functions.drop}
			/>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="plus-circle"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="svg-inline--fa fa-plus-circle fa-w-16"
				><path
					fill="#adadad"
					d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
					class=""
				/></svg
			>
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
	/* .cards-container .card:nth-child(2) {
		margin-left: 50px;
	} */
	.card-add-card {
		background-color: #c9c9c9;
		border-radius: 10px;
		width: 63mm;
		height: 88mm;
		position: relative;
		cursor: pointer;
	}
	.card-add-card .svg-inline--fa.fa-plus-circle.fa-w-16 {
		position: absolute;
		display: block;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		z-index: 5;
	}

	.custom-printable-card {
		position: relative;
	}
	.custom-printable-card .overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.custom-printable-card .overlay .button {
		/* position: absolute;
		top: 0;
		right: 0; */
		padding: 5px 15px;
		border-radius: 0;
		border: none;
		outline: none;
		background-color: #030303;
		color: #fff;
		z-index: 10;
	}
	.custom-printable-card:hover .overlay {
		display: block;
	}

	.unmatched-card.card-add-card .file {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
		opacity: 0;
		z-index: 6;
	}
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
</style>
