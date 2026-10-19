<script lang="ts">
    import { STEP, STEP_MAX } from '$lib/constants';
    import { rules } from '$lib/rules-configuration';
    import {
        altName,
        errors,
        fullName,
        step,
    } from '$lib/shared.svelte';

    function removeStep3Errors() {
        if (step.value < STEP.VIEW_NAMES) {
            if (
                errors.hasError(
                    rules.truncationRules.first.length[0].maximum.id
                )
            )
                errors.splice(rules.truncationRules.first.length[0].maximum.id);
            if (
                errors.hasError(
                    rules.truncationRules.middle.length[0].maximum.id
                )
            )
                errors.splice(
                    rules.truncationRules.middle.length[0].maximum.id
                );
            if (
                errors.hasError(rules.truncationRules.last.length[0].maximum.id)
            )
                errors.splice(rules.truncationRules.last.length[0].maximum.id);
        }
    }

    function disabledToggle() {
        const element = document.getElementById('primary-button');

        switch (step.value) {
            case STEP_MAX:
                element?.classList.replace('primary', 'disabled');
                break;
            case STEP.LEGAL_NAME:
                if (!fullName.first.initialized || !fullName.last.initialized)
                    element?.classList.replace('primary', 'disabled');
                break;
            default:
                element?.classList.replace('disabled', 'primary');
        }
    }

    function previousStep() {
        if (step.value > 0) step.value = step.value - 1;

        disabledToggle();
        removeStep3Errors();
        window.scrollTo(0, 0);
    }

    function nextStep() {
        switch (step.value) {
            case STEP_MAX:
                break;
            case STEP.ALTERNATIVE_NAME:
                if (!altName.initialized) {
                    altName.first.name = fullName.first.name;
                    altName.middle.name = fullName.middle.name;
                    altName.last.name = fullName.last.name;
                    altName.initialized = true;
                }
                break;
            default:
                step.value = step.value + 1;
        }

        disabledToggle();
        window.scrollTo(0, 0);
    }
    function isDisabled() {
        return errors.hasErrors() && !fullName.namesInitialized();
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
