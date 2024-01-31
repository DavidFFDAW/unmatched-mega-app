<script lang="ts">
	export let deckName: string;
	export let secondDeckName: string;
	export let cardFrontImage: string;
	export let cardBackgroundImage: string;
	export let spaces: number;
	export let fontSize: number;
</script>

<div class="total-tuckbox-container tuckbox-container">
	<div class="main-card-top-block flex column astart" style="margin-left: {spaces}mm">
		<div
			class="wmm main-card-top-rounded border-sides border-top bg"
			style="height: {spaces - spaces / 4}mm;"
		/>
	</div>

	<div class="main-card-top-compound flex start aend">
		<div class="wmm relative" style="width: {spaces}mm; height: {spaces}mm;" />
		<div
			class="wmm relative main-card-space border-sides border-top bg"
			style="height: {spaces}mm;"
		>
			<p class="box-upper-place deck-title league" style="font-size: {fontSize}px">
				{deckName}
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
				{secondDeckName}
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
		/>
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
	.wmm {
		width: 69mm;
	}
	.hmm {
		height: 92mm;
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
		height: 100%;
		text-align: center;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(180deg);
		z-index: 1500;
		font-size: 80px;
		color: var(--border-color);
		text-transform: uppercase;
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
	.vertical-text.deck-title.rotated {
		transform: translate(-50%, -50%) rotate(180deg);
	}
	.vertical-text.non-rotated.deck-title {
		transform: translate(-50%, -50%);
	}
	.main-card-space {
		width: 69mm;
		height: 92mm;
	}

	.main-card-top-rounded {
		width: 69mm;
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
		top: -1px;
		left: 50%;
		width: 40%;
		height: 25px;
		transform: translateX(-50%);
		border-radius: 0 0 150px 150px;
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
