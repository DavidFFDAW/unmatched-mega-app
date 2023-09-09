<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: string;

	const selectValue = (e: Event) => {
		value = (e.target as HTMLSelectElement).value;
	};
</script>

<div class="w1 form-item">
	<label for={name}>{label}</label>
	<select id={name} on:change={selectValue}>
		<option value="melee">Melee</option>
		<option value="ranged">Ranged</option>
	</select>
</div>
