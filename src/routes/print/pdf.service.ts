import jsPDF from 'jspdf';
import type { CardPrint } from '../../models/models';

export class PdfService {
	private doc: jsPDF;
	private cards: CardPrint[];
	private ITEMS_PER_PAGE = 8;
	private ITEMS_PER_ROW = 4;
	private CARD_WIDTH = 63.5;
	private CARD_HEIGHT = 88;
	private x = 15;
	private y = 15;

	constructor({ cards }: { cards: CardPrint[] }) {
		this.doc = new jsPDF({
			format: 'a4',
			unit: 'mm',
			orientation: 'landscape'
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
		return [
			content.slice(0, this.ITEMS_PER_ROW),
			content.slice(this.ITEMS_PER_ROW, this.ITEMS_PER_PAGE)
		];
	}

	private insertCardToDoc(card: CardPrint) {
		const image = new Image();
		image.src = card.url;
		this.doc.addImage(image, 'jpg', this.x, this.y, this.CARD_WIDTH, this.CARD_HEIGHT);
		this.x += this.CARD_WIDTH + 1;
	}

	private insertRow(row: CardPrint[]) {
		this.x = 15;
		row.forEach((card: CardPrint) => {
			this.insertCardToDoc(card);
		});
	}

	private initializeCoords(): void {
		this.x = 15;
		this.y = 15;
	}

	public generatePDF() {
		const numPages: number = this.getPages();

		for (let page = 0; page < numPages; page++) {
			if (page > 0) this.doc.addPage();
			this.initializeCoords();

			const pageCards = this.getPageContent(page);
			const [firstRow, secondRow] = this.getContentRows(pageCards);

			this.insertRow(firstRow);
			this.y = this.CARD_HEIGHT + 1 + 15;
			this.insertRow(secondRow);
		}

		return this.doc.output('blob');
	}
}
