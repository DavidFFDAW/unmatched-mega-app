<script lang="ts">
    import GlobalLoading from '@components/loading/global-loading.svelte';
    export let component = undefined;
</script>

{#if CardBackPage}
	<svelte:component this={CardBackPage} />
{:else}
	<GlobalLoading/>
{/if}
