import { describe, expect, it } from 'vitest';

import { STEP } from './constants';
import {
    getFurthestReachableStep,
    getInitialStepFromSearch,
    parseNameStateFromSearch,
    serializeNameStateToSearch,
} from './url-state';

describe('parseNameStateFromSearch', () => {
    it('hydrates legal and alternate names from the query string', () => {
        expect(
            parseNameStateFromSearch(
                '?lf=Jonathan&lm=Adam&ll=Smith&af=John&am=Adam&al=Smith'
            )
        ).toEqual({
            fullName: {
                first: 'Jonathan',
                middle: 'Adam',
                last: 'Smith',
            },
            altName: {
                first: 'John',
                middle: 'Adam',
                last: 'Smith',
            },
            hasAltNameParams: true,
        });
    });

    it('leaves alternate initialization false when no alternate params exist', () => {
        expect(parseNameStateFromSearch('?lf=Jonathan&ll=Smith')).toEqual({
            fullName: {
                first: 'Jonathan',
                middle: '',
                last: 'Smith',
            },
            altName: {
                first: '',
                middle: '',
                last: '',
            },
            hasAltNameParams: false,
        });
    });
});

describe('serializeNameStateToSearch', () => {
    it('serializes non-empty name fields and the current step', () => {
        expect(
            serializeNameStateToSearch(
                {
                    first: 'Jonathan',
                    middle: 'Adam',
                    last: 'Smith',
                },
                {
                    first: 'John',
                    middle: 'Adam',
                    last: 'Smith',
                },
                STEP.VIEW_NAMES
            )
        ).toBe('?lf=Jonathan&lm=Adam&ll=Smith&af=John&am=Adam&al=Smith&step=5');
    });
});

describe('step derivation', () => {
    it('restores the furthest step when both names are valid', () => {
        const fullName = {
            first: 'Jonathan',
            middle: 'Adam',
            last: 'Smith',
        };
        const altName = {
            first: 'John',
            middle: 'Adam',
            last: 'Smith',
        };

        expect(getFurthestReachableStep(fullName, altName)).toBe(
            STEP.VIEW_NAMES
        );
        expect(getInitialStepFromSearch('?step=5', fullName, altName)).toBe(
            STEP.VIEW_NAMES
        );
    });

    it('clamps the restored step when the alternate name is incomplete', () => {
        const fullName = {
            first: 'Jonathan',
            middle: '',
            last: 'Smith',
        };
        const altName = {
            first: 'John',
            middle: '',
            last: '',
        };

        expect(getFurthestReachableStep(fullName, altName)).toBe(
            STEP.ALTERNATIVE_NAME
        );
        expect(getInitialStepFromSearch('?step=5', fullName, altName)).toBe(
            STEP.ALTERNATIVE_NAME
        );
    });
});
