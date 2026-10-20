<script lang="ts">
    import { STEP, STEP_MAX } from '$lib/constants';
    import { rules } from '$lib/rules-configuration';
    import { altName, errors, fullName, step } from '$lib/shared.svelte';
    import { checkErrorForASCII, checkErrorForMaxLength } from '$lib/utils';

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
        if (isDisabled()) {
            element?.classList.replace('primary', 'disabled');
            return;
        }
        element?.classList.replace('disabled', 'primary');
    }

    function previousStep() {
        if (step.value > 0) step.value = step.value - 1;

        disabledToggle();
        removeStep3Errors();
        window.scrollTo(0, 0);
    }

    function nextStep() {
        step.value = step.value + 1;
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
        }

        checkErrorForMaxLength(altName.first.name, rules.alternateName.first.length[0].maximum);
        checkErrorForASCII(altName.first.name, rules.alternateName.first.ascii);
        checkErrorForMaxLength(altName.middle.name, rules.alternateName.middle.length[0].maximum);
        checkErrorForMaxLength(altName.middle.name, rules.alternateName.middle.length[1].maximum);
        checkErrorForASCII(altName.middle.name, rules.alternateName.first.ascii);
        checkErrorForMaxLength(altName.last.name, rules.alternateName.last.length[0].maximum);
        checkErrorForASCII(altName.last.name, rules.alternateName.last.ascii);
        disabledToggle();
        window.scrollTo(0, 0);
    }

    function isDisabled() {
        return (
            step.isStep(STEP.LEGAL_NAME)
            && !fullName.namesInitialized()
            || errors.hasErrors()
        )
        || ( step.isStep(STEP.ALTERNATIVE_NAME) && errors.hasErrors() );
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
