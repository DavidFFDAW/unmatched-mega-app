<script lang="ts">
	import '../assets/circles.css';
	import Alert from '@components/alert.svelte';
	import DialLetters from './dial-letters.svelte';
	import { dials } from './stores/dials.store';
</script>

<Alert />
<div class="__class __container">
	<div class="flex row between align start flex-responsive">
		<div class="w1 panel">
			<div class="opt-group">
				<h3 class="title">Generales</h3>

				<div class="flex row start wrap options">
					<div class="input-container">
						<label for="" class="unmatched custom label">Vida máxima</label>
						<input
							id="maximum_life"
							type="number"
							min="0"
							inputmode="numeric"
							class="unmatched custom input"
							bind:value={$dials.life}
						/>
					</div>
					<div class="input-container">
						<label for="" class="unmatched custom label">Tamaño de círculo</label>
						<input
							id="circle_size"
							type="number"
							min="0"
							value="220"
							inputmode="numeric"
							class="unmatched custom input"
						/>
					</div>
					<div class="input-container">
						<label for="" class="unmatched custom label">Tamaño de letra</label>
						<input
							id="circle_font_size"
							type="number"
							min="0"
							value="16"
							inputmode="numeric"
							class="unmatched custom input"
						/>
					</div>
					<div class="input-container">
						<label for="" class="unmatched custom label">Color de letra</label>
						<input
							id="circle_font_color"
							type="color"
							value="#ffffff"
							class="unmatched custom input"
						/>
					</div>
					<div class="input-container">
						<label for="" class="unmatched custom label">Distancia de letras al borde</label>
						<input
							id="distance_from_border"
							type="number"
							value="21"
							min="0"
							inputmode="numeric"
							class="unmatched custom input"
						/>
					</div>
					<div class="input-container">
						<label for="" class="unmatched custom label">Tipografía</label>
						<select class="unmatched custom input" id="typography">
							<option value="Arial">Arial</option>
							<option value="Arial Black">Arial Black</option>
							<option value="Comic Sans MS">Comic Sans MS</option>
							<option value="Courier New">Courier New</option>
							<option value="Georgia">Georgia</option>
							<option value="Impact">Impact</option>
							<option value="Lucida Console">Lucida Console</option>
							<option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
							<option value="Palatino Linotype">Palatino Linotype</option>
							<option value="Tahoma">Tahoma</option>
							<option value="Times New Roman">Times New Roman</option>
							<option value="Trebuchet MS">Trebuchet MS</option>
							<option value="Verdana">Verdana</option>
							<option value="Segoe UI" selected>Segoe UI</option>
						</select>
					</div>
					<div class="input-container">
						<label for="" class="unmatched custom label">Color de centro de circunferencia</label>
						<input
							id="circunference_center_color"
							type="color"
							value="#ffffff"
							class="unmatched custom input"
						/>
					</div>
					<div class="input-container">
						<label for="" class="unmatched custom label">Grosor de centro de circunferencia</label>
						<input
							id="circunference_center_size"
							type="number"
							value="1"
							min="1"
							inputmode="numeric"
							max="5"
							class="unmatched custom input"
						/>
					</div>
				</div>
			</div>

			<div class="opt-group">
				<h3 class="title">Fondo</h3>

				<div class="flex column start wrap options">
					<div class="input-container">
						<input
							style="width: 5%"
							type="radio"
							name="type-color"
							data-type="SIMPLE"
							data-panel-id="simpleColor"
							class="unmatched custom input"
						/>
						<label for="" class="unmatched custom label">Color simple</label>
					</div>
					<div class="subitem tab" id="simpleColor" style="display: none">
						<div class="input-container no-gap">
							<label for="" class="unmatched custom label">Color de fondo</label>
							<input
								id="circle_background_simple_color"
								type="color"
								value="#000000"
								class="unmatched custom input"
							/>
						</div>
					</div>
					<div class="input-container">
						<input
							style="width: 5%"
							type="radio"
							name="type-color"
							data-type="RADIAL"
							data-panel-id="radialGradient"
							class="unmatched custom input"
						/>
						<label for="" class="unmatched custom label">Color con degradado central</label>
					</div>
					<div class="subitem tab" id="radialGradient" style="display: none">
						<div class="input-container no-gap">
							<div>
								<label for="" class="unmatched custom label">Eje central</label>
								<input
									id="circle_background_gradient_a_color"
									type="color"
									value="#ffffff"
									class="unmatched custom input"
								/>
							</div>
							<div>
								<label for="" class="unmatched custom label">Periferia</label>
								<input
									id="circle_background_gradient_b_color"
									type="color"
									value="#ffffff"
									class="unmatched custom input"
								/>
							</div>
						</div>
					</div>
					<div class="input-container">
						<input
							style="width: 5%"
							type="radio"
							name="type-color"
							data-type="BACKGROUND"
							data-panel-id="customBackground"
							class="unmatched custom input"
						/>
						<label for="" class="unmatched custom label">Imagen de fondo</label>
					</div>
					<div class="subitem tab" id="customBackground" style="display: none">
						<div class="input-container no-gap">
							<div style="position: relative; top: 50%" class="flex center column align dissapear">
								<button class="btn download file container disappear">
									<input
										type="file"
										class="disappear"
										onchange="loadUploadedImage(this,'bg-circle')"
									/>
									Subir imagen
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex between align center">
				<div class="w1">
					<span class="block"><strong>Diámetro: </strong></span>
					<span id="circle_size_cm">5.820833 cm</span>
				</div>

				<div class="w1 flex end">
					<input type="text" class="deck-dial-name" id="deckDialName" />
					<button class="btn download" type="button" onclick="downloadCircles()">Descargar</button>
				</div>
			</div>
		</div>

		<div class="w1 dials">
			<div class="relative flex column align center dials-box">
				<div class="w1 flex center align center row gap down">
					<DialLetters />
					<p>Dial números</p>
				</div>
				<div class="w1 flex center align center row gap down">
					<div class="relative bg circle" id="dialBack">
						<div class="circunference center" />
						<div style="position: relative; top: 50%" class="flex center column align dissapear">
							<button class="btn download file container disappear">
								<input
									type="file"
									class="disappear"
									onchange="loadUploadedImage(this,'dialBack')"
								/>
								Subir imagen
							</button>
							<input
								type="text"
								class="input"
								id="dial_back_background_URL"
								placeholder="PREVIEW (Siempre subir)"
								onchange="loadDialBackImage(this, 'dialBack')"
							/>
						</div>
					</div>
					<p>Parte trasera</p>
				</div>
				<div class="w1 flex center align center row gap">
					<div class="relative bg circle frontal-dial" id="dialFront">
						<div class="circunference center" />
						<div style="position: relative; top: 50%" class="flex center column align dissapear">
							<button class="btn download file container disappear">
								<input
									type="file"
									class="disappear"
									onchange="loadUploadedImage(this,'dialFront')"
								/>
								Subir imagen
							</button>
							<input
								type="text"
								class="input"
								id="dial_back_background_URL"
								placeholder="PREVIEW (Siempre subir)"
								onchange="loadDialBackImage(this, 'dialFront')"
							/>
						</div>
					</div>
					<p>Parte delantera</p>
				</div>
				<!-- <div class="cc foreground" id="fg-circle"></div> -->
			</div>
		</div>
	</div>
</div>
