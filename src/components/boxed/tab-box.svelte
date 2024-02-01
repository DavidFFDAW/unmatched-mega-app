<script lang="ts">
	export let showBox: boolean = false;
	export let className: string = 'tab-box-default-class';
	export let title: string = 'Default Title';
    const toggleShowBox = () => {
        showBox = !showBox;
    }
</script>

    <div class="w1 tab-box p pointer {className}">
        <header class="w1 tab-box-title-header flex start acenter gap-small pointer {showBox ? 'menu-tab-opened' : 'menu-tab-closed' }" role="presentation" on:click={toggleShowBox}>
            <span class="pointer caret-icon block" class:caret-rotate={Boolean(showBox)}></span>
            <h3 class="w1 tab-box-title pointer">{title}</h3>
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
    .tab-box header.tab-box-title-header.menu-tab-opened {
        border-bottom: 1px solid #adadad;
    }
    .tab-box header.tab-box-title-header h3.tab-box-title {
        position: relative;
        font-size: 16px;
        text-transform: uppercase;
        padding: 5px;
        z-index: 1;
    }
    .tab-box header.tab-box-title-header h3.tab-box-title::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 0;
        height: 3px;
        background-color: #cdcdcd;
        z-index: -1;
        transition: all 0.3s ease-in-out;
    }
    .tab-box header.tab-box-title-header.menu-tab-opened h3.tab-box-title::after {
        width: 10%;       
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