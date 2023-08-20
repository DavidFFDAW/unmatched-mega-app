<script lang="ts">
	import type { SearchUserDeck } from './models';
	import HttpService from '../../services/http.service';
	import { getFromStorage, persistStorage } from '../../services/persistent.storage.service';
	import { initialDeckValue } from './[id]/state/useDeck';

	let response: SearchUserDeck[] = getFromStorage('lastSearch', []);
	let searchTerms: string = '';
	let storedGame: any = getFromStorage('game', initialDeckValue);

	const search = () => {
		if (searchTerms.length > 3) {
			response = [];
			HttpService.get(`/api/search/${searchTerms}`).then((res: any) => {
				response = res.content.decks;
				persistStorage('lastSearch', response);
			});
		}
	};

	const deleteStoredGame = () => {
		persistStorage('game', initialDeckValue);
		storedGame = false;
	};
</script>

{#if storedGame.url && storedGame.deckData}
	<div class="stored-game-alert alert flex center acenter gap-small" role="alert">
		<p>
			Existe una partida en curso con el mazo <strong class="bebas"
				>{storedGame.deckData.name}</strong
			>
		</p>
		<div class="flex between acenter gap-smaller">
			<button class="alert-button" on:click={deleteStoredGame}>Borrar</button>
			<a href={storedGame.url} class="alert-button">Continuar</a>
		</div>
	</div>
{/if}

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
	{#if response.length > 0}
		{#each response as item}
			<a class="search-result-item unmatched-deck deck-{item.id}" href="/unlimited-decks/{item.id}">
				<div class="image-card-continer">
					{#if item.deck_data.cards[0]}
						<img class="unmatched-card-back" src={item.deck_data.cards[0].imageUrl} alt="" />
					{:else}
						<img class="unmatched-card-back" src={item.deck_data.appearance.cardbackUrl} alt="" />
					{/if}
				</div>
				<div class="flex between acenter" style="margin-top: 15px">
					<div class="bebas upper deck-name">{item.name}</div>
					<div class="league author">{item.user}</div>
				</div>
			</a>
		{/each}
	{/if}
</div>

<style>
	.stored-game-alert.alert {
		position: sticky;
		top: 0;
		width: 100%;
		height: 50px;
		background-color: #ebff55;
		padding: 15px 10px;
	}
	.stored-game-alert.alert .alert-button {
		background-color: transparent;
		color: #282a36;
		font-size: 15px;
		border: none;
		padding: 10px 0;
	}
	.custom-flex * {
		color: #fff;
	}
	.search-results.list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
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
	}
	.search-result-item.unmatched-deck .author {
		font-size: 22px;
	}
	.search-result-item.unmatched-deck .deck-name {
		font-size: 25px;
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
			grid-template-columns: repeat(1, 1fr);
		}
	}
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
	/* } */
</style>
