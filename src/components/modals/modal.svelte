<script lang="ts">
	export let title: string = 'Modal';
	export let description: string | null = null;

	export let visible = false;
</script>

{#if visible}
	<div class="overlay" on:click={() => (visible = false)} role="presentation" />
{/if}
<dialog class="modal" open={visible}>
	<header class="modal-head">
		<h3>{title}</h3>
		{#if description}<p>{description}</p>{/if}
	</header>
	<div class="modal-content">
		<slot name="modal-content"><!-- optional fallback --></slot>
	</div>
</dialog>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 98;
	}
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 80%;
		z-index: 100;
		outline: none;
		border: none;
		transform: translate(-50%, -50%);
	}

	.modal-head {
		padding: 1rem;
		background-color: #fff;
	}

	.modal-content {
		padding: 1rem;
		background-color: #fff;
	}

	.modal-content button {
		margin: 0 0.5rem;
	}
</style>
