<script>
	import '@src/typographies.css';
	import 'animate.css';
	import '@src/globals.css';
	import Navigation from '@components/navigation.svelte';
	import { page } from '$app/stores';
</script>

<main class="app-main">
	<Navigation />
	<div class="main-app-layout">
		<slot />
	</div>
</main>
{#if $page.route.id !== '/'}
	<footer class="app-main-footer flex center acenter gap-medium">
		<div>
			@Copyright 2023 <a target="_blank" href="https://github.com/DavidFFDAW"
				>David Fernández Flores</a
			>
		</div>
		<div>Powered by <a target="_blank" href="https://svelte.dev">Svelte</a></div>
		<div><a href="/privacy">Política de privacidad</a></div>
		<div><a href="/terms">Términos y condiciones</a></div>
	</footer>
{/if}

<style>
	.app-main {
		min-height: 97vh;
	}
	.main-app-layout {
		padding: 15px 16px 60px 16px;
	}
	.app-main-footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #282a36;
		color: #fff;
		padding: 10px 0;
		z-index: 100;
	}
	.app-main-footer a {
		color: #9e9e9e;
	}
</style>
