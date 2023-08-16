<script>
	import '../typographies.css';
	import 'animate.css';
	import '../globals.css';
	import { navigation } from '../constants';
	import { page } from '$app/stores';
</script>

<main>
	{#if $page.route.id !== '/'}
		<header class="app-header flex start gap-smaller w1">
			<a href="/" class="bebas upper link"> Home </a>
			{#each navigation as link}
				<a href={link.href} class:active={$page.route.id === link.href} class="bebas upper link">
					{link.shortText}
				</a>
			{/each}
		</header>
	{/if}
	<div class="main-app-layout">
		<slot />
	</div>
</main>

<style>
	.main-app-layout {
		padding: 15px 16px;
	}
	.app-header {
		width: 100%;
		background: #282a36;
	}
	.app-header a.link {
		display: block;
		color: #fff;
		padding: 10px;
	}
	.app-header a.link.active {
		background-color: #44475a;
		color: #ffb86c;
	}
</style>
