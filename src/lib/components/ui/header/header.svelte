<script lang="ts">
    //import { scrollY } from 'svelte/reactivity/window';
    import { step } from '../../../shared.svelte.ts';

    //let active = $state(false);

/*    $effect(() => {
        if (scrollY.current)
            if (scrollY.current > 100) {
                active = true;
            } else {
                active = false;
            }
    });*/
</script>

<header class="bcds-header">
    <div class="bcds-header--container">
        <a>Logo</a>
        <div class="bcds-header--line"></div>
        <div class="bcds-header--title">
            Step {step.value}
        </div>
    </div>
</header>

<style>
    .bcds-header {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: var(--surface-color-forms-default);
        border-bottom-color: var(--surface-color-border-default);
        border-bottom-style: solid;
        border-bottom-width: var(--layout-border-width-small);
        min-height: 65px;
        padding: var(--layout-padding-none) var(--layout-padding-medium);
        width: 100%;
    }

    .bcds-header--container {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--layout-padding-medium);
        max-width: 1100px;
    }

    .bcds-header--line {
        background-color: var(--surface-color-border-default);
        width: 1px;
        height: 32px;
    }

    .bcds-header--title {
        flex-grow: 1;
        font: var(--typography-bold-h4);
        color: var(--typography-color-primary);
    }
</style>
