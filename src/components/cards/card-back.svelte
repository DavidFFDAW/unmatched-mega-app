<script lang="ts">
	export let src: string = '';
	export let width: number = 63.5;
	export let height: number = 88;
	export let bgPosition: string = 'center';
</script>

<div
	class="card relative"
	style={`background-image: url('${src}'); background-position: ${bgPosition}; width: ${width}mm; height: ${height}mm`}
>
	<slot />
</div>

<style>
	.card {
		width: 63.5mm;
		height: 88mm;
		background-color: lightgray;
		border-radius: 5px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
