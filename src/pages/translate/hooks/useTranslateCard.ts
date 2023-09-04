import { get, writable } from 'svelte/store';
import {
	downloadPngFromElement,
	getPngFromElement
} from '../../../services/dom.screenshot.service';
import { initialTranslateCard } from '../translate-cards.model';

export const cardData = writable(initialTranslateCard);

const setCardBackground = (event: Event) => {
	event.preventDefault();

	const target = event.target as HTMLInputElement;

	if (target.files) {
		const file = target.files[0];
		const storedCardData = get(cardData);
		storedCardData.image = URL.createObjectURL(file);
	}
};

const setEffectHeight = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const numb = Number(target.value);

	const unmatchedCardInnerDiv = document.getElementById('unmatchedCardInner');
	const unmatchedCardInnerTexts = document.getElementById('unmatchedCardInnerTexts');
	const unmatchedCardInnerEffectImage = document.getElementById('unmatchedCardInnerEffectImage');

	if (unmatchedCardInnerDiv && unmatchedCardInnerTexts && unmatchedCardInnerEffectImage) {
		unmatchedCardInnerDiv.style.height = `${numb}px`;
		unmatchedCardInnerTexts.style.height = `${numb}px`;
		unmatchedCardInnerEffectImage.style.height = `${numb - 5}px`;
	}
};

const setCharacterHeight = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const value = target.value;

	const character = document.getElementById('unmatchedCharacterImage');
	if (character) {
		character.style.height = `${value}px`;
	}
};

const setCharacterNameHeight = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const value = target.value;

	const characterName = document.getElementById('unmatchedCardCharacterText');
	if (characterName) {
		characterName.style.width = `${value}px`;
	}
};

const downloadCard = () => {
	const storedCard = get(cardData);
	const imagePromise = getPngFromElement(document.getElementById('unmatchedCard'));

	imagePromise.then((dataUrl: string) => {
		console.log({ topng: dataUrl });

		fetch('https://bigjpg.com/api/task/', {
			body: JSON.stringify({
				style: 'art',
				noise: '3',
				x2: '1',
				input: dataUrl
			}),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'X-Api-Key': 'ab9c0a5f69f240e790af9aa4f989d1cb'
			},
			method: 'POST',
			mode: 'cors'
		})
			.then((response) => response.json())
			.then((data) => {
				console.log({ bigjpg: data });

				const downloadUrl = data.task_url;
				const link = document.createElement('a');
				link.download = `${storedCard.name}-${storedCard.title.toLowerCase()}.png`;
				link.href = downloadUrl;
				document.body.appendChild(link);
				link.click();
				link.remove();
			});
	});

	// return downloadPngFromElement(
	// 	document.getElementById('unmatchedCard'),
	// 	`${storedCard.name}-unmatched-${storedCard.title.toLowerCase()}`
	// );
};

const setFeintTemplate = () => {
	cardData.set({
		...get(cardData),
		title: 'Finta',
		character: 'Cualquiera',
		line: true,
		qty: '3',
		inmediate: 'Cancela todos los efectos de la carta de tu oponente.',
		during: '',
		after: '',
		rayito: ''
	});
};
const setSkirmishTemplate = () => {
	cardData.set({
		...get(cardData),
		title: 'Escaramuza',
		character: 'Cualquiera',
		line: true,
		qty: '3',
		inmediate: '',
		during: '',
		after:
			'Si has ganado el combate, elige uno de los luchadores que haya combatido y muevelo un máximo de 2 casillas.',
		rayito: ''
	});
};
const setRegroupTemplate = () => {
	cardData.set({
		...get(cardData),
		title: 'Reagrupar',
		character: 'Cualquiera',
		line: true,
		qty: '3',
		inmediate: '',
		during: '',
		after: 'Roba 1 carta. Si has ganado el combate, roba 2 cartas en vez de 1.',
		rayito: ''
	});
};
const setMomentousShiftTemplate = () => {
	cardData.set({
		...get(cardData),
		title: 'Giro trascendental',
		character: 'Cualquiera',
		line: true,
		qty: '3',
		inmediate: '',
		during:
			'Si tu luchador ha empezado el turno en una casilla distinta, el valor de esta carta pasa a ser 5.',
		after: '',
		rayito: ''
	});
};
const setABocajarroTemplate = () => {
	const stored = get(cardData);
	cardData.set({
		...stored,
		title: 'A bocajarro',
		character: stored.name,
		line: true,
		qty: '3',
		inmediate: '',
		during: '',
		after:
			'Si el luchador enemigo está adyacente a tu luchador, haz 2 puntos de daño a ese luchador.',
		rayito: ''
	});
};
const setWillyFightingTemplate = () => {
	cardData.set({
		...get(cardData),
		title: 'Contrincante Hábil',
		character: 'Cualquiera',
		line: true,
		qty: '2',
		inmediate: '',
		during: '',
		after: 'Haz 1 punto de daño a cada luchador enemigo adyacente a tu luchador.',
		rayito: ''
	});
};
const setBattleHardenedTemplate = () => {
	cardData.set({
		...get(cardData),
		title: 'Curtido en la batalla',
		character: 'Cualquiera',
		line: true,
		qty: '2',
		inmediate: '',
		during: '',
		after: 'Elige una carta de tu pila de descarte y devuélvela a tu mano.',
		rayito: ''
	});
};

export const functions = {
	setCardBackground,
	setEffectHeight,
	setCharacterHeight,
	setCharacterNameHeight,
	downloadCard,
	setFeintTemplate,
	setSkirmishTemplate,
	setRegroupTemplate,
	setMomentousShiftTemplate,
	setABocajarroTemplate,
	setWillyFightingTemplate,
	setBattleHardenedTemplate
};
