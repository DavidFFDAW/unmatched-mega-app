<script lang="ts">
	export let visible: boolean = false;
	import Footer from "./footer.svelte";
</script>

<Footer bind:visible>
	<div class="unlimited-footer-content">
		<ul>
			<li>
				<div role="presentation" class="w1 flex start astart gap">
					<div class="svg-logo"></div>
					
					<div class="text-block">
						<p class="title">Seleccionar una carta aleatoria</p>
						<p class="description">Seleccionar una carta aleatoria de entre las de tu mano ya sea para descartarla o por otro motivo</p>
					</div>
				</div>
			</li>
			<li>
				<div role="presentation" class="w1 flex start astart gap">
					<div class="svg-logo"></div>

					<div class="text-block">
						<p class="title">Descartar la mano entera</p>
						<p class="description">Descartar toda las cartas de la mano y las añade al mazo de descartes</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</Footer>

<style>
	.unlimited-footer-content {
		position: relative;
		padding: 1rem;
		z-index: 120;
	}
	.unlimited-footer-content ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.unlimited-footer-content ul li {
		margin: 1.5rem 0;
	}
	.unlimited-footer-content ul li .text-block {
		display: flex;
		flex-direction: column;
		gap: .2rem;
	}
	.unlimited-footer-content ul li .svg-logo {
		min-width: 50px;
		min-height: 50px;
		width: 50px;
		height: 50px;
		border: 1px solid #cddc39;
	}
	.unlimited-footer-content ul li .text-block .title {
		font-size: 1.2rem;
		font-weight: bold;
		color: #cddc39;
		margin: 0;
	}
	.unlimited-footer-content ul li .text-block .description {
		font-size: .9rem;
		color: #d1d1d1;
		margin: 0;
	}
	
</style>
