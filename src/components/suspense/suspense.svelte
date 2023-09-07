<script lang="ts">
	import PageContainer from '@components/container/page-container.svelte';
	import GlobalLoading from '@components/loading/global-loading.svelte';
	export let component: any = undefined;
</script>

{#if component}
	<PageContainer>
		<svelte:component this={component} />
	</PageContainer>
{:else}
	<GlobalLoading />
{/if}
