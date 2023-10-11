<script lang="ts">
	// import UnmatchedRealCard from '@components/unmatched-real-card.svelte';
	export let list: any[] = [];
	let swiper: Swiper;
	import { onDestroy, onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation, Pagination, EffectCards } from 'swiper/modules';
	import 'swiper/css/bundle';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
	import Card from '@components/card.svelte';

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
			modules: [Navigation, Pagination, EffectCards]
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

	const selectThisCard = (cv: CustomEvent) => {
		console.log({ cv });
		const target = cv.detail.target as HTMLImageElement;

		if (target) {
			target.classList.toggle('selected');
		}
	};
</script>

<div>
	<div class="flex center acenter slider swippable relative down card-backs-selection-container">
		<div class="swiper-button-prev" />
		<div class="swiper-wrapper">
			{#each list as item}
				<div class="swiper-slide card-backs-selection">
					<div class="flex center" role="presentation">
						<Card src={item.cardback} on:imageclick={selectThisCard} />
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

<style>
	.flex.center.acenter.slider.swippable.relative.down.card-backs-selection-container {
		height: 100%;
		min-height: 60vh;
	}
	.slider {
		overflow-x: hidden;
	}
	.slider.swippable .swiper-wrapper {
		min-height: 375px;
		overflow: hidden;
	}
	.slider.swippable .swiper-wrapper .swiper-slide {
		height: auto;
	}
</style>
