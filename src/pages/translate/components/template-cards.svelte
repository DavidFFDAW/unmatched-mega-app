<script lang="ts">
	import TemplateCardEffect from "./template-card-effect.svelte";
    export let functions: any;
</script>

<div class="w1 box p">
    <h3 class="title">Templates de cartas</h3>
    <form class="grid template-cards-list gap-smaller">
        <TemplateCardEffect
            label="Finta"
            immediate="Cancela todos los efectos de la carta de tu oponente"
            character="Cualquiera"
            functions={functions}
            qty={3}
        />
        <TemplateCardEffect 
            label="Escaramuza"
            after="Si has ganado el combate, elige uno de los luchadores que haya combatido y muevelo un máximo de 2 casillas"
            character="Cualquiera"
            functions={functions}
            qty={3}
        />
        <TemplateCardEffect 
            label="Reagrupar"
            after="Roba 1 carta. Si has ganado el combate, roba 2 cartas en vez de 1"
            character="Cualquiera"
            functions={functions}
            qty={3}
        />
        <TemplateCardEffect 
            label="Giro trascendental"
            after="Si tu luchador ha empezado el turno en una casilla distinta, el valor de esta carta pasa a ser 5"
            character="Cualquiera"
            functions={functions}
            qty={3}
        />
        <TemplateCardEffect 
            label="A bocajarro"
            after="Si el luchador enemigo está adyacente a tu luchador, haz 2 puntos de daño a ese luchador"
            functions={functions}
            qty={3}
        />
        <TemplateCardEffect 
            label="Contrincante Hábil"
            after="Haz 1 punto de daño a cada luchador enemigo adyacente a tu luchador"
            character="Cualquiera"
            functions={functions}
            qty={2}
        />
        <TemplateCardEffect 
            label="Curtido en la batalla"
            after="Elige una carta de tu pila de descarte y devuélvela a tu mano"
            character="Cualquiera"
            functions={functions}
            qty={2}
        />
    </form>
</div>

<style scoped>
    .template-cards-list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			place-items: stretch;
		}
	@media only screen and (max-width: 768px) {
		.template-cards-list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			place-items: stretch;
			gap: 10px;
		}
	}
</style>