<script lang="ts">
	export let height: number = 50;
</script>

<div class="box" style={`min-height: ${height}px;`}>
	<slot />
</div>
