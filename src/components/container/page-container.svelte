<script>
	import { fade } from 'svelte/transition';
</script>

<section class="page-container" in:fade>
	<slot />
</section>
