<script lang="ts">
	import Modal from '@components/modals/modal.svelte';
	import DialLetters from './dial-letters.svelte';
	import DialsSvg from './dials-svg.svelte';

	import { dials } from './stores/dials.store';
	import { onMount } from 'svelte';

	export let visible: boolean = false;
	export let rotation: number = 0;
	let quickRotation: number = 150;
	let interval: any;

	onMount(() => {
		// const angles = 360 / ($dials.life + 1);
		interval = setInterval(() => {
			if (rotation === 360) {
				rotation = 0;
			}
			rotation = rotation + 3;
		}, quickRotation);
		return () => clearInterval(interval);
	});
</script>

<Modal bind:visible title="Preview" description="">
	<div slot="modal-content" class="w1 flex center acenter gap dials preview">
		<div class="relative">
			<DialLetters />
			<DialsSvg
				bind:size={$dials.dialSize}
				preview={true}
				id="unmatchedPreviewSvgFront"
				imageSrc={$dials.dialFront}
				bind:rotation
			/>
			<div class="circunference center filled" />
		</div>
	</div>
</Modal>
