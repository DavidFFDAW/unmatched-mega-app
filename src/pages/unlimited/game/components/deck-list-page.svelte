<script lang="ts">
	import UnmatchedRealCard from '@components/unmatched-real-card.svelte';
	export let list: any[] = [];
	export let groupView: boolean = false;
	export let currentTab: string;
	export let footer: any = null;
	import { customSelectCard } from '../hooks';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/swiper-bundle.css';

	onMount(() => {
		new Swiper('.slider.swippable', {
			effect: 'cards',
			grabCursor: true,
			spaceBetween: 10
		});
	});
</script>

<div class="flex center acenter slider swippable">
	<div class="swiper-wrapper">
		{#each list as item}
			<div class="swiper-slide">
				<UnmatchedRealCard
					width={63}
					height={88}
					card={item}
					on:cardclick={() => customSelectCard(item, currentTab)}
				/>
				<!-- <div style="background-color: aqua; width: 200px; height: 200px;" /> -->
			</div>
		{/each}
	</div>
</div>

{#if footer}
	<svelte:component this={footer} />
{/if}

<style>
	.slider {
		overflow-x: auto;
	}
	.slider {
		width: 100%;
	}
	.swiper-wrapper {
		width: 63mm;
	}
	.swiper-slide {
		width: fit-content;
	}
</style>
