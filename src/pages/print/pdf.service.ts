import jsPDF from 'jspdf';
import type { CardPrint } from '@models/card.model';

export class PdfService {
    private doc: jsPDF;
    private cards: CardPrint[];
    private ITEMS_PER_PAGE = 8;
    private ITEMS_PER_ROW = 4;
    private CARD_WIDTH = 63.5;
    private CARD_HEIGHT = 88;
    private INSTRUCTION_CARD = '/images/instruct.png';
    private DEFAULT_CHARACTER_CARD = '/images/character-card.png';
    private x = 15;
    private y = 15;

    constructor({ cards }: { cards: CardPrint[] }) {
        this.doc = new jsPDF({
            format: 'a4',
            unit: 'mm',
            orientation: 'landscape',
        });
        this.cards = cards;
    }

    private getPages(): number {
        return Math.ceil(this.cards.length / this.ITEMS_PER_PAGE);
    }

    private getPageContent(page: number): CardPrint[] {
        const start = page > 0 ? page * 8 : 0;
        return this.cards.slice(start, start + 8);
    }

    private getContentRows(content: CardPrint[]) {
        return [content.slice(0, this.ITEMS_PER_ROW), content.slice(this.ITEMS_PER_ROW, this.ITEMS_PER_PAGE)];
    }

    private insertCardToDoc(card: CardPrint) {
        const image = new Image();
        image.src = card.url;
        this.doc.addImage(image, 'jpg', this.x, this.y, this.CARD_WIDTH, this.CARD_HEIGHT);
        this.x += this.CARD_WIDTH + 1;
    }

    private insertRow(row: CardPrint[]) {
        this.x = 20;
        row.forEach((card: CardPrint) => {
            this.insertCardToDoc(card);
        });
    }

    private initializeCoords(): void {
        this.x = 20;
        this.y = 15;
    }

    private getCardsBackArrays(cardBackUrl: string, isFirstPage: boolean, hasCharacterCard: boolean) {
        const cardsBackArray = Array.from({ length: 4 }, () => ({
            name: 'card-back',
            url: cardBackUrl,
        }));
        return [
            cardsBackArray.map((card, index) => {
                if (isFirstPage && hasCharacterCard && index === 3) {
                    return {
                        name: 'character-card-back',
                        url: this.INSTRUCTION_CARD,
                    };
                }

                return card;
            }),
            cardsBackArray,
        ];
    }

    private generateCardBackPage(cardBackUrl: string, isFirstPage: boolean, hasCharacterCard: boolean) {
        this.doc.addPage();
        this.initializeCoords();
        const [firstRow, secondRow] = this.getCardsBackArrays(cardBackUrl, isFirstPage, hasCharacterCard);
        // const content = [...pageCards.fill({ name: 'card-back', url: cardBackUrl })];
        // const [firstRow, secondRow] = this.getContentRows(content as any);

        this.insertRow(firstRow);
        this.y = this.CARD_HEIGHT + 1 + 2 + 15;
        this.insertRow(secondRow);
    }

    private initializeCards(characterCard: string | null) {
        if (characterCard && characterCard !== this.DEFAULT_CHARACTER_CARD) {
            this.cards = [
                {
                    name: 'character-card',
                    url: characterCard,
                },
                ...this.cards,
            ];
        }
    }

    public generatePDF(cardBack: string | null, characterCard: string | null) {
        const hasCharacterCard = Boolean(characterCard && characterCard !== this.DEFAULT_CHARACTER_CARD);
        this.initializeCards(characterCard);
        const numPages: number = this.getPages();

        for (let page = 0; page < numPages; page++) {
            const isFirstPage = page === 0;
            if (page > 0) this.doc.addPage();
            this.initializeCoords();
            // const pageHeight = this.doc.internal.pageSize.getHeight();
            // this.doc.text(pageHeight.toString(), 10, 10);

            const pageCards = this.getPageContent(page);
            const [firstRow, secondRow] = this.getContentRows(pageCards);

            this.insertRow(firstRow);
            this.y = this.CARD_HEIGHT + 1 + 15;
            this.insertRow(secondRow);

            if (cardBack) {
                this.generateCardBackPage(cardBack, isFirstPage, hasCharacterCard);
            }
        }

        return this.doc.output('blob');
    }
}
