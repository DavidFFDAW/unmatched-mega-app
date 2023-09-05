<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from '@components/navigation.svelte';
	import ShapeDivider from '@components/shape-divider.svelte';
	console.log({ ...$page });
</script>

<div class="container">
	{#if $page.error}
		<ShapeDivider>
			<Navigation />
			<div class="w1 down flex center">
				<div class="flex center astart column card-container gap">
					<h1 class="w1 narrow">
						{$page.status}: {$page.error.message}
					</h1>
					<div class="card">
						<img src="/images/not-found-card.png" alt="" />
					</div>
					<div class="w1 flex end">
						<!-- <button type="button" class="btn fill narrow" on:click={goBack}>Volver</button> -->
						<a href="/" type="button" class="btn fill narrow">Volver a la home</a>
					</div>
				</div>
			</div>
		</ShapeDivider>
	{/if}
</div>

<style>
	h1 {
		color: #fff;
		text-align: center;
	}
	.container {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 5;
	}
	.card {
		z-index: 10;
	}
</style>
