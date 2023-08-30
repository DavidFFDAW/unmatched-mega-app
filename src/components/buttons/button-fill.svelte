<script lang="ts">
	export let label: string = 'Button';
    export let click: (e: Event) => void = () => {};

    const onclick = (e: Event) => {
        e.preventDefault();
        click(e);
    }
</script>

<a role="button" class="btn fill" href="/" on:click={onclick}>{ label }</a>
