<script lang="ts">
	export let size: number = 30;
	export let color: string = '#282a36';
	export let altColor: string = '#282a36';
</script>

<div class="spinner-position">
	<div
		class="spinner"
		style="width: {size}px; height: {size}px; border-color: {altColor}; border-top-color: {color};"
	/>
</div>

<style>
	.spinner-position {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.spinner {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 15px solid #c1c1c1;
		border-top-color: #282a36;
		animation: rotate 1.2s linear infinite;
		z-index: 2;
	}
	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
