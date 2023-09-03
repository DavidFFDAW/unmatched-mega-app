<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: string = 'text';
	export let value: string;
	export let resize: boolean = false;

	const setValue = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
	};
</script>

<div class="w1 form-item">
	<label for={name}>{label}</label>
	<input {type} {name} {value} on:input={setValue} class:resizable={resize} class="input" />
</div>

<style>
	.resizable {
		resize: vertical;
	}
</style>
