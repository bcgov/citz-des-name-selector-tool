import { rules } from '$lib/rules-configuration';
import {
    pnFullNameLegalLimited,
    pnFullNameLegalWhole,
} from '$lib/state/shared.svelte';
import { checkErrorForMaxLength, checkErrorForMinLength } from '$lib/utils';

/**
 * Checks if the first name of the state variable pnFullNameLegalWhole is empty.
 * @returns boolean value based on if first name is empty
 */
function legalWholeFirstNameIsEmpty() {
    return pnFullNameLegalWhole.first.name.length === 0;
}

/**
 * Updates the first name based on if the first name is empty and sets it initialized if it hasn't
 * been yet. Does a Minimum name check.
 */
function legalWholeFirstNameToPeriod() {
    if (legalWholeFirstNameIsEmpty()) {
        if (!pnFullNameLegalWhole.first.initialized)
            pnFullNameLegalWhole.first.initialized = true;

        pnFullNameLegalWhole.first.name = '.';
        checkErrorForMinLength(
            pnFullNameLegalWhole.first.name,
            rules.legalName.first.length[0].minimum
        );
    }
}

/**
 * Converts the state variable of pnFullNameLegalWhole to one complete string.
 * @returns string of the Legal (Whole) Full Name
 */
function legalWholeNameToString() {
    return `${pnFullNameLegalWhole.first.name} ${pnFullNameLegalWhole.middle.name} ${pnFullNameLegalWhole.last.name}`;
}

/**
 * Converts the state variable of pnFullNameLegalLimited to one complete string.
 * @returns string of the Legal (Limited) Full Name
 */
function legalLimitedNameToString() {
    return `${pnFullNameLegalLimited.first.name} ${pnFullNameLegalLimited.middle.name} ${pnFullNameLegalLimited.last.name}`;
}

/**
 * Checks if the first and last name of the pnFullNameLegalWhole is initialized.
 * @returns boolean of if the first and last name is initialized
 */
function pnFullLegalWholeNameInitialized() {
    return (
        pnFullNameLegalWhole.first.initialized &&
        pnFullNameLegalWhole.last.initialized
    );
}

export {
    legalWholeFirstNameToPeriod,
    legalWholeNameToString,
    legalLimitedNameToString,
    pnFullLegalWholeNameInitialized,
};
