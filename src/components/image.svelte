<script lang="ts">
	const defImage = '/images/noimage.webp';
	export let className: string = 'svelte-image';
	export let alt: string = 'svelte default generated image';
	export let src: string = defImage;
	export let width: number = 200;
	export let height: number = 200;

	const onError = (event: Event) => {
		const target = event.target as HTMLImageElement;
		if (target) target.src = defImage;
	};
</script>

<img
	{src}
	class={className}
	{width}
	{height}
	loading="lazy"
	{alt}
	data-src={src}
	draggable="false"
	aria-label={alt}
	on:error={onError}
/>
