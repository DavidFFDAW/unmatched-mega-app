<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: string | number;
	export let min: number = 0;
	export let max: number | null = null;

	const setValue = (e: Event) => {
		const target = e.target as HTMLInputElement;
		return (value = Number(target.value));
	};

	const substract = () => {
		const finalValue = Number(value) - 1;
		value = finalValue < min ? min : finalValue;
	};

	const add = () => {
		const finalValue = Number(value) + 1;
		value = max && finalValue > max ? max : finalValue;
	};
</script>

<div class="w1 form-item">
	<label for={name}>{label}</label>
	<div class="flex start acenter input-group">
		<button
			type="button"
			title="button substract {name}"
			class="btn-key key-substract"
			on:click={substract}
		>
			-
		</button>
		{#if max}
			<input
				type="number"
				{name}
				{value}
				{min}
				{max}
				id={name}
				on:input={setValue}
				class="input non-rounded"
			/>
		{:else}
			<input
				type="number"
				{name}
				{value}
				{min}
				id={name}
				on:input={setValue}
				class="input non-rounded"
			/>
		{/if}
		<button type="button" title="button substract {name}" class="btn-key key-add" on:click={add}>
			+
		</button>
	</div>
</div>

<style>
	.input.non-rounded {
		margin: 0;
		height: 40px;
		border-radius: 0;
	}
	.input-group {
		width: 100%;
		margin-top: 5px;
	}
	.btn-key {
		width: 3rem;
		height: 40px;
		border-radius: 0;
		font-size: 1.5rem;
		background-color: #d9d9d9;
		outline: none;
		border: none;
		cursor: pointer;
	}
	.key-add {
		border-radius: 0 2rem 2rem 0;
	}
	.key-substract {
		border-radius: 2rem 0 0 2rem;
	}
</style>
