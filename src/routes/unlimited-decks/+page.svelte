<script lang="ts">
	import type { SearchUserDeck } from './models';
	import HttpService from '../../services/http.service';
	import { getFromStorage, persistStorage } from '../../services/persistent.storage.service';

	let response: SearchUserDeck[] = getFromStorage('lastSearch', []);
	let searchTerms: string = '';

	const search = () => {
		if (searchTerms.length > 3) {
			HttpService.get(`/api/search/${searchTerms}`).then((res: any) => {
				response = res.content.decks;
				persistStorage('lastSearch', response);
			});
		}
	};
</script>

<div class="search-container">
	<label for="search-term" class="label league upper">Busca un mazo por nombre o por autor</label>
	<input
		class="input bebas upper"
		type="text"
		placeholder="Michael Myers"
		bind:value={searchTerms}
		on:change={search}
	/>
</div>

<div class="search-results list down">
	{#each response as item}
		<div class="search-result-item unmatched-deck deck-{item.id}">
			<div class="image-card-continer">
				<!-- <img class="unmatched-card-back" src={item.deck_data.appearance.cardbackUrl} alt="" /> -->
				<img class="unmatched-card-back" src={item.deck_data.cards[0].imageUrl} alt="" />
			</div>
			<div class="bebas upper deck-name">{item.name}</div>
			<div class="bebas upper author">{item.user}</div>
			<div class="league upper">
				<a href={`/unlimited-decks/${item.id}`} class="btn fill button">Jugar</a>
			</div>
		</div>
	{/each}
</div>

<!-- <a href={`/unlimited-decks/${item.id}`} /> -->

<style>
	.custom-flex * {
		color: #fff;
	}
	.search-results.list {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 8px;
	}
	.unmatched-card-back {
		width: 50mm;
		height: 100px;
	}
	.search-result-item.unmatched-deck {
		display: flex;
		place-items: center;
		padding: 10px;
		background-color: #282a36;
	}
	.search-result-item.unmatched-deck .author,
	.search-result-item.unmatched-deck .deck-name {
		color: #fff;
		font-size: 20px;
	}
	.search-container {
		margin-top: 15px;
	}
	.search-container label,
	.search-container input {
		display: block;
	}
	.search-container label {
		color: #fff;
		font-size: 20px;
	}
	.search-container input.input {
		width: 100%;
		margin-top: 5px;
		border: none;
		outline: none;
		padding: 12px 15px;
		background-color: #282a36;
		color: #fff;
		border-radius: 5px;
	}

	@media only screen and (max-width: 768px) {
		.search-results.list {
			gap: 20px;
		}

		.search-result-item.unmatched-deck {
			display: block;
			width: 100%;
		}
		/* .search-result-item.unmatched-deck .image-card-continer {
			display: flex;
			justify-content: center;
			align-items: center;
		} */
		.search-result-item.unmatched-deck .image-card-continer img {
			width: 100%;
			height: 326px;
		}
	}
</style>
