<script lang="ts">
	import { PAGES } from '../../unlimited.constants';

	export let deckData: any = {};
	export let decks: any = {
		hand: [],
		discard: [],
		deck: []
	};
	export let currentTab: string = PAGES.hand;
	export let drawCard: any = () => {};

	const setTab = (tab: string) => {
		currentTab = tab;
	};
</script>

<header class="unlimited-head">
	<div class="health flex between acenter gap">
		<div class="health-bar">
			<div
				class="health-bar-fill"
				style="background-color: {deckData?.deck_data.appearance.highlightColour}; color: {deckData
					?.deck_data.appearance.borderColour}"
			>
				<span>
					{deckData?.deck_data.hero.hp}
				</span>
			</div>
		</div>
		<div class="health-text">
			<span>
				{deckData?.deck_data.hero.name}
			</span>
		</div>
	</div>
</header>

<section class="unlimited-decks-buttons flex center acenter gap">
	<button class="unlimited-decks-button hand" on:click={() => setTab(PAGES.hand)}>
		<p class="label-text">Mano</p>
		{decks?.hand?.length}
	</button>
	<button class="unlimited-decks-button discard" on:click={() => setTab(PAGES.discard)}>
		<p class="label-text">Descarte</p>
		{decks?.discard?.length}
	</button>
	<button class="unlimited-decks-button deck" on:click={drawCard}>
		<p class="label-text">Robar</p>
		{decks?.deck?.length}
	</button>
	<button class="unlimited-decks-button info" on:click={() => setTab(PAGES.info)}>
		<p class="label-text">Info</p>
		<span class="league">i</span>
	</button>
</section>

<style>
	header.unlimited-head {
		width: 100%;
		background-color: #282a36;
		padding: 20px;
		margin-bottom: 30px;
		color: #fff;
	}
	header.unlimited-head .health-bar-fill {
		position: relative;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #ddb364 !important;
		color: #030303 !important;
		padding: 20px;
	}
	header.unlimited-head .health-bar-fill span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
