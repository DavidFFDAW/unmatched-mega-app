<script lang="ts">
	import { onMount } from 'svelte';
	import { dropzoneArray, empty, dragover, drop } from '../shared/dropzone';
	import CardContainer from './card-container.svelte';
	import Card from './card.svelte';

	export let multiple: boolean = true;

	onMount(() => empty());
</script>

<div
	class="box dropzone flex center acenter"
	role="presentation"
	on:dragover={dragover}
	on:drop={drop}
>
	<CardContainer>
		{#if multiple}
			{#each $dropzoneArray as item}
				<Card src={item.url} />
			{/each}
		{:else}
			<Card src={$dropzoneArray[0]?.url} />
		{/if}
	</CardContainer>

	<slot />
</div>

<style>
	.dropzone {
		margin-top: 150px;
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 250px;
	}
</style>
