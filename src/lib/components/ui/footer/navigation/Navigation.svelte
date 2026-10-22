<script lang="ts">
    import { STEP_MAX } from '$lib/constants';
    import { step } from '$lib/shared.svelte';
    import { nextStep, previousStep, isDisabled } from './utils';
</script>

<div class="bcds-Navigation">
    {#if step.value > 0}
        <button class="bcds-Button secondary medium" onclick={previousStep}>
            Back
        </button>
    {/if}
    {#if step.value < STEP_MAX}
        <button
            id="primary-button"
            class="bcds-Button primary medium"
            onclick={nextStep}
            disabled={isDisabled()}
        >
            Next
        </button>
    {/if}
</div>

<style>
    .bcds-Navigation {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-evenly;
    }
</style>
