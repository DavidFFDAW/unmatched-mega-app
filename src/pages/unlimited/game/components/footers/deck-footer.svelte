<script lang="ts">
	export let visible: boolean = false;
	import Footer from "./footer.svelte";
</script>

<Footer bind:visible>
	<div class="unlimited-footer-content">
		<ul>
			<li>
				AAAAAAAAAAAAAAA
			</li>
			<li>
				AAAAAAAAAAAAAAAAAA
			</li>
		</ul>
	</div>
</Footer>

<style>
	.unlimited-footer-content {
		position: relative;
		padding: 1rem;
		z-index: 120;
	}
	.unlimited-footer-content ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
