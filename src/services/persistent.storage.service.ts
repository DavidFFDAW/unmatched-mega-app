import { browser } from '$app/environment';

const AppStorageKey = '8dce304b6ea88ace628f2f9c7f725c71';

const getFromStorage = (key: string, defaultValue: any = {}) => {
    if (!browser) return defaultValue;
    const content = localStorage.getItem(AppStorageKey);
    if (!content) return defaultValue;

    const json = JSON.parse(content);
    const value: any = json[key as any] || json;
    return value;
};

const getStore = () => {
    if (!browser) return {};
    const content = localStorage.getItem(AppStorageKey);
    if (content) {
        return JSON.parse(content);
    }
    return {};
};

const persistStorage = (key: string, data: any) => {
    const previousStored = getStore();
    const object = { ...previousStored, [key]: data };
    return localStorage.setItem(AppStorageKey, JSON.stringify(object));
};

const removeFromStorage = () => {
    localStorage.removeItem(AppStorageKey);
};

export { AppStorageKey, persistStorage, getFromStorage, removeFromStorage };
