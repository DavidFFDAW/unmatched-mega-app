<script lang="ts">
	// the unit used is mm
	let spaces: number = 25;
	let cardNumber: number = 31;

	const calculateSpaces = (numberOfCards: number) => {
		if (numberOfCards === 31) return 25;
		spaces = (numberOfCards * 25) / 31;
	};

	const eventChange = (event: any) => {
		calculateSpaces(Number(event.target.value));
	};
</script>

<h1>Tuckbox page</h1>

<div style="width: {spaces}mm; background: red; height: 250px" />

<div class="flex center column">
	<input type="number" bind:value={cardNumber} min="10" on:change={eventChange} />
</div>
