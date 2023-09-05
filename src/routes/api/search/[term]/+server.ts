import { json } from '@sveltejs/kit';
import HttpService from '@services/http.service';

const url =
	'https://unmatched.cards/api/decks?sortBy=published&sortDesc=true&perPage=20&currentPage=1&filter=';

export async function GET({ params }) {
	const { term } = params;

	if (!term || term.length <= 0) {
		return json({});
	}

	const search = await HttpService.get(url + term);
	return json(search.content);
}
