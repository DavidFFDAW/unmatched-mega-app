import { get, writable } from 'svelte/store';
import { downloadScaledVersionOfElement } from '../../../services/dom.screenshot.service';
import { initialTranslateCard, type CardEffectTemplate } from '../translate-cards.model';

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

	return downloadScaledVersionOfElement(
		document.getElementById('unmatchedCard'),
		`${storedCard.name}-unmatched-${storedCard.title.toLowerCase().replace(/ /g, '-')}`,
		3
	);

	// return downloadPngFromElement(
	// 	document.getElementById('unmatchedCard'),
	// 	`${storedCard.name}-unmatched-${storedCard.title.toLowerCase().replace(/ /g, '-')}`
	// );
};

const setCardTemplate = (templateCard: CardEffectTemplate) => {
	return cardData.update((card) => {
		const realCharacter = templateCard.character || card.character;
		const hasLine =
			Boolean(templateCard.inmediate) ||
			Boolean(templateCard.during) ||
			Boolean(templateCard.after) ||
			Boolean(templateCard.rayito);
		return {
			...card,
			title: templateCard.label,
			character: realCharacter,
			line: hasLine,
			qty: templateCard.qty || card.qty,
			inmediate: templateCard.inmediate,
			during: templateCard.during,
			after: templateCard.after,
			rayito: templateCard.rayito
		};
	});
};

function emptyEffects() {
	cardData.update((data) => ({
		...data,
		inmediate: '',
		during: '',
		after: '',
		rayito: ''
	}));
}

export const functions = {
	setCardBackground,
	setEffectHeight,
	setCharacterHeight,
	setCharacterNameHeight,
	downloadCard,
	setCardTemplate,
	emptyEffects,
	setHorizontalLeftCharacter: (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;

		cardData.update((data) => {
			data.horizontalLeftCharacter = Number(value);
			return data;
		});
	},
	setEffectSpaceWidth: (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;

		cardData.update((data) => {
			data.effectSpaceWidth = Number(value);
			return data;
		});
	}
};
