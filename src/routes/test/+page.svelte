<script>
	import { onMount } from 'svelte';
	import { Swiper } from 'swiper';
	import 'swiper/swiper-bundle.css';

	onMount(() => {
		new Swiper('.mySwiper', {
			effect: 'cards',
			grabCursor: true
		});
	});
</script>

<div class="swiper mySwiper">
	<div class="swiper-wrapper">
		<div class="swiper-slide bg" />
		<div class="swiper-slide bg" />
		<div class="swiper-slide bg" />
		<div class="swiper-slide bg" />
		<div class="swiper-slide bg" />
		<div class="swiper-slide bg" />
		<div class="swiper-slide bg" />
		<div class="swiper-slide bg" />
		<div class="swiper-slide bg" />
	</div>
</div>

<style>
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		--container: 112rem;
		--m-auto: 0 auto;
	}

	.swiper {
		position: relative;
		width: 63mm;
		height: 88mm;
	}

	.swiper-slide {
		border-radius: 18px;
	}

	.swiper-slide {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 18px;
	}

	.swiper-slide.bg {
		background-image: url('https://mla0yhckwnhd.i.optimole.com/w:375/h:523/q:mauto/f:best/https://gridbeastgaming.com/wp-content/uploads/Dracula-card.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
