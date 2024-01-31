<script lang="ts">
    export let showBox: boolean = true;
    export let width: number = 300;
    export let className: string = 'toggle-box-default-class';
    export let customContainerCss: string = '';
    export let title: string = 'Default Title';
</script>

<div class="w1 flex end aend toggle-box-flex-container {customContainerCss}">
    <div class="box p relative {Boolean(showBox) ? 'show-box' : 'unshow-box'} toggle-box {className}" style="width: {width}px;">
		<h3 class="title">{title}</h3>
        <button class="absolute btn-absolute-show-box-toggle" type="button" on:click={
            () => { showBox = !showBox;     }
        }>
            {Boolean(showBox) ? 'Mostrar' : 'Ocultar'}
        </button>

        <div class="w1 toggle-box-content">
            <slot/>
        </div>
    </div>
</div>

<style>
    .toggle-box-flex-container {
        padding-bottom: 10px;
        z-index: 9999;
    }
    .box.toggle-box {
        border-radius: 0 5px 5px 5px;
        /* z-index: 9999; */
    }
    .box.toggle-box .toggle-box-content {
        max-height: 500px;
        overflow-y: auto;
    }
    .box.toggle-box .toggle-box-content::-webkit-scrollbar {
        display: none;
    }
    .absolute.btn-absolute-show-box-toggle {
        position: absolute;
        top: 0;
        background: #fff;
        right: 100%;
        padding: 10px;
        mix-blend-mode: difference;
        border-radius: 5px 0 0 5px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
        /* writing-mode: vertical-lr; */
        /* transform: rotate(180deg); */
        text-align: end;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>