<script lang="ts">
	export let total: boolean = true;
	export let label: string;
	export let name: string;
	export let value: boolean | undefined = false;

	const setValue = () => {
		value = !value;
	};
</script>

<div class:w1={total} class="form-item">
	<label for={name} style="margin-bottom: 5px">{label}</label>
	<label class="switch">
		<input type="checkbox" id={name} {name} {value} on:change={setValue} bind:checked={value} />
		<div class="slider round" />
	</label>
</div>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #272727;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #272727;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
