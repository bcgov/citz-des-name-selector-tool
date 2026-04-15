import { describe, expect, it } from 'vitest';

import { isASCII } from '$lib/utils';
import { isLessThanOrEqualToMaxLength } from '$lib/utils';
import { rules } from '$lib/rules-configuration';

import { failsAsciiValidation } from './testData';

describe('Case: failsAsciiValidation', () => {
    it(`Alternate first name ${failsAsciiValidation.alternateFirstName} fails ASCII validation`, () => {
        expect(isASCII(failsAsciiValidation.alternateFirstName)).toBeFalsy();
    });

    it(`Alternate first name ${failsAsciiValidation.alternateFirstName} passes length validation`, () => {
        expect(
            isLessThanOrEqualToMaxLength(
                failsAsciiValidation.alternateFirstName,
                rules.alternateName.first.length.maximumPerName
            )
        ).toBeTruthy();
    });

    it(`Alternate middle name ${failsAsciiValidation.alternateMiddleName} fails ASCII validation`, () => {
        expect(isASCII(failsAsciiValidation.alternateMiddleName)).toBeFalsy();
    });

    const middleNames = failsAsciiValidation.alternateFirstName.split(' ');

    it('Count of alternate middle names is less than or equal to max number of middle names', () => {
        expect(
            middleNames.length <= rules.alternateName.middle.count.maximum
        ).toBeTruthy();
    });

    middleNames.forEach((middleName) => {
        it(`Alternate middle name "${middleName}" passes length validation`, () => {
            expect(
                isLessThanOrEqualToMaxLength(
                    middleName,
                    rules.alternateName.first.length.maximumPerName
                )
            ).toBeTruthy();
        });
    });

    it(`Alternate last name ${failsAsciiValidation.alternateLastName} fails ASCII validation`, () => {
        expect(isASCII(failsAsciiValidation.alternateLastName)).toBeFalsy();
    });

    it(`Alternate last name ${failsAsciiValidation.alternateLastName} passes length validation`, () => {
        expect(
            isLessThanOrEqualToMaxLength(
                failsAsciiValidation.alternateLastName,
                rules.alternateName.last.length.maximum
            )
        ).toBeTruthy();
    });
});
