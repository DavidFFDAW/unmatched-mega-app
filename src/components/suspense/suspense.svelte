<script lang="ts">
	import GlobalLoading from '@components/loading/global-loading.svelte';
	export let component: any = undefined;
</script>

{#if component}
	<svelte:component this={component} />
{:else}
	<GlobalLoading />
{/if}
