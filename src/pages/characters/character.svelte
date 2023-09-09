<script lang="ts">
	import ButtonFile from '@components/buttons/button-file.svelte';
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import Input from '@components/forms/input.svelte';
	import Switch from '@components/forms/switch.svelte';
	import HeroCard from '@components/hero-card/hero-card.svelte';
	import type { HeroCardInterface } from '@components/hero-card/hero.model';
	import { downloadPngFromElement } from '@services/dom.screenshot.service';

	let datas: HeroCardInterface = {
		hasSidekick: false,
		hero: {
			name: 'Elektra',
			attack: 'melee',
			ability:
				'Cuando Elektra sea derrotada quita a Elektra y a todos los miembros de la mano del tablero. No ha sido derrotada. Al inicio de tu próximo turno, resucítala. Ignora los efectos de RESUCITADA.',
			hp: 7,
			move: 2,
			quote: 'Me pica el culo'
		},
		sidekick: {
			quantity: 1,
			name: 'Daredevil',
			attack: 'melee',
			hp: 5
		}
	};

	const downloadCard = (ev: Event) => {
		ev.preventDefault();
		return downloadPngFromElement(
			document.getElementById('unmatchedHeroCard'),
			`unmatched-hero-card-${datas.hero.name}`
		);
	};
</script>

<div class="flex center acenter gap flex-responsive-reverse">
	<div class="w1 box p">
		<h3 class="title">Datos</h3>
		<form class="flex center astart column gap-smaller">
			<Input label="Nombre del Héroe" name="hero_name" bind:value={datas.hero.name} />
			<Input label="Vida del héroe" name="hero_hp" bind:value={datas.hero.hp} />
		</form>
	</div>
	<div id="unmatched-hero-card">
		<div id="unmatchedHeroCard">
			<HeroCard {datas} />
		</div>
		<div class="flex center acenter">
			<ButtonFill label="Descargar carta" click={downloadCard} />
		</div>
	</div>
</div>

<style>
	@media only screen and (max-width: 768px) {
		.flex-responsive-reverse {
			flex-direction: column-reverse;
		}
	}
</style>
