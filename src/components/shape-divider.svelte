<script lang="ts">
	export let height: number = 480;
</script>

<div class="divider" style={`height: ${height}px`}>
	<div class="custom-shape-divider-bottom-1691841981">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>
	<slot />
</div>

<style>
	.divider {
		top: 0;
		left: 0;
		width: 100%;
		position: absolute;
		height: 480px;
		background-color: #3e3e3e;
background-image: url(https://styles.redditmedia.com/t5_zgi3t/styles/bannerBackgroundImage_qf8gr7pm6hkb1.png?width=4000&s=bc239a166278312505a0fed50ac3beaa3b44b50f);
    background-size: cover;
    background-clip: border-box;
    background-origin: border-box;
    background-position: center;
    background-repeat: no-repeat;
    backface-visibility: visible;
		z-index: 0;
	}
	.custom-shape-divider-bottom-1691841981 {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.custom-shape-divider-bottom-1691841981 svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 155px;
		transform: rotateY(180deg);
	}

	.custom-shape-divider-bottom-1691841981 .shape-fill {
		fill: #ffffff;
	}
</style>
