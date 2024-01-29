<script lang="ts">
	const logo: number = 250;
	import ShapeDivider from '@components/shape-divider.svelte';
	import Image from '@components/image.svelte';
	import Box from '@components/box.svelte';
	import { navigation } from '@src/constants';
</script>

<div class="landing-page">
	<ShapeDivider height={450}>
		<div class="flex center pdown acenter column animate__animated animate__fadeInDown">
			<Image src="/images/unm.logo.webp" width={logo + 5} height={logo} />
			<h1 class="bebas upper" style="color: #FFF;">La mega aplicación</h1>
		</div>
		<div class="flex center acenter linkscontainer">
			<div class="grid-links gap spdown pad animate__animated animate__fadeInUp animate__fast">
				{#each navigation as link}
					<a href={link.href} class="link">
						<Box>
							<div class="flex center image-container acenter column">
								<Image src={link.image} className={`landing-link-image ${link.class}`} />
								<h2 class="down narrow">{link.text}</h2>
							</div>
						</Box>
					</a>
				{/each}
				<a href={'/downloads'} class="link">
					<Box>
						<div class="flex center image-container acenter column download">
							<Image src={'/images/downloads.icon.webp'} className="landing-link-image downloads" />
							<h2 class="narrow">Descargas</h2>
						</div>
					</Box>
				</a>

				<a href={'/tuckbox'} class="link">
					<Box>
						<div class="flex center image-container acenter column tuckboxes">
							<Image src={'/images/tuckbox.icon.webp'} className="landing-link-image tuckboxes" />
							<h2 class="narrow">Tuckboxes</h2>
						</div>
					</Box>
				</a>

				<a href={'/settings'} class="link">
					<Box>
						<div class="flex center image-container acenter column">
							<Image src={'/images/settings.svg'} className="landing-link-image settings" />
							<h2 class="down narrow">Ajustes</h2>
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
