<script lang="ts">
    export let visible: boolean = false;
</script>

<aside role="presentation" class="unlimited-footer-untouch-screen" on:click={() => visible = false}></aside>
<footer class="unlimited-footer animate__animated animate__fadeInUpBig animate__faster" class:block={visible}>
    <slot/>
</footer>

<style>
    .unlimited-footer-untouch-screen {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
        z-index: 100;
    }
	footer.unlimited-footer  {
		display: none;
        border-top: 8px solid #cddc39;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 500px;
		background: #282a36;
		color: #fff;
		z-index: 100;
	}
	footer.unlimited-footer.block {
		display: block;
	}
</style>