<script lang="ts">
	import SimpleSpinner from '@components/simple-spinner.svelte';

	export let label: string = 'Button';
	export let click: (e: Event) => void = () => {};
	export let loading: boolean = false;

	const onclick = (e: Event) => {
		e.preventDefault();
		click(e);
	};
</script>

<a role="button" class="btn fill" href="/" on:click={onclick}>
	{#if loading}
		<SimpleSpinner />
	{:else}
		{label}
	{/if}
</a>
