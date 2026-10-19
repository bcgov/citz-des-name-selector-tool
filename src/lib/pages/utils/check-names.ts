import { errors, fullName} from '$lib/shared.svelte';
import {
  checkErrorForMaxLength,
  checkErrorForMinLength,
  checkErrorForMaxNames
} from '$lib/utils.ts';

function checkErrors() {
    const element = document.getElementById('primary-button');
    if (errors.hasErrors())
        element?.classList.replace('primary', 'disabled');
    else if (!fullName.first.initialized || !fullName.last.initialized) {
        element?.classList.replace('primary', 'disabled');
        return;
    }
    element?.classList.replace('disabled', 'primary');
}

function checkName(value: { name: string, initialized: boolean }, rules: any) {
    checkErrorForMinLength(
        value.name,
        rules.length[0].minimum
    );
    checkErrorForMaxLength(
        value.name,
        rules.length[0].maximum
    );

    if (!value.initialized) value.initialized = true;

    checkErrorForMaxNames(value.name, rules.count);
    checkErrors();
};

function checkMiddleName(value: { name: string, initialized: boolean }, rules: any) {
    let names = value.name.split(' ');
    checkErrorForMaxLength(
        names[0],
        rules.length[0].maximum
    );
    if (names[1])
        checkErrorForMaxLength(
            names[1],
            rules.length[1].maximum
        );
    checkErrorForMaxNames(
        value.name,
        rules.count
    );

    if (!value.initialized) value.initialized = true;
    checkErrors();
};

export {
  checkName,
  checkMiddleName
};
