import { get, writable } from 'svelte/store';
import { downloadPngFromElement } from '../../../services/dom.screenshot.service';
import { initialTranslateCard } from './translate-cards.model';

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
    const numb: number = Number(target.value);

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

    return downloadPngFromElement(
        document.getElementById('unmatchedTranslateCard'),
        `${storedCard.name}-unmatched-${storedCard.title}`,
    );
};

export const functions = {
    setCardBackground,
    setEffectHeight,
    setCharacterHeight,
    setCharacterNameHeight,
    downloadCard,
};
