<script>
	import LoadingText from '@components/loading/loading-text.svelte';
	import TotalSpinner from '@components/spinner/total-spinner.svelte';
</script>

<div class="search-result-item unmatched-deck deck">
	<div class="image-card-continer">
		<div class="image-container-img relative">
			<TotalSpinner size={80} color="#44475a" altColor={'#000'} />
		</div>
	</div>
	<div class="flex between acenter" style="margin-top: 15px">
		<LoadingText width={120} />
		<LoadingText width={80} />
	</div>
</div>

<style>
	.image-container-img {
		width: 100%;
		height: 326px;
		background-color: #15161c;
	}
</style>
