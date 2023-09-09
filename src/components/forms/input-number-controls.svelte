<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: string | number;
	export let min: number = 0;

	const setValue = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
	};

	const triggerOperation = (operation: string) => {
		const finalValue = operation === 'add' ? Number(value) + 1 : Number(value) - 1;
		value = finalValue < min ? min : finalValue;
	};
</script>

<div class="w1 form-item">
	<label for={name}>{label}</label>
	<div class="flex start acenter input-group">
		<button
			type="button"
			title="button substract {name}"
			class="btn-key key-substract"
			on:click={() => triggerOperation('substract')}
		>
			-
		</button>
		<input
			type="number"
			{name}
			{value}
			{min}
			id={name}
			on:input={setValue}
			class="input non-rounded"
		/>
		<button
			type="button"
			title="button substract {name}"
			class="btn-key key-add"
			on:click={() => triggerOperation('add')}
		>
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
