<script>
	import '../typographies.css';
	import 'animate.css';
	import '../globals.css';
</script>

<main>
	<header class="app-header">App</header>
	<div class="main-app-layout">
		<slot />
	</div>
</main>

<style>
	.app-header {
		width: 100%;
		padding: 10px;
		position: static;
		top: 0;
		left: 0;
		display: block;
		background: #333;
	}
</style>
