<script lang="ts">
	// import imageEffect from '../assets/effect-inner.png';
	// import nameImage from '../assets/name.png';
	import type { TranslateCard } from '../translate-cards.model';

	export let cardData: TranslateCard;
</script>

<div class="flex center acenter box no-bg">
	<div
		id="unmatchedCard"
		class="unmatched card bgimg"
		style="background-image: url({cardData.image});"
	>
		<div id="unmatchedCardCharacter" class="character-name">
			<div class="character-block" style="left: {cardData.horizontalLeftCharacter}px">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 22.79034 66.745041"
					version="1.1"
					id="unmatchedCharacterImage"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs id="defs1" />
					<g transform="translate(-10.015949,-38.617026)">
						<path
							style="display:inline;fill: {cardData.effectsSpaceColor};fill-opacity:1;stroke-width:0.263581"
							d="m 10.212813,38.635885 -0.05116,0.148311 0.0031,28.25719 0.0031,0.0036 v 0.927592 l -0.113688,0.10542 0.113688,0.0615 v 10.007141 h 0.0021 l 0.0021,19.083073 0.03152,0.03876 0.03876,0.836125 -0.180868,0.169499 7.462594,4.066934 0.01395,0.37259 3.172416,1.78955 11.304736,-6.783046 -0.08837,-27.142529 -0.251664,-0.198437 V 67.72609 l 0.332796,-0.197921 -0.08837,-26.937374 -0.607198,-0.474906 -0.03049,-1.449524 -4.046265,2.623612 -6.491077,3.64939 -0.255798,0.06356 -10.008175,-6.029606 z"
						/>
						<path
							style="display:inline;fill:#fbf5d8;fill-opacity:1;stroke-width:0.264583"
							d="m 31.323669,68.660413 0.0031,0.839225 -0.0124,5.17e-4 v 19.356953 8.139557 l -0.09043,0.25993 -10.472229,6.192405 -10.729061,-6.031175 -0.0067,1.749257 10.559046,6.194988 0.452168,-0.045 11.734168,-6.986675 v -0.32556 l 0.04496,-0.15141 -0.223759,-28.40964 -0.03617,0.0057 -0.0026,-0.789099 z m -21.273636,21.796085 -0.02636,6.718457 0.04857,-0.12093 z"
						/>
						<rect
							style="display:inline;fill:#fbf5d8;fill-opacity:1;stroke-width:0.553304"
							id="rect7"
							width="1.2774436"
							height="31.393669"
							x="31.303022"
							y="38.617027"
						/>
					</g>
				</svg>
				<!-- <img id="unmatchedCharacterImage" src={nameImage} alt="" /> -->
				<p id="unmatchedCardCharacterText" class="character-name-text">{cardData.character}</p>
			</div>
		</div>
		<div id="unmatchedCardInner" class="inner" style="width: {cardData.effectSpaceWidth}%; left: {cardData.effectSpaceLeft}px">
			<svg
				id="unmatchedCardInnerEffectImage"
				class="effect-inner"
				width="120.68767mm"
				height="113px"
				viewBox="0 0 120.68767 61.106125"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				<defs id="defs1" />
				<g transform="translate(-10.217513,-121.00657)">
					<path
						style="display:inline;fill:{cardData.effectsSpaceColor};fill-opacity:1;stroke-width:0.264583"
						d="m 130.77393,121.00657 -3.15278,0.007 a 7.9133682,8.2751217 0 0 1 -7.83518,7.13755 7.9133682,8.2751217 0 0 1 -7.83363,-7.10241 l -101.732809,0.22893 c -0.02839,-0.0505 0.252181,51.85006 0.252181,51.85006 0,0 -0.159874,3.58108 0,6.0911 0.159874,2.51002 2.670121,2.89389 2.670121,2.89389 0,0 112.487257,-0.24 115.077217,-0.3359 2.58998,-0.0959 2.68614,-2.78174 2.68614,-2.78174 z"
					/>
				</g>
			</svg>

			{#if Boolean(cardData.backgroundIcon)}
				<img
					src={cardData.backgroundIcon}
					class="effects-block-background-icon"
					alt="effects text block background icon"
				/>
			{/if}
			<!-- <img id="unmatchedCardInnerEffectImage" class="effect-inner" src={imageEffect} alt="" /> -->
		</div>
		<div class="inner inner-texts" id="unmatchedCardInnerTexts">
			<h3 id="unmatchedCardTitle" class="card-title uppercase">{cardData.title}</h3>
			<div class:hidden={!cardData.line} class="card-title-line" id="unmatchedCardTitleLine" />

			<section class="card-real-effects" id="unmatchedCardRealEffectsContainer">
				{#if !cardData.rayito && cardData.inmediate}
					<div
						class:active={cardData.inmediate}
						class="real-effect inmediately"
						id="unmatchedCardInmediately"
					>
						<p>
							<strong class="card-effect-bold"> De inmediato: </strong>
							<span id="unmatchedCardInmediatelyText" class="prewrap">{cardData.inmediate}.</span>
						</p>
					</div>
				{/if}

				{#if !cardData.rayito && cardData.during}
					<div class:active={cardData.during} class="real-effect during" id="unmatchedCardDuring">
						<p>
							<strong class="card-effect-bold"> Durante el combate: </strong>
							<span id="unmatchedCardDuringText" class="prewrap">{cardData.during}.</span>
						</p>
					</div>
				{/if}

				{#if !cardData.rayito && cardData.after}
					<div class:active={cardData.after} class="real-effect after" id="unmatchedCardAfter">
						<p>
							<strong class="card-effect-bold"> Después del combate: </strong>
							<span id="unmatchedCardAfterText" class="prewrap">{cardData.after}.</span>
						</p>
					</div>
				{/if}

				{#if cardData.rayito}
					<div class:active={cardData.rayito} class="real-effect rayito" id="unmatchedCardRayito">
						<p>
							<span id="unmatchedCardRayitoText" class="prewrap">{cardData.rayito}.</span>
						</p>
					</div>
				{/if}
			</section>

			<footer class="card-deck-footer">
				<p style="white-space: nowrap; font-size: 8px; letter-spacing: 0;">
					<span id="unmatchedCardDeckName" style="font-size: 8px; letter-spacing: 0.6px;">
						{cardData.name}
					</span>
					|
					<span id="unmatchedCardQuantity" style="letter-spacing: 1px;">
						<span style="font-size: 6px;">X</span>{cardData.qty}
					</span>
				</p>
			</footer>
		</div>
	</div>
</div>

<style>
	svg {
		max-width: 100%;
	}
	svg#unmatchedCardInnerEffectImage {
		width: 100%;
		height: 95%;
	}
	.uppercase {
		text-transform: uppercase;
	}
	.box {
		border-radius: 10px;
		min-width: 450px;
		min-height: 50px;
		background-color: #fff;
		border: none;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		outline: none;
		padding: 20px;
	}
	.box.no-bg {
		box-shadow: none;
		background-color: transparent;
	}
	.card-real-effects {
		margin-top: 2px;
		padding: 2px 0;
		color: #fff;
	}
	.card-real-effects p,
	.card-real-effects p strong {
		margin: 0;
		font-weight: 400;
		line-height: 15px;
		font-family: bebas, sans-serif;
	}
	.card-real-effects p {
		margin: 1px 0;
	}
	.card-real-effects p strong {
		margin: 0;
		font-size: 3.7mm;
		text-transform: uppercase;
	}
	.card-real-effects p span {
		margin: 0;
		font-size: 3.3mm;
		font-family: narrow, sans-serif;
	}
	.real-effect {
		position: relative;
	}

	/* UNMATCHED CARD CSS */
	.unmatched.card {
		position: relative;
		width: 63.5mm;
		height: 88mm;
		background-color: antiquewhite;
		border-radius: 10px;
	}
	.bgimg {
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-clip: border-box;
	}
	.unmatched.card .inner {
		font-weight: 400;
		font-family: bebas, sans-serif;
		/* position: relative; */
		position: absolute;
		bottom: 6px;
		left: 12px;
		width: 90%;
		height: 113px;
		overflow: hidden;
	}
	.unmatched.card .inner .effect-inner {
		max-width: 100%;
	}
	.unmatched.card .inner img.effects-block-background-icon {
		position: absolute;
		width: 45%;
		height: 70%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	/* .unmatched.card .inner .effects-block-background-icon img {
		width: 45%;
		height: 70%;
	} */
	/* .unmatched.card .inner .inner-effect-image {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100px;
	} */
	.unmatched.card .inner.inner-texts {
		padding: 2mm 3mm 1mm;
	}
	.unmatched.card .inner-texts .card-title {
		color: #fff;
		font-weight: 400;
		font-family: bebas, sans-serif;
		font-size: 1.1em;
		text-transform: uppercase;
	}
	.unmatched.card .inner-texts .card-title-line {
		width: 100%;
		border-bottom: 1px solid #fff;
		height: 1px;
	}
	.unmatched.card .inner .card-deck-footer {
		color: #fff;
		position: absolute;
		bottom: 5px;
		right: 11px;
		/* font-size: 1.8mm; */
		font-size: 2.2mm;
		/* padding: 2mm 3mm 1mm; */
	}
	.unmatched.card .inner .card-deck-footer p,
	.unmatched.card .inner .card-deck-footer span {
		font-weight: 400;
		font-family: bebas, sans-serif;
	}
	.unmatched.card .inner .card-deck-footer p {
		letter-spacing: 1px;
		font-size: 10px;
		margin: 0 0 5px 0;
	}
	.real-effect {
		display: none;
	}
	.real-effect.active {
		display: block;
	}
	.character-name {
		position: relative;
		width: 100%;
		/* top: 59px; */
		/* left: 10px; */
	}
	/* .character-name-text {
    white-space: nowrap;
    color: #fff;
    padding: 0;
    margin: 0;
    transform: rotate(-90deg);
    position: absolute;
    transform-origin: right bottom;
    text-align: right;
    text-transform: uppercase;
    font-size: 6mm;
    /* bottom: 29.5mm; 
    top: 5%;
    right: 4.5mm;
    font-weight: 400;
    font-family: BebasNeueRegular, sans-serif;
    transform: translateY(-50%) rotate(-90deg) scaleX(1);
    color: #fff;
    /* transform: translate(0, -50%) rotate(-90deg); 
} */
	.character-block {
		position: absolute;
		top: 66px;
		left: 10px;
		width: 41px;
	}

	/* .character-name img {
		width: 41px;
		height: 123px;
	} */
	.character-name-text {
		position: absolute;
		color: #fff;
		font-weight: 400;
		font-family: bebas, sans-serif;
		top: 50%;
		left: 50%;
		text-transform: uppercase;
		font-size: 6mm;
		transform: translate(-50%, -50%) rotate(-90deg) scaleX(1);
		margin: 0;
		text-align: center;
		width: 123px;
	}

	/* Media query for mobiles */
	@media only screen and (max-width: 768px) {
		.box {
			width: 100%;
			height: 100%;
			min-width: unset;
			min-height: unset;
			margin: 0;
			padding: 0;
		}
	}
</style>
