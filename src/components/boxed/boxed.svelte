<script lang="ts">
	export let title: string = '';
</script>

<div class="w1 box p">
	<h3 class="title">{title}</h3>

	<div class="w1 content">
		<slot />
	</div>
</div>
