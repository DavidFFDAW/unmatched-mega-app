const AppStorageKey = 'unmatched.custom';

const get = (key: string) => {
	const content = localStorage.getItem(AppStorageKey);
	if (content) {
		const value: any = content[key as any] || content;
		return JSON.parse(value);
	}
	return {};
};

const getStore = () => {
	const content = localStorage.getItem(AppStorageKey);
	if (content) {
		return JSON.parse(content);
	}
	return {};
};

const store = (data: any) => {
	const previousStored = getStore();
	const object = { ...previousStored, data };
	return localStorage.setItem(AppStorageKey, JSON.stringify(object));
};

const remove = () => {
	localStorage.removeItem(AppStorageKey);
};

export { AppStorageKey, store, get, remove };
