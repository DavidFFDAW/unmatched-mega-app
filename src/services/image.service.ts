export default class ImageHttpService {
	static get = (endpoint: string) => this._makeFetchRequest(endpoint, 'GET');

	static _makeFetchRequest(url: string) {
		const options: any = {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		};

		return fetch(url, options).then((response) => response.blob());
	}
}
