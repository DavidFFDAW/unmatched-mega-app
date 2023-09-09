export interface Submenu {
	text: string;
	href: string;
	class: string;
}
export interface Navigation {
	shortText: string;
	text: string;
	icon: string;
	image: string;
	class: string;
	href: string;
	submenu: Submenu[];
}

export const navigation: Navigation[] = [
	{
		shortText: 'Cartas',
		text: 'Traducir cartas',
		icon: '',
		image: '/images/cards-icon.webp',
		class: 'cards',
		href: '/cards',
		submenu: [
			{
				text: 'Traducir cartas',
				class: 'translate',
				href: '/cards'
			},
			{
				text: 'Cartas de personaje',
				class: 'hero',
				href: '/cards/character'
			},
			{
				text: 'Crear carta',
				class: 'card',
				href: '/cards/maker'
			}
		]
	},
	{
		shortText: 'Diales',
		text: 'Diseñar diales',
		icon: '',
		image: '/images/dial.png',
		class: 'dials',
		href: '/dials',
		submenu: []
	},
	{
		shortText: 'Imprimir',
		text: 'Imprimir mazos',
		icon: '',
		image: '/images/printer.webp',
		class: 'printer',
		href: '/print',
		submenu: []
	},
	{
		shortText: 'Trasera',
		text: 'Diseñar parte de atras',
		icon: '',
		image: '/images/card-back-icon.webp',
		class: 'card-back',
		href: '/card-back',
		submenu: []
	},
	{
		shortText: 'UNlimited',
		text: 'UNlimited Decks',
		icon: '',
		image: '/images/unlimited.png',
		class: 'unlimited',
		href: '/unlimited-decks',
		submenu: []
	}
];
