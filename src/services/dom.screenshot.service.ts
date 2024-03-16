import domtoimage from 'dom-to-image';

export function getPngFromElement(element: HTMLElement | null): Promise<string> {
	if (!element) return Promise.reject('No element found');
	const scale = 750 / element.offsetWidth;

	return domtoimage.toPng(element, {
		height: element.offsetHeight * scale,
		width: element.offsetWidth * scale,
		style: {
			transform: 'scale(' + scale + ')',
			transformOrigin: 'top left',
			width: element.offsetWidth + 'px',
			height: element.offsetHeight + 'px'
		}
	});
}

export async function getScaledVersionElement(element: HTMLElement | null, scale: number) {
	if (!element) return false;

	return await domtoimage.toPng(element, {
		width: element.clientWidth * scale,
		height: element.clientHeight * scale,
		style: {
			transform: 'scale(' + scale + ')',
			transformOrigin: 'top left'
		}
	});
}

export async function downloadScaledVersionOfElement(
	element: HTMLElement | null,
	name: string,
	scale: number
) {
	if (!element) return false;
	const image = await domtoimage.toBlob(element, {
		width: element.clientWidth * scale,
		height: element.clientHeight * scale,
		style: {
			transform: 'scale(' + scale + ')',
			transformOrigin: 'top left'
		}
	});

	const link = document.createElement('a');
	link.download = name;
	link.href = URL.createObjectURL(image);
	document.body.appendChild(link);
	link.click();
	link.remove();
}

export function getSimplePngFromElement(element: HTMLElement | null): Promise<string> {
	if (!element) return Promise.reject('No element found');
	return domtoimage.toPng(element);
}

export async function getBlobFromElement(element: HTMLElement | null): Promise<Blob> {
	if (!element) return Promise.reject('No element found');
	const scale = 750 / element.offsetWidth;

	return domtoimage.toBlob(element, {
		height: element.offsetHeight * scale,
		width: element.offsetWidth * scale,
		style: {
			transform: 'scale(' + scale + ')',
			transformOrigin: 'top left',
			width: element.offsetWidth + 'px',
			height: element.offsetHeight + 'px'
		}
	});
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
