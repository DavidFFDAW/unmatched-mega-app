import { json } from '@sveltejs/kit';
import HttpService from '@services/http.service.js';

const url = 'https://unmatched.cards/api/decks/';

export async function GET({ params }) {
	const { id } = params;

	if (!id || id.length <= 0 || typeof id !== 'string') {
		return json({});
	}

	const search = await HttpService.get(url + id);
	return json(search.content);
}
