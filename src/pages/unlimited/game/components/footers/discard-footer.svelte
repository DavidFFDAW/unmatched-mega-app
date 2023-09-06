<script lang="ts">
	export let visible: boolean = false;
	import FooterItem from './footer-item.svelte';
	import Footer from './footer.svelte';
	import { deckFunctions } from '../../hooks/useDeck';

	const setVisible = () => (visible = !visible);
</script>

<Footer bind:visible>
	<div class="unlimited-footer-content">
		<ul>
			<!-- <FooterItem
				title={'Barajar las cartas'}
				description={'Baraja las cartas del mazo de descartes'}
				click={}
				afterClick={setVisible}
			/> -->
			<FooterItem
				title={'Recuperar una carta de los descartes'}
				description={'Recuperar una carta aleatoria de entre las que se encuentran en el mazo de descarte'}
				click={deckFunctions.retrieveRandomDiscardCard}
				afterClick={setVisible}
			/>
		</ul>
	</div>
</Footer>
