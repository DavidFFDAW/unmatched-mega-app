<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: string | number | undefined = '';

	const setValue = (e: Event) => {
		console.log({
			target: e.target,
			value: (e.target as HTMLInputElement).value,
			textC: (e.target as HTMLInputElement).textContent
		});

		value = (e.target as HTMLInputElement).value;
	};
</script>

<div class="w1 form-item">
	<label for={name}>{label}</label>
	<textarea {name} id={name} rows="5" on:change={setValue} class="input textarea resizable"
		>{value}</textarea
	>
</div>

<style>
	.resizable {
		resize: vertical;
	}
</style>
