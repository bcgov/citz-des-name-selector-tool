import { rules } from '$lib/rules-configuration';
import {
    pnFullNameLegalLimited,
    pnFullNameLegalWhole,
} from '$lib/state/shared.svelte';
import { checkErrorForMaxLength, checkErrorForMinLength } from '$lib/utils';

function legalWholeFirstNameIsEmpty() {
    return pnFullNameLegalWhole.first.name.length === 0;
}

// pn_first_name_legal_whole
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

function legalWholeNameToString() {
    return `${pnFullNameLegalWhole.first.name} ${pnFullNameLegalWhole.middle.name} ${pnFullNameLegalWhole.last.name}`;
}

function legalLimitedNameToString() {
    return `${pnFullNameLegalLimited.first.name} ${pnFullNameLegalLimited.middle.name} ${pnFullNameLegalLimited.last.name}`;
}

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
