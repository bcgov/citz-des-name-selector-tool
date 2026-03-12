<script lang="ts">
    import Button from '../button/button.svelte';
    import { step } from '../../../shared.svelte.ts';

    function nextStep() {
        if (step.value === 1) step.value = 2;
        else step.value = 1;
    }
</script>

<button class="self-center primary medium bcds-react-aria-Button" onclick={nextStep}>
    {#if step.value === 1}
        Next
    {:else}
        Back
    {/if}
</button>

<style>
    button.primary {
        background: var(--surface-color-primary-button-default);
        color: var(--icons-color-primary-invert);
    }

    button.medium {
        min-height: 40px;
        padding: var(--layout-padding-none) var(--layout-padding-medium);
    }

    button.bcds-Button {
        border: none;
        border-radius: var(--layout-border-radius-medium);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: var(--layout-padding-small);
        font: var(--typography-regular-body);
    }
</style>
