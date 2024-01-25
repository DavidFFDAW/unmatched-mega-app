export interface TranslateCard {
    name: string;
    image: string;
    backgroundIcon: string;
    title: string;
    character: string;
    line: boolean;
    qty: string;
    characterHeight: string;
    characterNameHeight: string;
    effectsHeight: string;
    inmediate: string;
    during: string;
    after: string;
    rayito: string;
    horizontalLeftCharacter: number;
    effectSpaceWidth: number;
    effectSpaceLeft: number;
    effectsSpaceColor: string;
}

export const initialTranslateCard: TranslateCard = {
    name: 'Dracula',
    image: '',
    backgroundIcon: '',
    title: 'Finta',
    character: 'Cualquiera',
    line: true,
    qty: '1',
    characterHeight: '123',
    characterNameHeight: '80',
    effectsHeight: '113',
    inmediate: '',
    during: '',
    after: '',
    rayito: '',
    horizontalLeftCharacter: 10,
    effectSpaceWidth: 90,
    effectSpaceLeft: 11,
    effectsSpaceColor: '#001622'
};

export interface CardEffectTemplate {
    label: string;
    character?: string;
    qty?: string;
    inmediate: string;
    during: string;
    after: string;
    rayito: string;
}