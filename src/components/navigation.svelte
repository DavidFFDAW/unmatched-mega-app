<script lang="ts">
	import { menuNavigation } from '../constants';
	import { page } from '$app/stores';
	import Anchor from './navigation/anchor.svelte';
</script>

<nav>
	{#if $page.route.id !== '/'}
		<header class="app-header flex start gap-smaller w1">
			<a href="/" class="bebas upper link"> Home </a>
			{#each menuNavigation as link}
				<Anchor {link} hasSubmenu={link.submenu?.length > 0} submenu={link.submenu} />
			{/each}
		</header>
	{/if}
</nav>

<style>
	.app-header {
		width: 100%;
		background: #282a36;
		gap: 0;
	}
	.app-header a.link {
		display: block;
		color: #fff;
		padding: 10px;
	}
</style>
