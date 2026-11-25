import {
    errors,
    pnFullNameLegalLimited,
    pnFullNameLegalWhole,
    step,
} from '$lib/state/shared.svelte';
import { pnFullLegalWholeNameInitialized } from '$lib/state/utils';
import { STEP, STEP_MAX } from '$lib/constants';
import { rules } from '$lib/rules-configuration';
import { checkErrorForASCII, checkErrorForMaxLength } from '$lib/utils';

function removeAltErrors() {
    // ASCII Check
    errors.spliceByID(rules.legalLimited.first.ascii.id);
    errors.spliceByID(rules.legalLimited.middle.ascii.id);
    errors.spliceByID(rules.legalLimited.last.ascii.id);
    // Max Length Check
    errors.spliceByID(rules.legalLimited.first.length[0].maximum.id);
    errors.spliceByID(rules.legalLimited.middle.length[0].maximum.id);
    errors.spliceByID(rules.legalLimited.middle.length[1].maximum.id);
    errors.spliceByID(rules.legalLimited.last.length[0].maximum.id);
    // Min Length Check
    errors.spliceByID(rules.legalLimited.first.length[0].minimum.id);
    errors.spliceByID(rules.legalLimited.last.length[0].minimum.id);
}

function removeTruncationErrors() {
    if (step.value < STEP.VIEW_NAMES) {
        errors.spliceByID(rules.truncation.first.length[0].maximum.id);
        errors.spliceByID(rules.truncation.middle.length[0].maximum.id);
        errors.spliceByID(rules.truncation.last.length[0].maximum.id);
    }
}

function initialAltNameCheck() {
    const middleNames = pnFullNameLegalLimited.middle.name.split(' ');
    checkErrorForMaxLength(
        pnFullNameLegalLimited.first.name,
        rules.legalLimited.first.length[0].maximum
    );
    checkErrorForMaxLength(
        middleNames[0],
        rules.legalLimited.middle.length[0].maximum
    );
    if (middleNames[1])
        checkErrorForMaxLength(
            middleNames[1],
            rules.legalLimited.middle.length[1].maximum
        );
    checkErrorForMaxLength(
        pnFullNameLegalLimited.last.name,
        rules.legalLimited.last.length[0].maximum
    );
    checkErrorForASCII(
        pnFullNameLegalLimited.first.name,
        rules.legalLimited.first.ascii
    );
    checkErrorForASCII(
        pnFullNameLegalLimited.middle.name,
        rules.legalLimited.middle.ascii
    );
    checkErrorForASCII(
        pnFullNameLegalLimited.last.name,
        rules.legalLimited.last.ascii
    );
}

function isDisabled() {
    return (
        (step.isStep(STEP.LEGAL_WHOLE_NAME) &&
            (!pnFullLegalWholeNameInitialized() || errors.hasErrors())) ||
        (step.isStep(STEP.LEGAL_LIMITED_NAME) && errors.hasErrors())
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
        case STEP.LEGAL_WHOLE_NAME:
            removeAltErrors();
            break;
        case STEP.LEGAL_LIMITED_NAME:
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
        case STEP.LEGAL_LIMITED_NAME:
            if (!pnFullNameLegalLimited.initialized) {
                pnFullNameLegalLimited.first.name =
                    pnFullNameLegalWhole.first.name;
                pnFullNameLegalLimited.middle.name =
                    pnFullNameLegalWhole.middle.name;
                pnFullNameLegalLimited.last.name =
                    pnFullNameLegalWhole.last.name;
                pnFullNameLegalLimited.initialized = true;
            }
            initialAltNameCheck();
            break;
    }

    disabledToggle();
    window.scrollTo(0, 0);
}

export { isDisabled, previousStep, nextStep };
