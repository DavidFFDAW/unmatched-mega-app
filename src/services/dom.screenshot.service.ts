import domtoimage from 'dom-to-image';

export function getPngFromElement(element: HTMLElement | null): Promise<string> {
	if (!element) return Promise.reject('No element found');
	return domtoimage.toPng(element);
}

export function downloadPngFromElement(element: HTMLElement | null, name: string) {
	if (!element) return false;

	return getPngFromElement(element).then((dataUrl: string) => {
		const link = document.createElement('a');
		link.download = `${name}.png`;
		link.href = dataUrl;
		document.body.appendChild(link);
		link.click();
		link.remove();

		return dataUrl;
	});
}
