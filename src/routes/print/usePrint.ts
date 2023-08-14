import { get, writable } from 'svelte/store';
import type { CardPrint } from '../../models/models';
import { PdfService } from './pdf.service';

export default function usePrint() {
    const initialValue: CardPrint[] = [];
    const cards = writable(initialValue);

    const dragover = (e: DragEvent) => {
        e.preventDefault();
    };

    const addCard = (card: CardPrint) => {
        cards.update(items => {
            return [...items, card];
        });
    };

    const emptyCards = () => {
        cards.update(() => []);
    };

    const drop = (e: DragEvent) => {
        e.preventDefault();

        if (e.dataTransfer) {
            [...e.dataTransfer.files].forEach(item => {
                addCard({
                    name: item.name,
                    url: URL.createObjectURL(item),
                });
            });
        }
    };

    const createPDF = () => {
        const pdf = new PdfService({
            cards: get(cards),
        });

        const output = pdf.generatePDF();

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
        },
    };
}
