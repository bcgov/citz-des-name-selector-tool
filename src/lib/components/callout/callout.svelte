<script lang="ts">
    import type { Snippet } from 'svelte';

    let {
        backgroundColor = 'lightBlue',
        children,
    }: {
        backgroundColor?: 'lightBlue' | 'lightGold';
        children?: Snippet;
    } = $props();
</script>

<div class={`bcds-Callout ${backgroundColor}`}>
    {@render children?.()}
</div>

<style>
    .bcds-Callout {
        width: 100%;
        box-sizing: border-box;
        padding: var(--layout-padding-medium) var(--layout-padding-large);
        border-left: var(--layout-border-width-large) solid
            var(--theme-primary-blue);
        border-radius: var(--layout-border-radius-medium)
            var(--layout-border-radius-none) var(--layout-border-radius-none)
            var(--layout-border-radius-medium);
        margin-bottom: var(--layout-margin-xxlarge);
    }

    .bcds-Callout.lightBlue {
        background-color: var(--theme-blue-10);
    }

    .bcds-Callout.lightGold {
        background-color: var(--theme-gold-10);
    }
</style>
