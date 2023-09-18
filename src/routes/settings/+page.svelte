<script>
	import ButtonFill from '@components/buttons/button-fill.svelte';
	import { removeFromStorage } from '@services/persistent.storage.service';
	import { fade } from 'svelte/transition';

	const deleteCache = () => {
		removeFromStorage();
	};
</script>

<section in:fade>
	<h1>Settings</h1>
	<p>Settings page</p>

	<ButtonFill click={deleteCache} label="Borrar caché de la aplicación" />
</section>
