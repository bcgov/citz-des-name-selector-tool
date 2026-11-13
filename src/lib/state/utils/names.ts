import { pnFullNameLegalLimited, pnFullNameLegalWhole } from '$lib/state/shared.svelte';

function legalWholeNameToString() {
    return `${pnFullNameLegalWhole.first.name} ${pnFullNameLegalWhole.middle.name} ${pnFullNameLegalWhole.last.name}`;
}

function legalLimitedNameToString() {
    return `${pnFullNameLegalLimited.first.name} ${pnFullNameLegalLimited.middle.name} ${pnFullNameLegalLimited.last.name}`;
}

export function pnFullLegalWholeNameInitialized() {
    return (
        pnFullNameLegalWhole.first.initialized &&
        pnFullNameLegalWhole.last.initialized
    );
}

export { legalWholeNameToString };
