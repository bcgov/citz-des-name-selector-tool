import {
    errors,
    pnFullNameLegalLimited,
    pnFullNameLegalWhole,
    step,
} from '$lib/state/shared.svelte';
import { pnFullLegalWholeNameInitialized } from '$lib/state/utils';
import { STEP, STEP_MAX, RULES } from '$lib/constants';
import { checkErrorForASCII, checkErrorForMaxLength } from '$lib/utils';

function removeAltErrors() {
    // ASCII Check
    errors.spliceByID(RULES.legalLimited.first.ascii.id);
    errors.spliceByID(RULES.legalLimited.middle.ascii.id);
    errors.spliceByID(RULES.legalLimited.last.ascii.id);
    // Max Length Check
    errors.spliceByID(RULES.legalLimited.first.length[0].maximum.id);
    errors.spliceByID(RULES.legalLimited.middle.length[0].maximum.id);
    errors.spliceByID(RULES.legalLimited.middle.length[1].maximum.id);
    errors.spliceByID(RULES.legalLimited.last.length[0].maximum.id);
    // Min Length Check
    errors.spliceByID(RULES.legalLimited.first.length[0].minimum.id);
    errors.spliceByID(RULES.legalLimited.last.length[0].minimum.id);
}

function removeTruncationErrors() {
    if (step.value < STEP.VIEW_NAMES) {
        errors.spliceByID(RULES.truncation.first.length[0].maximum.id);
        errors.spliceByID(RULES.truncation.middle.length[0].maximum.id);
        errors.spliceByID(RULES.truncation.last.length[0].maximum.id);
    }
}

function initialAltNameCheck() {
    const middleNames = pnFullNameLegalLimited.middle.name.split(' ');
    checkErrorForMaxLength(
        pnFullNameLegalLimited.first.name,
        RULES.legalLimited.first.length[0].maximum
    );
    checkErrorForMaxLength(
        middleNames[0],
        RULES.legalLimited.middle.length[0].maximum
    );
    if (middleNames[1])
        checkErrorForMaxLength(
            middleNames[1],
            RULES.legalLimited.middle.length[1].maximum
        );
    checkErrorForMaxLength(
        pnFullNameLegalLimited.last.name,
        RULES.legalLimited.last.length[0].maximum
    );
    checkErrorForASCII(
        pnFullNameLegalLimited.first.name,
        RULES.legalLimited.first.ascii
    );
    checkErrorForASCII(
        pnFullNameLegalLimited.middle.name,
        RULES.legalLimited.middle.ascii
    );
    checkErrorForASCII(
        pnFullNameLegalLimited.last.name,
        RULES.legalLimited.last.ascii
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
