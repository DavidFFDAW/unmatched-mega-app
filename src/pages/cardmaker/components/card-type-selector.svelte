<script lang="ts">
	import TypeCard from '@components/type-card.svelte';
	export let type: string = 'attack';
	export let label: string = 'Tipo de carta';

	const changeBtn = (tp: string) => {
		return () => (type = tp);
	};
</script>

<div class="w1 card-type-selector form-item">
	<label for="card-type">
		{label}
	</label>
	<input type="hidden" name="card-type" bind:value={type} />

	<div class="w1 flex start gap content">
		<button
			type="button"
			class="card-type-selector-button attack-type"
			class:active={type === 'attack'}
			on:click={changeBtn('attack')}
		>
			<TypeCard type="attack" />
		</button>
		<button
			type="button"
			class="card-type-selector-button defence-type"
			class:active={type === 'defence'}
			on:click={changeBtn('defence')}
		>
			<TypeCard type="defence" />
		</button>
		<button
			type="button"
			class="card-type-selector-button versatile-type"
			class:active={type === 'versatile'}
			on:click={changeBtn('versatile')}
		>
			<TypeCard type="versatile" />
		</button>
		<button
			type="button"
			class="card-type-selector-button scheme-type"
			class:active={type === 'scheme'}
			on:click={changeBtn('scheme')}
		>
			<TypeCard type="scheme" />
		</button>
	</div>
</div>

<style scoped>
	.card-type-selector .content {
		padding: 10px;
	}
	.card-type-selector button.card-type-selector-button {
		width: 100%;
		opacity: 0.5;
		padding: 0 0;
		outline: none;
		border: none;
		filter: blur(1.2px) brightness(0.8);
		transition: all 0.3s;
	}
	.card-type-selector button.card-type-selector-button.active {
		width: 100%;
		filter: blur(0px) brightness(1);
		opacity: 1;
	}
	.card-type-selector .attack-type {
		background-color: var(--attack);
	}
	.card-type-selector .defence-type {
		background-color: var(--defense);
	}
	.card-type-selector .versatile-type {
		background-color: var(--versatile);
	}
	.card-type-selector .scheme-type {
		background-color: var(--scheme);
	}
</style>
