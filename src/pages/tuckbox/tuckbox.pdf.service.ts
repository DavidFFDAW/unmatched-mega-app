import jsPDF from 'jspdf';

export class TuckboxPdfService {
	private doc: jsPDF;
	private tuckbox: string;
	private deckName: string;
	private x = 20;
	private y = 20;

	constructor({ tuckbox, deckName }: { tuckbox: string; deckName: string }) {
		this.doc = new jsPDF({
			format: 'a4',
			unit: 'mm',
			orientation: 'landscape'
		});
		this.tuckbox = tuckbox;
		this.deckName = deckName;
	}

	public generatePDF() {
		// add image to pdf
		this.doc.addImage(this.tuckbox, 'jpg', this.x, this.y, 0, 0);
		return this.doc.output('blob');
	}
}
