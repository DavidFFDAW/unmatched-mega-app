type Navigation = {
	shortText: string;
	text: string;
	icon: string;
	image: string;
	class: string;
	href: string;
};

export const navigation: Navigation[] = [
	{
		shortText: 'Cartas',
		text: 'Traducir cartas',
		icon: '',
		image: '/images/cards-icon.webp',
		class: 'cards',
		href: '/translate'
	},
	{
		shortText: 'Diales',
		text: 'Diseñar diales',
		icon: '',
		image: '/images/dial.png',
		class: 'dials',
		href: '/dials'
	},
	{
		shortText: 'Imprimir',
		text: 'Imprimir mazos',
		icon: '',
		image: '/images/printer.webp',
		class: 'printer',
		href: '/print'
	},
	{
		shortText: 'Trasera',
		text: 'Diseñar parte de atras',
		icon: '',
		image: '/images/card-back-icon.webp',
		class: 'card-back',
		href: '/card-back'
	},
	{
		shortText: 'UNlimited',
		text: 'UNlimited Decks',
		icon: '',
		image: '/images/unlimited.png',
		class: 'unlimited',
		href: '/unlimited-decks'
	}
];
