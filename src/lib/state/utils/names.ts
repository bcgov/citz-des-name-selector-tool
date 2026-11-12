import { pnFullNameLegalWhole } from "$lib/shared.svelte";

function legalWholeNameToString() {
    return `${pnFullNameLegalWhole.first.name} ${pnFullNameLegalWhole.middle} ${pnFullNameLegalWhole.last.name}`;
}

export function pnFullLegalWholeNameInitialized() {
    return pnFullNameLegalWhole.first.initialized && pnFullNameLegalWhole.last.initialized;
}

export {
    legalWholeNameToString
}
