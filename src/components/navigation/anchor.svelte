<script lang="ts">
	import { page } from '$app/stores';
	import type { MenuNavigation, Submenu } from '@src/constants';
	export let hasSubmenu: boolean = false;
	export let link: MenuNavigation;
	export let submenu: Submenu[] = [];
</script>

{#if hasSubmenu}
	<div
		class="anchor-submenu bebas relative upper link pointer"
		class:active={$page.route.id?.includes(link.href)}
	>
		{link.shortText}
		<section class="submenu">
			{#each submenu as item}
				<a
					href={item.href}
					title={item.text}
					class="bebas relative upper {item.class}"
					class:active={$page.route.id === item.href}>{item.text}</a
				>
			{/each}
		</section>
	</div>
{:else}
	<a
		href={link.href}
		class:active={$page.route.id?.includes(link.href)}
		class="relative bebas upper link"
	>
		{link.shortText}
	</a>
{/if}

<style>
	.link {
		display: block;
		color: #fff;
		padding: 10px;
	}
	.link.active {
		background-color: #44475a;
		color: #ffb86c;
	}
	.link section.submenu {
		position: absolute;
		width: 200px;
		top: 98%;
		left: 0;
		background-color: #282a36;
		display: none;
		z-index: 999;
	}
	.link section.submenu a.active {
		background-color: #44475a;
	}
	.link section.submenu a {
		display: block;
		color: #fff;
		border-left: 8px solid #ffb86c;
		padding: 10px;
		font-family: 'bebas', sans-serif;
	}

	.link .submenu a:hover {
		border-left: 8px solid #8f93ae;
		background-color: #60637d;
		color: #fff;
	}

	.link:hover section.submenu {
		display: block;
	}
</style>
