<script lang="ts">
	import Alert from '../../components/alert.svelte';
	import { downloadPngFromElement } from '../../services/dom.screenshot.service';
	import imageEffect from '../assets/effect-inner.png';
	import nameImage from '../assets/name.png';

	let cardData: any = {
		name: '',
		image: '',
		title: 'Finta',
		character: 'Cualquiera',
		line: false,
	}

	const setCardBackground = (event: Event) => {
		event.preventDefault();

		const target = event.target as HTMLInputElement;
		
		if (target.files) {
			const file = target.files[0];
			cardData.image = URL.createObjectURL(file);
		}
	}

	const setData = (key: string, value: string) => {
		if (value) {
			cardData[key] = value;
		}
	}

	const downloadCard = () => {
		return downloadPngFromElement(document.getElementById('unmatchedCard'), 'unmatched-card');
	}

</script>

<Alert />
<div id="fullBgGrey" class="full-bg-grey" style="display: none" />
<div class="flex boxed-content">
	<div class="w1 flex between total flex-responsive">
		<div class="box">
			<div class="flex col">
				<div class="input-file-wrapper">
					<input accept="images/*" type="file" on:change={setCardBackground} />
					<span>Cargar carta</span>
				</div>
				<!-- <div class="input-file-wrapper">
					<input accept="images/*" type="file" onchange="selectInnerEffectImage(event, this)" />
					<span>Imagen de efecto</span>
				</div> -->

				<div class="inputs-group">
					<div class="form-item">
						<label for="">Nombre del mazo</label>
						<input
							id="panelDeckName"
							class="custom uppercase"
							type="text"
							on:input={(e) => setData('name', e?.target?.value)}
						/>
					</div>
					<div class="form-item">
						<label for="">Titulo</label>
						<input
							id="panelCardTitle"
							class="custom uppercase"
							type="text"
							on:input={(e) => setData('title', e?.target?.value)}
						/>
					</div>

					<div class="form-item">
						<label for="">Altura de efectos</label>
						<input
							class="custom uppercase"
							type="number"
							onchange="setEffectHeight(this)"
							placeholder="113"
							min="113"
							value="113"
						/>
					</div>

					<div class="form-item">
						<span>¿Tiene linea?</span>
						<!-- Rounded switch -->
						<label class="switch">
							<input type="checkbox" on:change={(e) => setData('line', !cardData.line)} checked />
							<span class="slider round" />
						</label>
					</div>

					<div>
						<label for="">Numero de cartas</label>
						<input type="radio" name="number" value="1" onchange="setCardQuantity(1)" />1
						<input type="radio" name="number" value="2" onchange="setCardQuantity(2)" />2
						<input type="radio" name="number" value="3" onchange="setCardQuantity(3)" />3
						<input type="radio" name="number" value="4" onchange="setCardQuantity(4)" />4
						<input type="radio" name="number" value="5" onchange="setCardQuantity(5)" />5
					</div>

					<div class="form-item">
						<label for="">Personaje de carta</label>
						<input
							id="unmatchedCardCharacterTextInput"
							class="custom uppercase"
							type="text"
							placeholder="Cualquiera"
							value="Cualquiera"
							on:input={(e) => setData('character', e?.target?.value)}
						/>
					</div>

					<div class="form-item">
						<label for="">Altura de personaje</label>
						<input
							id="unmatchedCardCharacterTextInputHeight"
							class="custom uppercase"
							type="number"
							onchange="setCharacterNameHeight(this)"
							placeholder="123"
							value="123"
							min="0"
						/>
					</div>

					<div class="form-item">
						<label for="">Altura de nombre de personaje</label>
						<input
							id="unmatchedCardCharacterTextInputHeight"
							class="custom uppercase"
							type="number"
							onchange="setCharacterNameHHgHeight(this)"
							placeholder="80"
							min="65"
						/>
					</div>
				</div>

				<h2>Efectos</h2>

				<div class="input-groups">
					<div class="form-item column">
						<label for="">Inmediatamente</label>
						<textarea
							id="inmediatelyTextarea"
							class="custom"
							onchange="setInmediateEffect(this)"
						/>
						<input
							type="color"
							id="inmediateEffectColor"
							onchange="setEffectColor(this, 'inmediately')"
						/>
					</div>
					<div class="form-item column">
						<label for="">Durante del combate</label>
						<textarea
							id="duringCombatyTextarea"
							class="custom"
							type="text"
							onchange="setDuringCombatEffect(this)"
						/>
						<input
							type="color"
							id="duringCombatEffectColor"
							onchange="setEffectColor(this, 'during')"
						/>
					</div>
					<div class="form-item column">
						<label for="">Despues del combate</label>
						<textarea
							id="afterCombatTextarea"
							class="custom"
							type="text"
							onchange="setAfterCombatEffect(this)"
						/>
						<input
							type="color"
							id="afterCombatEffectColor"
							onchange="setEffectColor(this, 'after')"
						/>
					</div>
					<div class="form-item column">
						<label for="">Ingenio (rayito)</label>
						<textarea
							id="rayitoTextarea"
							class="custom"
							type="text"
							onchange="setRayitoEffect(this)"
						/>
						<input type="color" id="rayitoEffectColor" onchange="setEffectColor(this, 'rayito')" />
					</div>
				</div>

				<h2>Cartas conocidas</h2>
				<div class="flex">
					<button class="" type="button" onclick="setTemplateCard('feint')"> Finta </button>
					<button class="" type="button" onclick="setTemplateCard('regroup')"> Regroup </button>
					<button class="" type="button" onclick="setTemplateCard('skirmish')"> Escaramuza </button>
				</div>

				<button type="button" class="btn" on:click={downloadCard}> Descargar </button>
			</div>
		</div>
		<div class="flex box no-bg">
			<div id="unmatchedCard" class="unmatched card bgimg" style="background-image: url({cardData.image});">
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
					<div class:hidden={cardData.line} class="card-title-line" id="unmatchedCardTitleLine" />

					<section class="card-real-effects" id="unmatchedCardRealEffectsContainer">
						<div class="real-effect inmediately" id="unmatchedCardInmediately">
							<p>
								<strong class="card-effect-bold"> De inmediato: </strong>
								<span id="unmatchedCardInmediatelyText" />
							</p>
						</div>
						<div class="real-effect during" id="unmatchedCardDuring">
							<p>
								<strong class="card-effect-bold"> Durante el combate: </strong>
								<span id="unmatchedCardDuringText" />
							</p>
						</div>
						<div class="real-effect after" id="unmatchedCardAfter">
							<p>
								<strong class="card-effect-bold"> Después del combate: </strong>
								<span id="unmatchedCardAfterText" />
							</p>
						</div>
						<div class="real-effect rayito" id="unmatchedCardRayito">
							<p>
								<span id="unmatchedCardRayitoText" />
							</p>
						</div>
					</section>

					<footer class="card-deck-footer">
						<p style="white-space: nowrap; font-size: 9px; letter-spacing: 0;">
							<span id="unmatchedCardDeckName" style="font-size: 9px; letter-spacing: 0.6px;">
								{cardData.name}
							</span>
							| <span id="unmatchedCardQuantity" style="letter-spacing: 1px;" />
						</p>
					</footer>
				</div>
			</div>
		</div>
	</div>
</div>

<dialog id="previewModal">
	<div id="previewModalContent" />
	<div class="flex between">
		<button class="btn" onclick="hideDialog()">Cerrar</button>
		<button class="btn" onclick="realDownloadCard()"> Descargar </button>
	</div>
</dialog>

<style>
	* {
		box-sizing: border-box;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.w1 {
		width: 100%;
	}
	.flex {
		display: flex;
		justify-content: center;
		gap: 10px;
	}
	.flex.between {
		justify-content: space-between;
	}
	.flex.col {
		flex-direction: column;
	}
	.flex.between.total > * {
		width: 100%;
	}
	.boxed-content {
		margin: 0 auto;
		/* padding: 0 10px; */
		max-width: 1400px;
	}
	img {
		max-width: 100%;
	}
	.uppercase {
		text-transform: uppercase;
	}
	#fullBgGrey.full-bg-grey {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		z-index: 20;
		top: 0;
		left: 0;
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
	.input-file-wrapper {
		display: inline;
		position: relative;
		min-height: 20px;
		padding: 10px 20px;
		background-color: #558dca;
		border-radius: 4px;
		border: none;
		outline: none;
		cursor: pointer;
	}
	div.input-file-wrapper input[type='file'] {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	div.input-file-wrapper span {
		color: #fff;
	}

	.inputs-group {
		margin-top: 20px;
	}
	.form-item {
		margin: 10px 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 15px;
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
		font-family: Archivo Narrow, sans-serif;
	}
	.real-effect {
		position: relative;
	}

	dialog {
		border: none;
		padding: 25px;
		transition: all 0.2s ease-in-out;
	}

	dialog[open] {
		animation: show 1s ease normal;
	}
	.form-item.column {
		justify-content: start;
		flex-direction: column;
		align-items: start;
		gap: 5px;
	}
	textarea.custom {
		display: block;
		width: 100%;
		height: 100px;
		text-transform: none;
	}

	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
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
	.unmatched.card .inner .inner-effect-image {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100px;
	}
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

	.switch {
		position: relative;
		display: inline-block;
		width: 55px;
		height: 20px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 12px;
		width: 12px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(35px);
		-ms-transform: translateX(35px);
		transform: translateX(35px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}

	/* Media query for mobiles */
	@media only screen and (max-width: 768px) {
		.flex.between.total.flex-responsive {
			flex-wrap: nowrap;
			flex-direction: column-reverse;
			gap: 30px;
		}
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
