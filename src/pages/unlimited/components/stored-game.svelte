<script>
	import { unlimitedSearch, deleteStoredGame } from '../useUnlimitedSearch';
</script>

{#if $unlimitedSearch.storedGame.url && $unlimitedSearch.storedGame.deckData}
	<div class="stored-game-alert alert flex center acenter gap-small" role="alert">
		<p>
			Existe una partida en curso con el mazo <strong class="bebas"
				>{$unlimitedSearch.storedGame.deckData.name}</strong
			>
		</p>
		<div class="flex between acenter gap-smaller">
			<a href={$unlimitedSearch.storedGame.url} class="alert-button" on:click={deleteStoredGame}
				>Borrar</a
			>
			<a href={$unlimitedSearch.storedGame.url} class="alert-button">Continuar</a>
		</div>
	</div>
{/if}
