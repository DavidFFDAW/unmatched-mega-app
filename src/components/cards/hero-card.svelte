<script lang="ts">
	interface Sidekick {
		name: string;
		attack: string;
		hp: number;
		quantity: number;
	}
	interface Hero {
		name: string;
		attack: string;
		ability: string;
		hp: number;
		move: number;
	}
	interface HeroCard {
		hero: Hero;
		sidekick: Sidekick;
	}
	export let datas: HeroCard = {
		hero: {
			name: 'Elektra',
			attack: 'melee',
			ability:
				'Cuando Elektra sea derrotada quita a Elektra y a todos los miembros de la mano del tablero. No ha sido derrotada. Al inicio de tu próximo turno, resucítala. Ignora los efectos de RESUCITADA.',
			hp: 7,
			move: 2
		},
		sidekick: {
			quantity: 1,
			name: 'Daredevil',
			attack: 'melee',
			hp: 7
		}
	};
</script>

<div class="zoom-box" style="width: 63mm; height: 88mm;">
	<div style="transform: scale(1); transform-origin: left top;">
		<div data-v-507e7f39="" class="unmatched-card float-left shadow editable">
			<div data-v-507e7f39="" class="main-wrapper">
				<!---->
				<div data-v-507e7f39="" class="hero panel">
					<div data-v-507e7f39="" class="name section">
						<div data-v-507e7f39="" class="gutter"><div data-v-507e7f39="">Hero</div></div>
						<div data-v-507e7f39="" class="content xl">
							<span
								data-v-507e7f39=""
								contenteditable="true"
								class="scale-text"
								style="transform: scaleX(1);">{datas.hero.name}</span
							>
						</div>
					</div>
					<div data-v-507e7f39="" class="attack-health section">
						<div data-v-507e7f39="" class="attack section">
							<div data-v-507e7f39="" class="gutter"><div data-v-507e7f39="">Attack</div></div>
							<div data-v-507e7f39="" class="attack-type">
								<img data-v-507e7f39="" src="/img/melee.d95dac7a.svg" class="melee icon" />
								<div data-v-507e7f39="" class="editor" />
							</div>
						</div>
						<div data-v-507e7f39="" class="health section">
							<div data-v-507e7f39="" class="gutter">
								<div data-v-507e7f39="">Start health</div>
							</div>
							<div data-v-507e7f39="">
								<svg data-v-507e7f39="" width="12.1mm" height="6.7mm" viewBox="0 0 12.1 6.7"
									><path
										data-v-507e7f39=""
										d="
    M 3.45 0.8
    a 11.5 11.5 0 0 1 5.2 0
    l 0 3.2
    l -2.6 2
    l -2.6 -2
    l 0 -3.2"
										stroke="none"
										class="home-plate"
									/><path
										data-v-507e7f39=""
										d="
    M 6.05 5.1
    l 0.7 -0.6
    l -1.4 0
    "
										stroke="none"
										class="indicator"
									/><path
										data-v-507e7f39=""
										d="
    M 0 2.2
    a 11.5 11.5 0 0 1 12.1 0"
										stroke-width="0.2"
										fill="none"
										class="arc"
									/></svg
								>
								<div data-v-507e7f39="" class="hp">
									7 <div data-v-972d88fa="" data-v-507e7f39="" class="up-down-buttons editor">
										<div data-v-972d88fa="" class="valid">
											<span data-v-972d88fa="" class="fa-layers fa-fw"
												><svg
													data-v-972d88fa=""
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="circle"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 512 512"
													class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
													><path
														data-v-972d88fa=""
														fill="currentColor"
														d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
														class=""
													/></svg
												><svg
													data-v-972d88fa=""
													aria-hidden="true"
													focusable="false"
													data-prefix="far"
													data-icon="caret-circle-up"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 512 512"
													class="svg-inline--fa fa-caret-circle-up fa-w-16"
													><path
														data-v-972d88fa=""
														fill="currentColor"
														d="M354.9 296H157.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm48 0c0 110.5 89.5 200 200 200s200-89.5 200-200S366.5 56 256 56 56 145.5 56 256z"
														class=""
													/></svg
												></span
											>
										</div>
										<div data-v-972d88fa="" class="valid">
											<span data-v-972d88fa="" class="fa-layers fa-fw"
												><svg
													data-v-972d88fa=""
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="circle"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 512 512"
													class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
													><path
														data-v-972d88fa=""
														fill="currentColor"
														d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
														class=""
													/></svg
												><svg
													data-v-972d88fa=""
													aria-hidden="true"
													focusable="false"
													data-prefix="far"
													data-icon="caret-circle-down"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 512 512"
													class="svg-inline--fa fa-caret-circle-down fa-w-16"
													><path
														data-v-972d88fa=""
														fill="currentColor"
														d="M157.1 216h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"
														class=""
													/></svg
												></span
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div data-v-507e7f39="" class="abilities panel">
					<div data-v-507e7f39="" class="special section">
						<div data-v-507e7f39="" class="gutter">
							<div data-v-507e7f39="">Special abilities</div>
						</div>
						<div data-v-507e7f39="" class="content">
							<span
								data-v-507e7f39=""
								contenteditable="true"
								class="mixed-case"
								style="white-space: pre-wrap;"
								>{datas.hero.ability}
							</span>
						</div>
					</div>
					<div data-v-507e7f39="" class="move section">
						<div data-v-507e7f39="" class="arrow">
							<svg
								data-v-507e7f39=""
								version="1.0"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 670 12990"
								preserveAspectRatio="none"
								><g data-v-507e7f39="" stroke="none"
									><path
										data-v-507e7f39=""
										d="M177 12699 c-80 -139 -144 -256 -141 -261 3 -4 61 -8 130 -8 l124 0 0 -5935 0 -5935 -124 0 c-69 0 -127 -4 -130 -8 -3 -5 60 -122 141 -261 120 -208 148 -250 159 -239 22 22 291 493 287 500 -2 5 -62 8 -134 8 l-129 0 0 5935 0 5935 129 0 c72 0 132 3 134 8 4 7 -265 478 -287 500 -11 11 -39 -30 -159 -239z"
									/></g
								></svg
							>
						</div>
						<div data-v-507e7f39="" class="move-editor">
							<div data-v-507e7f39="" class="value">{datas.hero.move}</div>
							<div data-v-972d88fa="" data-v-507e7f39="" class="up-down-buttons editor">
								<div data-v-972d88fa="" class="valid">
									<span data-v-972d88fa="" class="fa-layers fa-fw"
										><svg
											data-v-972d88fa=""
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="circle"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
											><path
												data-v-972d88fa=""
												fill="currentColor"
												d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
												class=""
											/></svg
										><svg
											data-v-972d88fa=""
											aria-hidden="true"
											focusable="false"
											data-prefix="far"
											data-icon="caret-circle-up"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											class="svg-inline--fa fa-caret-circle-up fa-w-16"
											><path
												data-v-972d88fa=""
												fill="currentColor"
												d="M354.9 296H157.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm48 0c0 110.5 89.5 200 200 200s200-89.5 200-200S366.5 56 256 56 56 145.5 56 256z"
												class=""
											/></svg
										></span
									>
								</div>
								<div data-v-972d88fa="" class="valid">
									<span data-v-972d88fa="" class="fa-layers fa-fw"
										><svg
											data-v-972d88fa=""
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="circle"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
											><path
												data-v-972d88fa=""
												fill="currentColor"
												d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
												class=""
											/></svg
										><svg
											data-v-972d88fa=""
											aria-hidden="true"
											focusable="false"
											data-prefix="far"
											data-icon="caret-circle-down"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											class="svg-inline--fa fa-caret-circle-down fa-w-16"
											><path
												data-v-972d88fa=""
												fill="currentColor"
												d="M157.1 216h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"
												class=""
											/></svg
										></span
									>
								</div>
							</div>
						</div>
						<div data-v-507e7f39="" class="title">
							<svg
								data-v-507e7f39=""
								version="1.0"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 2790 12100"
								preserveAspectRatio="xMidYMid meet"
								><g data-v-507e7f39="" stroke="none"
									><path
										data-v-507e7f39=""
										d="M67 12003 c-4 -3 -7 -292 -7 -640 l0 -634 32 -14 c18 -7 299 -105 625 -217 325 -111 589 -206 585 -209 -4 -4 -279 -98 -612 -209 -333 -112 -611 -208 -618 -213 -9 -8 -12 -140 -10 -626 l3 -616 1325 0 1325 0 0 470 0 470 -698 5 -698 5 678 243 c373 134 688 250 701 258 22 14 22 15 22 293 0 211 -3 281 -12 288 -11 8 -294 108 -1208 427 l-185 65 691 0 c572 1 694 3 703 15 8 9 10 130 9 427 l-3 414 -1321 3 c-726 1 -1324 -1 -1327 -5z"
									/><path
										data-v-507e7f39=""
										d="M955 8235 c-129 -24 -199 -46 -300 -95 -298 -144 -506 -412 -602 -775 l-36 -140 0 -305 0 -305 36 -140 c117 -441 403 -745 802 -852 99 -27 104 -27 486 -31 429 -4 493 2 663 59 200 67 388 206 513 379 107 148 163 271 215 474 29 114 31 134 36 361 5 271 -2 343 -53 530 -40 145 -83 241 -162 360 -179 270 -426 430 -743 481 -115 19 -753 18 -855 -1z m838 -975 c138 -20 226 -85 264 -193 25 -71 25 -223 0 -293 -37 -107 -127 -175 -254 -194 -87 -12 -747 -13 -833 0 -179 26 -274 144 -273 340 1 196 94 314 268 339 84 12 746 13 828 1z"
									/><path
										data-v-507e7f39=""
										d="M67 5493 c-4 -3 -7 -230 -7 -503 0 -386 3 -500 13 -507 10 -8 1038 -343 1427 -466 l95 -30 -765 -256 -765 -256 -3 -434 c-1 -239 1 -438 6 -443 8 -8 2614 984 2640 1004 18 15 18 901 0 915 -14 11 -2612 983 -2626 983 -5 0 -12 -3 -15 -7z"
									/><path
										data-v-507e7f39=""
										d="M71 2336 c-8 -10 -10 -314 -9 -1132 l3 -1119 345 0 345 0 3 653 2 652 190 0 190 0 2 -427 3 -428 215 0 215 0 3 428 2 427 190 0 190 0 0 -644 c0 -532 2 -646 14 -655 9 -8 117 -11 377 -9 l364 3 3 1119 c1 818 -1 1122 -9 1132 -17 21 -2621 21 -2638 0z"
									/></g
								></svg
							>
						</div>
					</div>
				</div>
				<div data-v-507e7f39="" class="sidekick panel">
					<div data-v-507e7f39="" class="name section">
						<div data-v-507e7f39="" class="gutter"><div data-v-507e7f39="">Sidekick</div></div>
						<div data-v-507e7f39="" class="content xl">
							<span
								data-v-507e7f39=""
								contenteditable="true"
								class="scale-text"
								style="transform: scaleX(1);">{datas.sidekick.name}</span
							>
						</div>
					</div>
					<div data-v-507e7f39="" class="attack-health section">
						<div data-v-507e7f39="" class="attack section">
							<div data-v-507e7f39="" class="gutter"><div data-v-507e7f39="">Attack</div></div>
							<div data-v-507e7f39="" class="attack-type">
								<img data-v-507e7f39="" src="/img/melee.d95dac7a.svg" class="melee icon" />
								<div data-v-507e7f39="" class="editor" />
							</div>
						</div>
						<div data-v-507e7f39="" class="health section">
							<div data-v-507e7f39="" class="gutter">
								<div data-v-507e7f39="">Start health</div>
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
									<span data-v-507e7f39=""> X{datas.sidekick.quantity} </span>
								</div>
								<div data-v-972d88fa="" data-v-507e7f39="" class="up-down-buttons editor">
									<div data-v-972d88fa="" class="valid">
										<span data-v-972d88fa="" class="fa-layers fa-fw"
											><svg
												data-v-972d88fa=""
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="circle"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
												><path
													data-v-972d88fa=""
													fill="currentColor"
													d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
													class=""
												/></svg
											><svg
												data-v-972d88fa=""
												aria-hidden="true"
												focusable="false"
												data-prefix="far"
												data-icon="caret-circle-up"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="svg-inline--fa fa-caret-circle-up fa-w-16"
												><path
													data-v-972d88fa=""
													fill="currentColor"
													d="M354.9 296H157.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm48 0c0 110.5 89.5 200 200 200s200-89.5 200-200S366.5 56 256 56 56 145.5 56 256z"
													class=""
												/></svg
											></span
										>
									</div>
									<div data-v-972d88fa="" class="valid">
										<span data-v-972d88fa="" class="fa-layers fa-fw"
											><svg
												data-v-972d88fa=""
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="circle"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
												><path
													data-v-972d88fa=""
													fill="currentColor"
													d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
													class=""
												/></svg
											><svg
												data-v-972d88fa=""
												aria-hidden="true"
												focusable="false"
												data-prefix="far"
												data-icon="caret-circle-down"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="svg-inline--fa fa-caret-circle-down fa-w-16"
												><path
													data-v-972d88fa=""
													fill="currentColor"
													d="M157.1 216h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"
													class=""
												/></svg
											></span
										>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!---->
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.unmatched-card {
		width: 63mm;
		height: 88mm;
		line-height: normal;
		background: #f7eadb;
		padding: 3mm;
		border-radius: 2.5mm;
	}
	.main-wrapper[data-v-507e7f39] {
		border-radius: 1.5mm;
	}

	.editable .value {
		position: relative;
	}

	.editable .editor {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.unmatched-card,
	.unmatched-card * {
		font-weight: 400;
		font-family: 'bebas', sans-serif;
		print-color-adjust: exact;
		/* -webkit-print-color-adjust: exact; */
		/* color-adjust: exact; */
	}
	.panel[data-v-507e7f39] {
		position: relative;
		height: 19.6mm;
		background: #000;
		color: #fff;
	}
	.panel.hero[data-v-507e7f39] {
		border-radius: 1.5mm 1.5mm 0 0;
	}
	.section.name[data-v-507e7f39] {
		height: 11.5mm;
		border-bottom: 0.4mm solid var(--inner-border-colour);
		padding-top: 1.7mm;
	}
	.gutter[data-v-507e7f39] {
		float: left;
		height: 100%;
		width: 3.9mm;
		border-right: 0.2mm solid var(--inner-border-colour);
		position: relative;
	}
	.gutter div[data-v-507e7f39] {
		color: #fff;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		bottom: 1mm;
		left: 3.4mm;
		white-space: nowrap;
		padding: 0;
		margin: 0;
		transform: rotate(-90deg);
		position: absolute;
		transform-origin: left bottom;
		text-align: left;
		text-transform: uppercase;
		font-size: 2.5mm;
	}
	.panel .content[data-v-507e7f39] {
		height: 100%;
		margin-left: 3.9mm;
		padding-left: 1.7mm;
		padding-right: 1.7mm;
	}

	.panel .xl[data-v-507e7f39] {
		font-size: 9mm;
		white-space: nowrap;
	}
	.editable .content[data-v-507e7f39] {
		cursor: text;
	}
	.panel .content .scale-text[data-v-507e7f39] {
		display: inline-block;
	}
	.section.attack-health[data-v-507e7f39] {
		height: 8.1mm;
	}
	.section.attack-health .section[data-v-507e7f39] {
		padding-top: 1.3mm;
	}
	.attack[data-v-507e7f39] {
		position: relative;
		height: 100%;
		width: 38.6mm;
		float: left;
		border-right: 0.4mm solid var(--inner-border-colour);
	}
	.attack .icon.melee[data-v-507e7f39] {
		width: 78%;
	}
	.attack .icon[data-v-507e7f39] {
		margin-left: 1mm;
		margin-top: -0.8mm;
	}
	.editable .attack .editor[data-v-507e7f39] {
		cursor: pointer;
	}

	.editable[data-v-507e7f39] .editor {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 3;
	}
	.section.attack-health .section[data-v-507e7f39] {
		padding-top: 1.3mm;
	}
	.health[data-v-507e7f39] {
		height: 100%;
		margin-left: 38.6mm;
		position: relative;
	}
	.health svg[data-v-507e7f39] {
		position: absolute;
		bottom: 0;
	}
	.hp[data-v-507e7f39] {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		position: relative;
		text-align: center;
		font-size: 3.8mm;
		margin-top: 0.8mm;
		margin-right: 0.2mm;
		color: var(--contrast-colour);
	}
	.editable[data-v-507e7f39] .hp .editor {
		height: 18mm;
		width: 10mm;
		top: -6.5mm;
		left: 12.5mm;
		visibility: hidden;
	}
	.editable[data-v-507e7f39] .editor {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 3;
	}

	.up-down-buttons .fa-inverse[data-v-972d88fa] {
		color: #fff;
	}
	.fa-layers svg.svg-inline--fa {
		-webkit-transform-origin: center center;
		transform-origin: center center;
	}
	.fa-layers svg.svg-inline--fa {
		bottom: 0;
		left: 0;
		margin: auto;
		position: absolute;
		right: 0;
		top: 0;
	}
	svg:not(:root).svg-inline--fa {
		overflow: visible;
	}
	.svg-inline--fa.fa-w-16 {
		width: 1em;
	}
	@media (prefers-color-scheme: dark) {
		.fa-inverse {
			color: #000;
		}
	}

	.up-down-buttons[data-v-972d88fa] {
		color: #000;
		font-size: 8mm;
	}
	.valid span[data-v-972d88fa] {
		cursor: pointer;
	}
	.health svg .home-plate[data-v-507e7f39] {
		fill: var(--highlight-colour);
	}
	.health svg .indicator[data-v-507e7f39] {
		fill: hsla(0, 0%, 100%, 0.5333333333333333);
	}
	.health svg .arc[data-v-507e7f39] {
		stroke: var(--outer-border-colour);
	}
	.fa-layers svg.svg-inline--fa {
		-webkit-transform-origin: center center;
		transform-origin: center center;
	}
	.fa-layers svg.svg-inline--fa {
		bottom: 0;
		left: 0;
		margin: auto;
		position: absolute;
		right: 0;
		top: 0;
	}
	svg:not(:root).svg-inline--fa {
		overflow: visible;
	}
	.svg-inline--fa.fa-w-16 {
		width: 1em;
	}
	.panel.abilities[data-v-507e7f39] {
		height: 42.4mm;
		border-top: 1mm solid var(--inner-border-colour);
		border-bottom: 1mm solid var(--inner-border-colour);
		background: var(--highlight-colour);
		background-image: var(--background-pattern);
		color: var(--contrast-colour);
	}
	.panel[data-v-507e7f39] {
		position: relative;
		height: 19.6mm;
		background: #000;
		color: #fff;
	}
	.panel.sidekick[data-v-507e7f39] {
		border-radius: 0 0 1.5mm 1.5mm;
	}
	.panel[data-v-507e7f39] {
		position: relative;
		height: 19.6mm;
		background: #000;
		color: #fff;
	}
	.panel.abilities .section[data-v-507e7f39] {
		height: 100%;
		padding-top: 4.7mm;
	}
	.special[data-v-507e7f39] {
		height: 100%;
		width: 47.4mm;
		float: left;
	}
	.panel .content[data-v-507e7f39] {
		height: 100%;
		margin-left: 3.9mm;
		padding-left: 1.7mm;
		padding-right: 1.7mm;
	}
	.editable .content[data-v-507e7f39] {
		cursor: text;
	}
	.special .content span[data-v-507e7f39] {
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	.panel .mixed-case[data-v-507e7f39] {
		font-family: League Gothic, sans-serif;
	}
	.move .arrow[data-v-507e7f39] {
		position: absolute;
		height: 100%;
		left: -0.95mm;
	}
	.move .arrow svg[data-v-507e7f39] {
		height: 100%;
		transform: scaleY(0.95);
		fill: var(--contrast-colour);
	}
	.move .value[data-v-507e7f39] {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		position: relative;
		height: 20mm;
		text-align: center;
		font-size: 18mm;
		transform: scaleX(0.75) scaleY(1.25);
	}
	.editable[data-v-507e7f39] .value + .editor {
		left: 68%;
		height: 50%;
		width: auto;
		visibility: hidden;
	}
	.editable[data-v-507e7f39] .editor {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 3;
	}
	.up-down-buttons[data-v-972d88fa] {
		color: #000;
		font-size: 8mm;
	}
	.move .title[data-v-507e7f39] {
		height: 19.2mm;
		padding-left: 2.5mm;
	}
</style>
