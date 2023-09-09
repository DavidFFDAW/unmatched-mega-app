<script lang="ts">
	import domtoimage from 'dom-to-image';
	import UnmatchedRealCard from '@components/unmatched-real-card.svelte';
	import HeroCard from '@components/hero-card/hero-card.svelte';
	let card: any = {
		title: '',
		basicText: '',
		immediateText: '',
		duringText: '',
		afterText: '',
		value: 0,
		boost: 0,
		characterName: 'CUALQUIERA',
		quantity: 2,
		imageUrl: '',
		deckName: ''
	};

	const downloadImage = (e: Event) => {
		e.preventDefault();

		const downloadableImg = document.getElementById('downloabable-image');

		if (domtoimage && downloadableImg) {
			domtoimage.toPng(downloadableImg).then((dataUrl: string) => {
				console.log(dataUrl);
				const link = document.createElement('a');
				link.download = `${card.deckName}.png`;
				link.href = dataUrl;
				document.body.appendChild(link);
				link.click();
				link.remove();
			});
		}
	};
</script>

<div class="flex start acenter gap down">
	<div class="flex start acenter column gap-smaller">
		<input type="text" bind:value={card.title} placeholder="Titulo" />
		<input type="text" bind:value={card.basicText} placeholder="Texto carta" />
		<input type="text" bind:value={card.immediateText} placeholder="Texto de inmediato" />
		<input type="text" bind:value={card.duringText} placeholder="Texto durante el combate" />
		<input type="text" bind:value={card.afterText} placeholder="Texto después del combate" />
		<input type="number" bind:value={card.value} placeholder="5" />
		<input type="number" bind:value={card.boost} placeholder="8" />
		<input type="quantity" bind:value={card.quantity} placeholder="2" />
		<input type="text" bind:value={card.characterName} placeholder="CUALQUIERA" />
		<input type="text" bind:value={card.imageUrl} placeholder="Imagen de carta" />
		<input type="text" bind:value={card.deckName} placeholder="MAZO" />
	</div>
	<div id="downloabable-image">
		<UnmatchedRealCard {card} />
	</div>
</div>
<a class="down button btn fill download" on:click={downloadImage} href="#s"> Descargar imagen </a>
