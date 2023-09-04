<script lang="ts">
	import imageEffect from '../assets/effect-inner.png';
	import nameImage from '../assets/name.png';
	import type { TranslateCard } from '../services/translate-cards.model';

	export let cardData: TranslateCard;
</script>

<div class="flex center acenter box no-bg">
	<div
		id="unmatchedCard"
		class="unmatched card bgimg"
		style="background-image: url({cardData.image});"
	>
		<div id="unmatchedCardCharacter" class="character-name">
			<div class="character-block">
				<img id="unmatchedCharacterImage" src={nameImage} alt="" />
				<p id="unmatchedCardCharacterText" class="character-name-text">{cardData.character}</p>
			</div>
		</div>
		<div id="unmatchedCardInner" class="inner">
			<img id="unmatchedCardInnerEffectImage" class="effect-inner" src={imageEffect} alt="" />
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
							<span id="unmatchedCardInmediatelyText">{cardData.inmediate}</span>
						</p>
					</div>
				{/if}

				{#if !cardData.rayito && cardData.during}
					<div class:active={cardData.during} class="real-effect during" id="unmatchedCardDuring">
						<p>
							<strong class="card-effect-bold"> Durante el combate: </strong>
							<span id="unmatchedCardDuringText">{cardData.during}</span>
						</p>
					</div>
				{/if}

				{#if !cardData.rayito && cardData.after}
					<div class:active={cardData.after} class="real-effect after" id="unmatchedCardAfter">
						<p>
							<strong class="card-effect-bold"> Después del combate: </strong>
							<span id="unmatchedCardAfterText">{cardData.after}</span>
						</p>
					</div>
				{/if}

				{#if cardData.rayito}
					<div class:active={cardData.rayito} class="real-effect rayito" id="unmatchedCardRayito">
						<p>
							<span id="unmatchedCardRayitoText">{cardData.rayito}</span>
						</p>
					</div>
				{/if}
			</section>

			<footer class="card-deck-footer">
				<p style="white-space: nowrap; font-size: 9px; letter-spacing: 0;">
					<span id="unmatchedCardDeckName" style="font-size: 9px; letter-spacing: 0.6px;">
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
	img {
		max-width: 100%;
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
		width: 63mm;
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
	}
	.unmatched.card .inner .effect-inner {
		max-width: 100%;
	}
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
		bottom: 0;
		right: 0;
		/* font-size: 1.8mm; */
		font-size: 2.2mm;
		padding: 2mm 3mm 1mm;
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
		left: 11px;
		width: 41px;
	}

	.character-name img {
		width: 41px;
		height: 123px;
	}
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
