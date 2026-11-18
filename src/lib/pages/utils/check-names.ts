import { errors } from '$lib/state/shared.svelte';
import {
    legalWholeFirstNameToPeriod,
    pnFullLegalWholeNameInitialized,
} from '$lib/state/utils';
import type { ErrorRulesList } from '$lib/types';
import {
    checkErrorForMaxLength,
    checkErrorForMinLength,
    checkErrorForMaxNames,
    checkErrorForASCII,
} from '$lib/utils.ts';

function disableButtonOnErrors() {
    const element = document.getElementById('primary-button');
    if (errors.hasErrors()) {
        element?.classList.replace('primary', 'disabled');
        return;
    } else if (!pnFullLegalWholeNameInitialized()) {
        element?.classList.replace('primary', 'disabled');
        return;
    }
    element?.classList.replace('disabled', 'primary');
}

function checkName(
    value: { name: string; initialized: boolean },
    rules: ErrorRulesList,
    ascii: boolean
) {
    checkErrorForMinLength(value.name, rules.length[0].minimum);
    checkErrorForMaxLength(value.name, rules.length[0].maximum);

    if (!value.initialized) value.initialized = true;

    // checkErrorForMaxNames(value.name, rules.count);

    if (ascii) checkErrorForASCII(value.name, rules.ascii);

    disableButtonOnErrors();
}

function checkMiddleName(
    value: { name: string; initialized: boolean },
    rules: ErrorRulesList,
    ascii: boolean
) {
    let names = value.name.split(' ');
    checkErrorForMaxLength(names[0], rules.length[0].maximum);
    if (names[1]) checkErrorForMaxLength(names[1], rules.length[1].maximum);

    // checkErrorForMaxNames(value.name, rules.count);

    if (ascii) checkErrorForASCII(value.name, rules.ascii);

    if (!value.initialized) value.initialized = true;
    disableButtonOnErrors();
}

function checkLastName(
    value: { name: string; initialized: boolean },
    rules: ErrorRulesList,
    ascii: boolean
) {
    checkName(value, rules, ascii);

    legalWholeFirstNameToPeriod();
}

export { checkName, checkMiddleName, checkLastName };
