<script lang="ts">
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import Input from '@components/forms/input.svelte';
	import HeroCard from '@components/hero-card/hero-card.svelte';
	import type { HeroCardInterface } from '@components/hero-card/hero.model';
	import { downloadPngFromElement } from '@services/dom.screenshot.service';
	import AttackSelector from './components/attack-selector.svelte';
	import InputNumberControls from '@components/forms/input-number-controls.svelte';
	import Textarea from '@components/forms/textarea.svelte';
	import Switch from '@components/forms/switch.svelte';

	let datas: HeroCardInterface = {
		hasSidekick: false,
		hero: {
			name: 'Elektra',
			attack: 'melee',
			ability:
				'Cuando Elektra sea derrotada quita a Elektra y a todos los miembros de la mano del tablero. No ha sido derrotada. Al inicio de tu próximo turno, resucítala. Ignora los efectos de RESUCITADA.',
			hp: 7,
			move: 2,
			quote: '\nMe pica el culo'
		},
		sidekick: {
			quantity: 1,
			name: 'Daredevil',
			attack: 'melee',
			hp: 5
		}
	};

	let cardColors = {
		highlight: '#daa520',
		border: '#f7eadb',
		contrast: '#000000',
		outer: '#f7eadb'
	};

	const downloadCard = (ev: Event) => {
		ev.preventDefault();
		return downloadPngFromElement(
			document.getElementById('unmatchedHeroCard'),
			`unmatched-hero-card-${datas.hero.name}`
		);
	};
</script>

<div class="flex center astart start-to-center gap flex-responsive-reverse flex-total">
	<div class="w1 box p">
		<h3 class="title">Héroe</h3>
		<form class="flex center astart column gap-smaller">
			<div class="w1 flex start acenter gap-small flex-total">
				<Input label="Nombre del Héroe" name="hero_name" bind:value={datas.hero.name} />
				<AttackSelector
					label="Ataque del héroe"
					name="hero_attack"
					bind:value={datas.hero.attack}
				/>
			</div>
			<div class="w1 flex start acenter gap-small flex-total">
				<InputNumberControls
					label="Vida del héroe"
					name="hero_hp"
					bind:value={datas.hero.hp}
					min={1}
				/>
				<InputNumberControls
					label="Movimiento del héroe"
					name="hero_move"
					bind:value={datas.hero.move}
				/>
			</div>
			<Switch label="¿Tiene ayudante?" name="has_sidekick" bind:value={datas.hasSidekick} />
			<Textarea label="Habilidad del héroe" name="hero_ability" bind:value={datas.hero.ability} />
		</form>
	</div>
	<div id="unmatched-hero-card" class="flex center acenter column gap-small">
		<div id="unmatchedHeroCard">
			<HeroCard
				bind:datas
				bind:border={cardColors.border}
				bind:highlight={cardColors.highlight}
				bind:contrast={cardColors.contrast}
				bind:outer={cardColors.outer}
			/>
		</div>
		<div class="flex center acenter">
			<ButtonFill label="Descargar carta" click={downloadCard} />
		</div>
	</div>
</div>

<div class="down flex center astart start-to-center gap flex-responsive-reverse flex-total">
	<div class="w1 box p">
		<h3 class="title">Ayudante</h3>
		<form class="flex center astart column gap-smaller">
			<div class="w1 flex start acenter gap-small flex-total">
				<Input label="Nombre del Ayudante" name="sidekick" bind:value={datas.sidekick.name} />
				<AttackSelector
					label="Ataque del Ayudante"
					name="sidekick_attack"
					bind:value={datas.sidekick.attack}
				/>
			</div>
			<div class="w1 flex start acenter gap-small flex-total">
				<InputNumberControls
					label="Vida del Ayudante"
					name="sidekick_hp"
					bind:value={datas.sidekick.hp}
					min={1}
				/>
				<InputNumberControls
					label="Cantidad de Ayudantes"
					name="sidekick_quantity"
					min={1}
					bind:value={datas.sidekick.quantity}
				/>
			</div>
			<Textarea label="Frase" name="hero_ability" bind:value={datas.hero.quote} />
		</form>
	</div>

	<div class="w1 box p">
		<h3 class="title">Carta</h3>
		<form class="flex center astart column gap-smaller">
			<Input
				type="color"
				label="Color de carta"
				name="card_highlight_color"
				bind:value={cardColors.highlight}
			/>
			<Input
				type="color"
				label="Color de borde de carta"
				name="card_border_color"
				bind:value={cardColors.border}
			/>
			<Input
				type="color"
				label="Color de contraste de carta"
				name="card_contrast_color"
				bind:value={cardColors.contrast}
			/>
			<Input
				type="color"
				label="Color de borde exterior de carta"
				name="card_outer_border_color"
				bind:value={cardColors.outer}
			/>
		</form>
	</div>
</div>

<style>
	@media only screen and (max-width: 768px) {
		.flex-responsive-reverse {
			flex-direction: column-reverse;
		}
	}
</style>
