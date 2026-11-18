import {
    pnFullNameLegalLimited,
    pnFullNameLegalWhole,
} from '$lib/state/shared.svelte';

// pn_first_name_legal_whole
function legalWholeFirstNameToPeriod() {
    if (!pnFullNameLegalWhole.first.initialized) {
        pnFullNameLegalWhole.first.name = '.';
        pnFullNameLegalWhole.first.initialized = true;
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
