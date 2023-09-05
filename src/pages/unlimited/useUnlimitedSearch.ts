import type { SearchUserDeck } from "@models/deck.model";
import { initialDeckValue } from "./game/hooks/useDeck2";
import { getFromStorage, persistStorage } from "@services/persistent.storage.service";
import { get, writable } from "svelte/store";
import HttpService from "@services/http.service";
import type { ApiResponse } from "@models/api.model";

interface UnlimitedSearch {
    response: SearchUserDeck[];
    searchTerms: string;
    storedGame: any;
}
const initialValue: UnlimitedSearch = {
    response: getFromStorage('lastSearch', []),
    searchTerms: '',
    storedGame: getFromStorage('game', initialDeckValue)
};

export const unlimitedSearch = writable(initialValue);

export const search = () => {
    const stored = get(unlimitedSearch);
    if (stored.searchTerms.length > 3) {
        unlimitedSearch.set({
            ...stored,
            response: []
        });
        HttpService.get(`/api/search/${stored.searchTerms}`).then((res: ApiResponse) => {
            const response = res.content.decks;
            unlimitedSearch.set({
                ...stored,
                response
            });
            persistStorage('lastSearch', response);
        });
    }
};

export const deleteStoredGame = (ev: Event) => {
    ev.preventDefault();
    persistStorage('game', initialDeckValue);
    unlimitedSearch.update((search) => {
        return {
            ...search,
            storedGame: false
        };
    });
};