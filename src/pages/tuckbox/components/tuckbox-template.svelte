<script lang="ts">
	export let deckName: string;
	export let secondDeckName: string;
	export let cardFrontImage: string;
	export let cardBackgroundImage: string;
	export let spaces: number;
	export let fontSize: number;
	export let hasNameFrame: boolean;
	export let nameFrameBackgroundColor: string;
	export let nameFrameBorderColor: string;
	export let nameFrameFontSize: number;
	export let nameFrameColor: string;
</script>

<div class="total-tuckbox-container tuckbox-container">
	<div class="main-card-top-block flex column astart" style="margin-left: {spaces}mm">
		<div
			class="wmm main-card-top-rounded border-sides border-top bg"
			style="height: {spaces - spaces / 4 + 4}mm;"
		/>
	</div>

	<div class="main-card-top-compound flex start aend">
		<div class="wmm relative" style="width: {spaces}mm; height: {spaces}mm;" />
		<div
			class="wmm relative main-card-space border-sides border-top bg"
			style="height: {spaces}mm;"
		>
			<p
				class="color box-upper-place deck-title league"
				class:has-extra-character={Boolean(secondDeckName) && deckName !== secondDeckName}
				style="font-size: {fontSize}px"
			>
				{deckName}
				{#if secondDeckName}
					<p
						class="color secondary-character league"
						style="padding-right: {deckName.length + secondDeckName.length}%;"
					>
						& {secondDeckName}
					</p>
				{/if}
			</p>
		</div>
		<div
			class="main-card-space-rounded-last bg"
			style="width: {spaces}mm; height: {spaces / 1.5}mm;"
		/>
		<div class="wmm" />
		<div
			class="main-card-space-rounded-first border-top border-left bg"
			style="width: {spaces}mm; height: {spaces / 1.5}mm;"
		/>
	</div>

	<div class="main-cards-block flex start astart main-card-block-can-have-background-in-spaces">
		<div class="hmm relative main-card-sides border-top bg" style="width: {spaces}mm;">
			<p class="vertical-text non-rotated deck-title league" style="font-size: {fontSize}px">
				{!secondDeckName ? deckName : secondDeckName}
			</p>
		</div>
		<div
			class="main-card-space border-sides border-top background-image bg"
			style="background-image: url({cardBackgroundImage});"
		/>
		<div class="hmm relative main-card-sides border-top bg" style="width: {spaces}mm;">
			<p class="vertical-text deck-title rotated league" style="font-size: {fontSize}px">
				{deckName}
			</p>
		</div>
		<div
			class="relative main-card-space border-sides border-top background-image bg card-cutout"
			style="background-image: url({cardFrontImage});"
		>
			{#if hasNameFrame}
				<div
					class="absolute bottom left deck-name-frame-cards"
					style="background-color: {nameFrameBackgroundColor}; border: 1px solid {nameFrameBorderColor};"
				>
					<p class="league" style="color: {nameFrameColor}; font-size: {nameFrameFontSize}px;">
						{deckName}
					</p>
				</div>
			{/if}
		</div>
		<div class="hmm main-card-sides bg border-top" style="width: {spaces}mm;" />
	</div>

	<div class="main-card-spaces-block flex start astart no-background">
		<div
			class="main-card-bottom-sides bg border-top opacity-filter"
			style="width: {spaces}mm; height: {spaces}mm;"
		/>
		<div
			class="wmm main-card-sides border-top border-left border-right bg"
			style="height: {spaces}mm;"
		/>
		<div
			class="main-card-sides bg border-top opacity-filter"
			style="width: {spaces}mm; height: {spaces}mm;"
		/>
		<div class="wmm main-card-sides border-top border-left bg" style="height: {spaces}mm;" />
		<div class="main-card-sides" style="width: {spaces}mm; height: {spaces}mm;" />
	</div>
</div>

<style>
	:root {
		--width: 69mm;
		--height: 92mm;
	}
	.wmm {
		width: var(--width);
	}
	.hmm {
		height: var(--height);
	}
	.color {
		color: var(--border-color);
	}
	.bg {
		background-color: var(--bg-color);
	}
	.border-top {
		border-top: 1px solid var(--border-color);
	}
	.border-left {
		border-left: 1px solid var(--border-color);
	}
	.border-right {
		border-right: 1px solid var(--border-color);
	}

	.border-sides {
		border-left: 1px solid var(--border-color);
		border-right: 1px solid var(--border-color);
	}

	.vertical-text.deck-title {
		width: 100%;
		height: 100%;
		text-align: center;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		position: absolute;
		padding: 0 5px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(180deg);
		z-index: 1500;
		font-size: 80px;
		color: var(--border-color);
		text-transform: uppercase;
	}

	.box-upper-place.deck-title.has-extra-character {
		top: 40%;
	}

	.deck-name-frame-cards {
		width: 50%;
		transform: translate(50%, -65%);
		z-index: 15;
	}
	.deck-name-frame-cards p {
		margin: 0;
		padding: 5px 0;
		text-transform: uppercase;
		text-align: center;
		width: 100%;
	}

	.box-upper-place.deck-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
		color: var(--border-color);
		text-transform: uppercase;
		font-size: 70px;
		margin: 0;
		padding: 0;
	}
	.secondary-character {
		position: absolute;
		bottom: -5px;
		left: 0;
		font-size: 16px;
		text-align: end;
		font-family: 'league';
		width: 100%;
		text-transform: uppercase;
		padding: 0 15px;
	}
	.vertical-text.deck-title.rotated {
		transform: translate(-50%, -50%) rotate(180deg);
	}
	.vertical-text.non-rotated.deck-title {
		transform: translate(-50%, -50%);
	}
	.main-card-space {
		width: var(--width);
		height: var(--height);
	}

	.main-card-top-rounded {
		width: var(--width);
		border-radius: 150px 150px 0 0;
	}
	.main-card-space-rounded-first {
		border-radius: 100% 0 0 0;
	}
	.main-card-space-rounded-last {
		border-radius: 0 100% 0 0;
	}

	.card-cutout::after {
		content: '';
		position: absolute;
		top: 0px;
		left: 50%;
		width: 40%;
		height: 25px;
		transform: translateX(-50%);
		border-radius: 0 0 150px 150px;
		border-top: 1px solid #000;
		background-color: #fff;
		z-index: 1550;
	}
	.background-image {
		background-image: url('/cardsback/beowulf.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.bg.opacity-filter {
		position: relative;
		/* opacity: .8; */
	}
	.bg.opacity-filter::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 98%;
		/* create a trapezoid */
		height: 35px;
		background: #eee;
		border: 1px solid var(--bg-color);
		border-top: none;
	}
</style>
