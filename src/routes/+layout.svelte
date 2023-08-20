<script>
	import '../typographies.css';
	import 'animate.css';
	import '../globals.css';
	import Navigation from '../components/navigation.svelte';
</script>

<main>
	<Navigation />
	<div class="main-app-layout">
		<slot />
	</div>
</main>

<style>
	.main-app-layout {
		padding: 15px 16px;
	}
</style>
