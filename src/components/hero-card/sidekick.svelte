<script lang="ts">
	import AttackImage from './attack-image.svelte';
	import type { Sidekick } from './hero.model';

	export let sidekick: Sidekick;
</script>

<div data-v-507e7f39="" class="sidekick panel">
	<div data-v-507e7f39="" class="name section">
		<div data-v-507e7f39="" class="gutter"><div data-v-507e7f39="">AYUDANTE</div></div>
		<div data-v-507e7f39="" class="content xl">
			<span
				data-v-507e7f39=""
				contenteditable="true"
				class="scale-text"
				style="transform: scaleX(1);">{sidekick.name}</span
			>
		</div>
	</div>
	<div data-v-507e7f39="" class="attack-health section">
		<div data-v-507e7f39="" class="attack section">
			<div data-v-507e7f39="" class="gutter"><div data-v-507e7f39="">ATAQUE</div></div>
			<div data-v-507e7f39="" class="attack-type">
				<AttackImage attackType={sidekick.attack} />
				<div data-v-507e7f39="" class="editor" />
			</div>
		</div>
		<div data-v-507e7f39="" class="health section">
			<div data-v-507e7f39="" class="gutter">
				<div data-v-507e7f39="">Vida Inicial</div>
			</div>
			<div data-v-507e7f39="" class="quantity">
				<div data-v-507e7f39="" class="circle" style="margin-left: -5.5mm;"><!----></div>
				<div data-v-507e7f39="" class="circle" style="margin-left: -3.66667mm;">
					<!---->
				</div>
				<div data-v-507e7f39="" class="circle" style="margin-left: -1.83333mm;">
					<!---->
				</div>
				<div data-v-507e7f39="" class="circle" style="margin-left: 0mm;">
					<span data-v-507e7f39=""> X{sidekick.quantity} </span>
				</div>
				<div data-v-972d88fa="" data-v-507e7f39="" class="up-down-buttons editor" />
			</div>
		</div>
	</div>
	<!---->
</div>

<style>
	.printnplay .health .circle[data-v-507e7f39] {
		border-color: #fff;
		background: silver;
		color: #000;
	}
	.panel.sidekick[data-v-507e7f39] {
		border-radius: 0 0 1.5mm 1.5mm;
	}
	.health .quantity[data-v-507e7f39] {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		float: left;
		position: relative;
		width: 12.1mm;
	}

	.health .circle[data-v-507e7f39] {
		position: absolute;
		width: 5.5mm;
		height: 5.5mm;
		left: 50%;
		margin-left: -3mm;
		border-radius: 100%;
		border: 0.4mm solid #000;
		background: var(--highlight-colour);
		text-align: center;
		color: var(--contrast-colour);
		font-size: 3mm;
		padding-top: 0.75mm;
	}
	.editable[data-v-6f027e09] .quantity .editor {
		height: 18mm;
		width: 10mm;
		top: -6mm;
		left: 6.5mm;
		visibility: hidden;
	}

	.editable[data-v-6f027e09] .quantity:hover .editor {
		visibility: visible;
	}
</style>
