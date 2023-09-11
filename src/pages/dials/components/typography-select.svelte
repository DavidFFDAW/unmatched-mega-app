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
		<option value="bebas">Bebas Neue (UNmatched)</option>
		<option value="narrow" selected>Archivo Narrow (UNmatched)</option>
		<option value="league">League Gothic (UNmatched)</option>
		<option value="Arial">Arial</option>
		<option value="Arial Black">Arial Black</option>
		<option value="Comic Sans MS">Comic Sans MS</option>
		<option value="Courier New">Courier New</option>
		<option value="Georgia">Georgia</option>
		<option value="Impact">Impact</option>
		<option value="Lucida Console">Lucida Console</option>
		<option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
		<option value="Palatino Linotype">Palatino Linotype</option>
		<option value="Tahoma">Tahoma</option>
		<option value="Times New Roman">Times New Roman</option>
		<option value="Trebuchet MS">Trebuchet MS</option>
		<option value="Verdana">Verdana</option>
		<option value="Segoe UI">Segoe UI</option>
	</select>
</div>
