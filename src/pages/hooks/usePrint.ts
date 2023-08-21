import { get, writable } from 'svelte/store';
import type { CardPrint } from '../../models/models';
import { PdfService } from '../services/pdf.service';

export default function usePrint() {
	const initialValue: CardPrint[] = [];
	const cards = writable(initialValue);

	const dragover = (e: DragEvent) => {
		e.preventDefault();
	};

	const addCard = (card: CardPrint) => {
		cards.update((items) => {
			return [...items, card];
		});
	};

	const emptyCards = () => {
		cards.update(() => []);
	};

	const drop = (e: DragEvent) => {
		e.preventDefault();

		if (e.dataTransfer) {
			[...e.dataTransfer.files].forEach((item) => {
				addCard({
					name: item.name,
					url: URL.createObjectURL(item)
				});
			});
		}
	};

	const change = (e: Event) => { 
		e.preventDefault();
		const target = e.target as HTMLInputElement;

		if (target && target.files) {
			[...target.files].forEach((item) => {
				
				addCard({
					name: item.name,
					url: URL.createObjectURL(item)
				});
			});
		}
	};

	const createPDF = (cardBack: string | null) => {
		const pdf = new PdfService({
			cards: get(cards)
		});

		const output = pdf.generatePDF(cardBack);

		window.open(URL.createObjectURL(output));
	};

	return {
		cards,
		functions: {
			dragover,
			addCard,
			emptyCards,
			drop,
			createPDF,
			change
		}
	};
}
