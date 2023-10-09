<script lang="ts">
	import UnmatchedRealCard from '@components/unmatched-real-card.svelte';
	export let list: any[] = [];
	let swiper: Swiper;
	export let groupView: boolean = false;
	export let currentTab: string;
	export let footer: any = null;
	import { customSelectCard } from '../hooks';
	import { onDestroy, onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';
	import 'swiper/css/bundle';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	const createSlider = () => {
		swiper = new Swiper('.slider.swippable', {
			effect: 'cards',
			grabCursor: true,
			slidesPerView: 1,
			centeredSlides: true,
			cardsEffect: {
				slideShadows: false
			},
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			observer: true,
			observeParents: true,
			modules: [Navigation, Pagination]
		});
	};

	onMount(() => {
		setTimeout(() => {
			createSlider();
		}, 100);
	});

	onDestroy(() => {
		swiper.destroy();
	});
</script>

<div>
	<div class="flex center acenter slider swippable relative down">
		<div class="swiper-button-prev" />
		<div class="swiper-wrapper">
			{#each list as item}
				<div class="swiper-slide">
					<div class="flex center">
						<UnmatchedRealCard
							width={63}
							height={88}
							card={item}
							on:cardclick={() => customSelectCard(item, currentTab)}
						/>
					</div>
				</div>
			{/each}
		</div>
		<div class="swiper-button-next" />
	</div>
	<div class="relative down">
		<div class="swiper-pagination" />
	</div>
</div>

{#if footer}
	<svelte:component this={footer} />
{/if}

<style>
	.slider {
		overflow-x: hidden;
	}
	.slider {
		width: 100%;
	}

	.swiper-slide {
		width: fit-content;
	}
</style>
