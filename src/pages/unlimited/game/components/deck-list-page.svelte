<script lang="ts">
	import UnmatchedRealCard from '../../../../components/unmatched-real-card.svelte';
	export let list: any[] = [];
	export let groupView: boolean = false;
	export let selectCard: any = () => {};
</script>

<div class="flex center acenter mega-container" class:group={groupView}>
	<div class="cards-container slider">
		{#each list as item}
			<div class="slide">
				<UnmatchedRealCard
					width={63}
					height={88}
					card={item}
					on:cardclick={() => selectCard(item, 'discard')}
				/>
			</div>
		{/each}
	</div>
</div>
