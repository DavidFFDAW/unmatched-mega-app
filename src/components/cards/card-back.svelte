<script lang="ts">
	export let src: string = '';
</script>

<div class="card relative" style={`background-image: url('${src}')`}>
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
