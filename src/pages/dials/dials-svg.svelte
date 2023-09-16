<script lang="ts">
	export let id: string;
	export let size: number = 220;
	export let imageSrc: string = '';
	export let rotation: number = 0;
	export let preview: boolean = false;
	let viewBox = {
		width: 81.697861,
		height: 81.172821
	};
</script>

<div
	{id}
	{...$$restProps}
	class="svg-container"
	class:preview
	style="width: {size}px; height: {size}px"
>
	<svg
		style="transform: rotate({rotation}deg);"
		preserveAspectRatio="none"
		width="{size}px"
		height="{size}px"
		viewBox="0 0 {viewBox.width} {viewBox.height}"
		version="1.1"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
	>
		<sodipodi:namedview
			id="namedview7"
			pagecolor="#505050"
			bordercolor="#ffffff"
			borderopacity="1"
			showpageshadow="0"
			pageopacity="0"
			pagecheckerboard="1"
			deskcolor="#505050"
			document-units="mm"
			showgrid="false"
		/>
		<pattern id="img1" patternUnits="" width={'100%'} height={'100%'}>
			<image
				xlink:href={imageSrc}
				x="0"
				y="0"
				width="100%"
				height="100%"
				cx="40.848923"
				cy="40.56649"
				r="40.848923"
				preserveAspectRatio="xMinYMin slice"
			/>
		</pattern>
		<!-- <clipPath id="circleImageClip">
		<circle cx="40.848923" cy="40.56649" r="40.848923" />
	</clipPath> -->

		{#if imageSrc}
			<path
				transform="translate(-41.682729,-102.74722)"
				style="fill-opacity:1;stroke-width:0;paint-order:stroke fill markers;"
				d="m 82.458533,102.74722 a 40.898144,41.39996 0 0 0 -6.371188,0.54467 l -5.16e-4,0.0155 a 40.848923,40.56649 0 0 1 6.444567,-0.52038 40.848923,40.56649 0 0 1 6.815605,0.58963 v -0.0279 a 40.898144,41.39996 0 0 0 -6.888468,-0.60151 z m 6.888468,0.62942 -0.05891,12.43386 -6.989754,3.12023 -6.523633,-3.7636 -0.06046,-0.45682 0.372587,-11.40292 a 40.848923,40.56649 0 0 0 -34.404102,40.04613 40.848923,40.56649 0 0 0 40.848669,40.56652 40.848923,40.56649 0 0 0 40.849182,-40.56652 40.848923,40.56649 0 0 0 -34.033577,-39.97688 z"
				fill="url(#img1)"
			/>
		{:else}
			<path
				transform="translate(-41.682729,-102.74722)"
				style="fill: rgba(41,41,41); fill-opacity:1;stroke-width:0;paint-order:stroke fill markers;"
				d="m 82.458533,102.74722 a 40.898144,41.39996 0 0 0 -6.371188,0.54467 l -5.16e-4,0.0155 a 40.848923,40.56649 0 0 1 6.444567,-0.52038 40.848923,40.56649 0 0 1 6.815605,0.58963 v -0.0279 a 40.898144,41.39996 0 0 0 -6.888468,-0.60151 z m 6.888468,0.62942 -0.05891,12.43386 -6.989754,3.12023 -6.523633,-3.7636 -0.06046,-0.45682 0.372587,-11.40292 a 40.848923,40.56649 0 0 0 -34.404102,40.04613 40.848923,40.56649 0 0 0 40.848669,40.56652 40.848923,40.56649 0 0 0 40.849182,-40.56652 40.848923,40.56649 0 0 0 -34.033577,-39.97688 z"
			/>
		{/if}
	</svg>
</div>

<style>
	.svg-container.preview {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
