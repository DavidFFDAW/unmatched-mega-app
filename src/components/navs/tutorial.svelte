<script lang="ts">
    import { page } from "$app/stores";
    export let pageBaseURL: string = '';
    export let name: string = '';
</script>

<nav class="tutorial-page-tabs flex start acenter gap">
    <a class="tutorial-link" href="/{pageBaseURL}" class:active={$page.url.pathname === `/${pageBaseURL}`}>{ name || page}</a>
    <a class="tutorial-link" href="/{pageBaseURL}/tutorial" class:active={$page.url.pathname === `/${pageBaseURL}/tutorial`}>Tutorial</a>
</nav>

<style scoped>
    .tutorial-page-tabs {
        width: 100%;
        margin: 0 0 1rem 0;
    }
    .tutorial-page-tabs a.tutorial-link {
        text-decoration: none;
        font-weight: 600;
        padding: 0.5rem .50rem;
        transition: all 0.2s ease-in-out;
    }
    .tutorial-page-tabs a.tutorial-link.active {
        border-bottom: 2px solid var(--attack);
        color: var(--attack);
    }
</style>