import { writable } from 'svelte/store';

const initialState: any[] = [];
export const dropzoneArray = writable(initialState);

export const add = (item: any) => {
	dropzoneArray.update((list: any[]) => [...list, item]);
};

export const empty = () => {
	dropzoneArray.set(initialState);
};

export const dragover = (e: Event) => {
	e.preventDefault();
};

export const drop = (e: DragEvent) => {
	e.preventDefault();

	if (e.dataTransfer) {
		[...e.dataTransfer.files].forEach((item) => {
			add({
				name: item.name,
				url: URL.createObjectURL(item)
			});
		});
	}
};
