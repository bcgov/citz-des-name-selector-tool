import {
  checkErrorForMaxLength,
  checkErrorForMinLength,
  checkErrorForMaxNames
} from '$lib/utils.ts';

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
};

export {
  checkName,
  checkMiddleName
};
