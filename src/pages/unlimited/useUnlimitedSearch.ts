import { browser } from '$app/environment';
import type { SearchUserDeck } from '@models/deck.model';
import { initialDeckValue } from './game/hooks/useDeck';
import { getFromStorage, persistStorage } from '@services/persistent.storage.service';
import { get, writable } from 'svelte/store';
import HttpService from '@services/http.service';
import type { ApiResponse } from '@models/api.model';

interface Response {
	error: boolean;
	loading: boolean;
	data: SearchUserDeck[];
	message?: string;
}
interface UnlimitedSearch {
	response: Response;
	searchTerms: string;
	storedGame: any;
}
const initialValue: UnlimitedSearch = {
	response: getFromStorage('lastSearch', { error: false, loading: false, data: [] }),
	searchTerms: '',
	storedGame: getFromStorage('game', initialDeckValue)
};

export const unlimitedSearch = writable(initialValue);

export const search = () => {
	const stored = get(unlimitedSearch);
	if (stored.searchTerms.length > 3) {
		unlimitedSearch.update((previous) => {
			return {
				...previous,
				response: {
					error: false,
					data: [],
					loading: true
				}
			};
		});
		HttpService.get(`/api/search/${stored.searchTerms}`)
			.then((res: ApiResponse) => {
				const responseObtained = res.content.decks;
				const response = {
					error: false,
					data: responseObtained,
					loading: false
				};
				unlimitedSearch.update((previous) => {
					return {
						...previous,
						response: response
					};
				});
				persistStorage('lastSearch', response);
			})
			.catch((err) => {
				console.error(err);
				unlimitedSearch.update((search) => {
					return {
						...search,
						response: {
							error: true,
							message: err,
							data: [],
							loading: false
						}
					};
				});
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
