<script lang="ts">
	export let attackType: string = 'melee';
</script>

{#if attackType === 'melee'}
	<img data-v-507e7f39="" alt="melee" src="/images/melee.d95dac7a.svg" class="melee icon" />
{:else if attackType === 'ranged'}
	<img data-v-507e7f39="" alt="ranged" src="/images/ranged.716adb4d.svg" class="melee icon" />
{/if}

<style>
	.icon[data-v-507e7f39] {
		margin-left: 1mm;
		margin-top: -0.8mm;
	}

	.icon.melee[data-v-507e7f39] {
		width: 78%;
	}
</style>
