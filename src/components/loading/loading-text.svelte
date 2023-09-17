<script lang="ts">
	export let width: number | string = 200;
	export let unit: string = 'px';
</script>

<div style="width: {width}{unit};" class="loading-text" />

<style>
	.loading-text {
		height: 1em;
		background-color: #282a36;
		animation: loading-text 1.2s infinite;
	}

	@keyframes loading-text {
		0% {
			background-color: #333543;
		}
		50% {
			background-color: #656984;
		}
		100% {
			background-color: #333543;
		}
	}
</style>
