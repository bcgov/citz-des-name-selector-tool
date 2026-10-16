import {
  checkErrorForMaxLength,
  checkErrorForMinLength,
  checkErrorForMaxNames
} from '$lib/utils.ts';

function checkFirstName(name: string, rules: any) {
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

// function checkMiddleName() {
//     let names = fullName.middle.name.split(' ');
//     checkErrorForMaxLength(
//         names[0],
//         rules.legalName.middle.length[0].maximum
//     );
//     if (names[1])
//         checkErrorForMaxLength(
//             names[1],
//             rules.legalName.middle.length[1].maximum
//         );
//     checkErrorForMaxNames(
//         fullName.middle.name,
//         rules.legalName.middle.count
//     );
// };
//
// function checkLastName() {
//     checkErrorForMinLength(
//         fullName.last.name,
//         rules.legalName.last.length[0].minimum
//     );
//     checkErrorForMaxLength(
//         fullName.last.name,
//         rules.legalName.last.length[0].maximum
//     );
//     checkErrorForMaxNames(fullName.last.name, rules.legalName.last.count);
// };
export {
  checkFirstName
};
