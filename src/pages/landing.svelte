<script lang="ts">
	const logo: number = 250;
	import ShapeDivider from '../components/shape-divider.svelte';
	import Image from '../components/image.svelte';
	import Box from '../components/box.svelte';
</script>

<div class="landing-page">
	<ShapeDivider height={450}>
		<div class="flex center pdown acenter column animate__animated animate__fadeInDown">
			<Image src="/unm.logo.webp" width={logo + 5} height={logo} />
			<h1 class="bebas upper" style="color: #FFF;">La mega aplicación</h1>
		</div>
		<div class="flex center acenter linkscontainer">
			<div class="grid-links gap spdown pad animate__animated animate__fadeInUp animate__fast">
				<a href="/translate" class="link">
					<Box>
						<div class="flex center image-container acenter column">
							<Image src={'/cards-icon.webp'} className="landing-link-image cards" />
							<h2 class="down narrow">Traducir cartas</h2>
						</div>
					</Box>
				</a>
				<a href="/dials" class="link">
					<Box>
						<div class="flex center image-container acenter column">
							<Image src={'/dial.png'} className="landing-link-image dials" />
							<h2 class="down narrow">Crear diales</h2>
						</div>
					</Box>
				</a>
				<a href="/print" class="link">
					<Box>
						<div class="flex center image-container acenter column">
							<Image src={'/printer.webp'} className="landing-link-image printer" />
							<h2 class="down narrow">Imprimir mazo</h2>
						</div>
					</Box>
				</a>
				<a href="/card-back" class="link">
					<Box>
						<div class="flex center image-container acenter column">
							<Image src={'/card-back-icon.webp'} className="landing-link-image card-back" />
							<h2 class="down narrow">Diseñar parte de atras</h2>
						</div>
					</Box>
				</a>
				<a href="/unlimited-decks" class="link">
					<Box>
						<div class="flex center image-container acenter column">
							<Image src={'/unlimited.png'} className="landing-link-image unlimited" />
							<h2 class="down narrow">UNlimited Decks</h2>
						</div>
					</Box>
				</a>
			</div>
		</div>
	</ShapeDivider>
</div>

<style>
	.linkscontainer {
		padding-bottom: 35px;
	}
	.grid-links {
		display: grid;
		grid-template-columns: repeat(3, 0fr);
		place-items: center;
		gap: 60px 30px;
	}

	.image-container {
		position: relative;
		top: -55px;
	}
	.spdown {
		margin-top: 150px;
	}

	@media only screen and (max-width: 768px) {
		.grid-links {
			grid-template-columns: repeat(1, 0fr);
		}
	}
</style>
