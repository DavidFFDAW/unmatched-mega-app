<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: string | number | undefined = '';

	const setValue = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
	};
</script>

<div class="w1 form-item">
	<label for={name}>{label}</label>
	<select {name} {value} id={name} class="input" on:change={setValue}>
		<slot />
	</select>
</div>
