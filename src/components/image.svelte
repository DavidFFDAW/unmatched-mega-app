<script lang="ts">
	const defImage = '/images/noimage.webp';
	export let className: string = '';
	export let alt: string = 'svelte default generated image';
	export let src: string = defImage;
	export let width: number | string = 200;
	export let height: number | string = 200;

	const onError = (event: Event) => {
		console.log('error', event);

		const target = event.target as HTMLImageElement;
		if (target) target.src = defImage;
	};
</script>

<img
	src={src ? src : defImage}
	class="svelte-image {className}"
	{width}
	{height}
	loading="lazy"
	{alt}
	data-src={src}
	draggable="false"
	aria-label={alt}
	on:error={onError}
/>
