<script lang="ts">
	import ButtonFill from '@components/buttons/button-fill.svelte';
    import type {CardEffectTemplate} from '../translate-cards.model';

    export let label: string;
    export let immediate: string = '';
    export let during: string = '';
    export let after: string = '';
    export let scheme: string = '';
    export let qty: number;
    export let character: string = '';
    export let functions: any;
    
    function setCardEffect() {
        const card: CardEffectTemplate = {
            inmediate: immediate,
            rayito: scheme,
            label,
            during,
            after,
            qty: qty.toString(),
            character,
        };

        functions.setCardTemplate(card);
    }
</script>

<ButtonFill label="{label}" click={setCardEffect} />