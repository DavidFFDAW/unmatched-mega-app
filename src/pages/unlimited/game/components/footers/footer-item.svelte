<script lang="ts">
	export let title: string = '';
	export let description: string = '';
	export let click: any = () => {};
	export let afterClick: any = () => {};
	export let icon: string = '';

	const handleClick = (e: Event) => {
		e.preventDefault();
		click();
		afterClick();
	};
</script>

<li>
	<div role="presentation" class="w1 flex start astart gap pointer" on:click={handleClick}>
		<div class="flex acenter { !icon ? 'border' : '' } svg-logo" >
			{#if icon}
				<img src="{icon}" style="max-width: 100%" alt="{title}" />
			{/if}
		</div>

		<div class="text-block">
			<h4 class="title">{title}</h4>
			<p class="description">{description}</p>
		</div>
	</div>
</li>

<style>
	.border {
		border: 1px solid #cddc39;
	}
</style>
