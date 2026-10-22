import { altName, errors, fullName, step } from '$lib/shared.svelte';
import { STEP, STEP_MAX } from '$lib/constants';
import { rules } from '$lib/rules-configuration';
import { checkErrorForASCII, checkErrorForMaxLength } from '$lib/utils';

function removeAltErrors() {
    // ASCII Check
    errors.spliceByID(rules.alternateName.first.ascii.id);
    errors.spliceByID(rules.alternateName.middle.ascii.id);
    errors.spliceByID(rules.alternateName.last.ascii.id);
    // Max Length Check
    errors.spliceByID(rules.alternateName.first.length[0].maximum.id);
    errors.spliceByID(rules.alternateName.middle.length[0].maximum.id);
    errors.spliceByID(rules.alternateName.middle.length[1].maximum.id);
    errors.spliceByID(rules.alternateName.last.length[0].maximum.id);
    // Min Length Check
    errors.spliceByID(rules.alternateName.first.length[0].minimum.id);
    errors.spliceByID(rules.alternateName.last.length[0].minimum.id);
}

function removeTruncationErrors() {
    if (step.value < STEP.VIEW_NAMES) {
        errors.spliceByID(rules.truncationRules.first.length[0].maximum.id);
        errors.spliceByID(rules.truncationRules.middle.length[0].maximum.id);
        errors.spliceByID(rules.truncationRules.last.length[0].maximum.id);
    }
}

function initialAltNameCheck() {
    const middleNames = altName.middle.name.split(' ');
    checkErrorForMaxLength(
        altName.first.name,
        rules.alternateName.first.length[0].maximum
    );
    checkErrorForMaxLength(
        middleNames[0],
        rules.alternateName.middle.length[0].maximum
    );
    if (middleNames[1])
        checkErrorForMaxLength(
            middleNames[1],
            rules.alternateName.middle.length[1].maximum
        );
    checkErrorForMaxLength(
        altName.last.name,
        rules.alternateName.last.length[0].maximum
    );
    checkErrorForASCII(altName.first.name, rules.alternateName.first.ascii);
    checkErrorForASCII(altName.middle.name, rules.alternateName.middle.ascii);
    checkErrorForASCII(altName.last.name, rules.alternateName.last.ascii);
}

function isDisabled() {
    return (
        (step.isStep(STEP.LEGAL_NAME) &&
            (!fullName.namesInitialized() || errors.hasErrors())) ||
        (step.isStep(STEP.ALTERNATIVE_NAME) && errors.hasErrors())
    );
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

    switch (step.value) {
        case STEP.LEGAL_NAME:
            removeAltErrors();
            break;
        case STEP.ALTERNATIVE_NAME:
            removeTruncationErrors();
            break;
    }

    disabledToggle();
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
            initialAltNameCheck();
            break;
    }

    disabledToggle();
    window.scrollTo(0, 0);
}

export { isDisabled, previousStep, nextStep };
