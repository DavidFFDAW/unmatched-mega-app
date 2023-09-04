export interface TranslateCard {
    name: string;
    image: string;
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
}

export const initialTranslateCard: TranslateCard = {
    name: 'Dracula',
    image: '',
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
};
