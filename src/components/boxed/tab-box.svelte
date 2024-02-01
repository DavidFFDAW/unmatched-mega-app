<script lang="ts">
	export let showBox: boolean = false;
	export let className: string = 'tab-box-default-class';
	export let title: string = 'Default Title';
    const toggleShowBox = () => {
        showBox = !showBox;
    }
</script>

    <div class="w1 tab-box p pointer {className}">
        <header class="w1 tab-box-title-header flex start acenter gap-small pointer" role="presentation" on:click={toggleShowBox}>
            <span class="pointer caret-icon block" class:caret-rotate={Boolean(showBox)}></span>
            <h3 class="tab-box-title pointer">{title}</h3>
        </header>

        <section class="w1 tab-box-content {showBox ? 'block' : 'none' }">
            <slot />
        </section>
    </div>

<style scoped>
    .tab-box {
        border-radius: 5px;
        border: 1px solid #adadad;
        cursor: pointer;
    }
    .tab-box header.tab-box-title-header {
        padding: 10px;
    }
    .tab-box header.tab-box-title-header .caret-icon {
        width: 10px;
        height: 10px;
        border-top: 2px solid #adadad;
        border-right: 2px solid #adadad;
        transform: rotate(45deg);
        transition: transform 0.3s ease-in-out;
    }
    .tab-box header.tab-box-title-header .caret-icon.caret-rotate {
        transform: rotate(135deg);
    }
    .tab-box section.tab-box-content {
        padding: 10px 20px;
    }
</style>