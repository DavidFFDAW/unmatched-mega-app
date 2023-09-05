<script>
	import '@src/typographies.css';
	import 'animate.css';
	import '@src/globals.css';
	import Navigation from '@components/navigation.svelte';
</script>

<main>
	<Navigation />
	<div class="main-app-layout">
		<slot />
	</div>
</main>

<style>
	.main-app-layout {
		padding: 15px 16px 60px 16px;
	}
</style>
