import { describe, expect, suite, test } from 'vitest';

import { isASCII, isLessThanOrEqualToMaxLength } from './utils';

suite('isASCII()', () => {
    describe('boolean tests for ASCII validity', () => {
        // Test cases for valid ASCII strings (expected to be true)
        test.each([
            ['empty string', ''],
            ['basic letters', 'hello world'],
            ['with numbers and symbols', 'Company123!@#$'],
            ['full ASCII range characters', '\x00\x7F'], // Null to DEL characters
            ['with spaces and punctuation', '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~'],
        ])('should return true for valid ASCII string: %s', (name, str) => {
            expect(isASCII(str)).toBe(true);
        });

        // Test cases for invalid non-ASCII strings (expected to be false)
        test.each([
            ['non-ASCII character (Ã©)', 'Ã©ton'],
            ['unicode characters', '你好, world'],
            ['extended ASCII range', '\x80\xFF'],
            ['emoji', '😊'],
        ])('should return false for non-ASCII string: %s', (name, str) => {
            expect(isASCII(str)).toBe(false);
        });
    });

    // Test cases for edge cases based on the regex's specific constraints
    // Regex: /^(?!['-])[\x00-\x7F]*(?<!['-])$/
    describe('regex specific tests', () => {
        // These should be false because the string starts with ' or -
        test.each([
            ['starts with apostrophe', "'hello"],
            ['starts with hyphen', '-world'],
            ['starts with apostrophe and has non-ascii later', "'Ã©ton"],
        ])(
            "should return false for strings starting with ' or -: %s",
            (name, str) => {
                expect(isASCII(str)).toBe(false);
            }
        );

        // These should be false because the string ends with ' or -
        test.each([
            ['ends with apostrophe', "hello'"],
            ['ends with hyphen', 'world-'],
            ['ends with apostrophe and has non-ascii earlier', 'Ã©ton"'],
            ['ends with apostrophe and has non-ascii earlier 2', "Ã©ton'"],
        ])(
            "should return false for strings ending with ' or -: %s",
            (name, str) => {
                expect(isASCII(str)).toBe(false);
            }
        );

        // Valid cases that include ' or - internally, but not at the start or end
        test.each([
            ['apostrophe internal', "hel'lo"],
            ['hyphen internal', 'wor-ld'],
            ['both internal', "hel'-lo"],
        ])(
            "should return true for strings with internal ' or -: %s",
            (name, str) => {
                expect(isASCII(str)).toBe(true);
            }
        );
    });
});

suite('isLessThanOrEqualToMaxLength', () => {
    test('returns true for strings with length less than or equal to the max length', () => {
        expect(isLessThanOrEqualToMaxLength('', 2)).toBeTruthy();
        expect(isLessThanOrEqualToMaxLength('a', 2)).toBeTruthy();
        expect(isLessThanOrEqualToMaxLength('ab', 2)).toBeTruthy();
    });

    test('returns false for strings with length greater than the max length', () => {
        expect(isLessThanOrEqualToMaxLength('abc', 2)).toBeFalsy();
    });
});
