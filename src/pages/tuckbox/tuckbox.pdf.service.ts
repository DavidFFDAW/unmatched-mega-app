import jsPDF from 'jspdf';

export class TuckboxPdfService {
	private doc: jsPDF;
	private tuckbox: string;
	private x = 20;
	private y = 20;
	private sizes = {
		width: 750,
		height: 1050
	};

	constructor({ tuckbox, sizes }: { tuckbox: string; sizes: { width: number; height: number } }) {
		this.doc = new jsPDF({
			format: 'a4',
			unit: 'mm',
			orientation: 'landscape'
		});
		this.tuckbox = tuckbox;
		this.sizes = sizes;
	}

	public generatePDF() {
		console.log({ sizes: this.sizes });

		// add image to pdf
		this.doc.addImage(this.tuckbox, 'jpg', this.x, this.y, this.sizes.width + 1, this.sizes.height);
		return this.doc.output('blob');
	}
}
