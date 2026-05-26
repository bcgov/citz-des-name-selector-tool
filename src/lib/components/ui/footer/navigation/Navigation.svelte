<script lang="ts">
    import { STEP, STEP_MAX } from '$lib/constants';
    import { rules } from '$lib/rules-configuration';
    import {
        altName,
        errors,
        fullName,
        isDisabled,
        step,
    } from '$lib/shared.svelte';

    function removeStep3Errors() {
        if (step.value < STEP.VIEW_NAMES) {
            if (errors.hasError(rules.truncationRules.first.length[0].maximum.id))
                errors.splice(rules.truncationRules.first.length[0].maximum.id);
            if (errors.hasError(rules.truncationRules.middle.length[0].maximum.id))
                errors.splice(rules.truncationRules.middle.length[0].maximum.id);
            if (errors.hasError(rules.truncationRules.last.length[0].maximum.id))
                errors.splice(rules.truncationRules.last.length[0].maximum.id);
        }
    }

    function disabledToggle() {
        const element = document.getElementById('primary-button');
        // If we are before the last step, the next button is enabled.
        if (step.value < step.max) {
            element?.classList.replace('disabled', 'primary');
            isDisabled.value = false;
        }

        // If we're at the last step, the next button is disabled.
        if (step.value === step.max) {
            element?.classList.replace('primary', 'disabled');
            isDisabled.value = true;
        }
    }

    function previousStep() {
        if (step.value > 0) {
            step.value = step.value - 1;
        }

        disabledToggle();
        removeStep3Errors();
        window.scrollTo(0, 0);
    }

    function nextStep() {
        if (step.value < step.max) {
            step.value = step.value + 1;
        }

        if (!altName.initialized && step.value === 4) {
            altName.first.name = fullName.first.name;
            altName.middle.name = fullName.middle.name;
            altName.last.name = fullName.last.name;
            altName.initialized = true;
        }

        disabledToggle();
        window.scrollTo(0, 0);
    }
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
            disabled={isDisabled.value}
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
