<script lang="ts">
	export let visible: boolean = false;
	import Footer from './footer.svelte';
	import FooterItem from './footer-item.svelte';
	import { writableDeck as deck, functions } from '../../hooks/useDeck2';

	const handleClick = () => {
		visible = !visible;
	};
</script>

<Footer bind:visible>
	<div class="unlimited-footer-content">
		<ul>
			<FooterItem
				title={'Seleccionar una carta aleatoria'}
				description={'Seleccionar una carta aleatoria de entre las de tu mano ya sea para descartarla o por otro motivo'}
				click={() => functions.selectRandomHandCard($deck)}
				afterClick={handleClick}
			/>

			<FooterItem
				title={'Descartar la mano entera'}
				description={'Descartar toda las cartas de la mano y las añade al mazo de descartes'}
				click={() => functions.discardHand()}
				afterClick={handleClick}
			/>
		</ul>
	</div>
</Footer>
