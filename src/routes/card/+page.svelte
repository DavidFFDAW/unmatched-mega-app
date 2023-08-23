<script lang="ts">
	import UnmatchedRealCard from "../unlimited-decks/[id]/unmatched-real-card.svelte";
    let card: any = {
        title: '',
        basicText: '',
        immediateText: '',
        duringText: '',
        afterText: '',
        value: 0,
        boost: 0,
        characterName: 'CUALQUIERA',
        quantity: 2,
        imageUrl: '',
    }

</script>

<div class="flex start acenter gap">
    <div class="flex start acenter column gap-smaller">
        <input type="text" bind:value={card.title} placeholder="Titulo" />
        <input type="text" bind:value={card.basicText} placeholder="Texto carta"/>
        <input type="text" bind:value={card.immediateText} placeholder="Texto de inmediato"/>
        <input type="text" bind:value={card.duringText} placeholder="Texto durante el combate"/>
        <input type="text" bind:value={card.afterText} placeholder="Texto después del combate"/>
        <input type="number" bind:value={card.value} placeholder="5"/>
        <input type="number" bind:value={card.boost} placeholder="8"/>
        <input type="quantity" bind:value={card.quantity} placeholder="2"/>
        <input type="text" bind:value={card.characterName} placeholder="CUALQUIERA"/>
        <input type="text" bind:value={card.imageUrl} placeholder="CUALQUIERA"/>
    </div>
    <div>
        <UnmatchedRealCard card={card} />
    </div>
</div>
