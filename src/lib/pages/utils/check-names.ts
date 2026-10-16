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
  else
      element?.classList.replace('disabled', 'primary');
}

function checkName(name: string, rules: any) {
  checkErrorForMinLength(
    name,
    rules.length[0].minimum
  );
  checkErrorForMaxLength(
    name,
    rules.length[0].maximum
  );
  checkErrorForMaxNames(name, rules.count);

  if (!fullName.initialized) fullName.initialized = true;
  checkErrors();
};

function checkMiddleName(name: string, rules: any) {
    let names = name.split(' ');
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
        name,
        rules.count
    );

    if (!fullName.initialized) fullName.initialized = true;
    checkErrors();
};

export {
  checkName,
  checkMiddleName
};
