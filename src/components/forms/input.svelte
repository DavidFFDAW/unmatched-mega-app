<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: string = 'text';
	export let value: string | number;
	export let min: number = 0;
	export let resize: boolean = false;
	export let onchange: (e: Event) => void = () => {};

	const setValue = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
	};
</script>

<div class="w1 form-item">
	<label for={name}>{label}</label>
	{#if min}
		<input
			{type}
			{name}
			{value}
			{min}
			id={name}
			on:input={setValue}
			on:change={onchange}
			class:resizable={resize}
			class="input"
		/>
	{:else}
		<input
			{type}
			{name}
			{value}
			id={name}
			on:input={setValue}
			on:change={onchange}
			class:resizable={resize}
			class="input"
		/>
	{/if}
</div>

<style>
	.resizable {
		resize: vertical;
	}
</style>
