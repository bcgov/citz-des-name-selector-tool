import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import '@bcgov/bc-sans/css/BC_Sans.css';
import { errors } from './shared.svelte';
import { type ErrorRule } from '$lib/types';
import { POLYNYM_PREFIXES } from '$lib/constants';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any }
    ? Omit<T, 'children'>
    : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
    ref?: U | null;
};

/**
 * @param str Target string to be tested
 */
export function isASCII(str: string): boolean {
    return /^(?!['-])[\x00-\x7F]*(?<!['-])$/.test(str);
}

/**
 *
 * @param str Target string to be tested.
 * @param minLength Minimum character length of the field being validated.
 */
export function isGreaterThanMinLength(str: string, minLength: number = 0) {
    return str.length > minLength;
}

/**
 * @param str Target string to be tested.
 * @param maxLength Maximum character length of the field being validated.
 */
export function isLessThanOrEqualToMaxLength(
    str: string,
    maxLength: number
): boolean {
    return str.length <= maxLength;
}

/**
 * @param str Target string to be tested.
 * @param maxNames Maximum names of the field being validated.
 */
export function isLessThanOrEqualToMaxNames(str: string, maxNames: number) {
    return str.split(' ').length <= maxNames;
}

export function checkErrorForMinLength(name: string, rule: ErrorRule) {
    let index = -1;

    if (isGreaterThanMinLength(name, rule.value)) errors.spliceByID(rule.id);
    else {
        errors.list.forEach((error: Omit<ErrorRule, 'value'>) => {
            if (error.id === rule.id) index = error.id;
        });

        if (index === -1)
            errors.push({
                id: rule.id,
                errorText: rule.errorText,
            });
    }
}

export function checkErrorForMaxLength(name: string, rule: ErrorRule) {
    let index = -1;

    if (isLessThanOrEqualToMaxLength(name, rule.value))
        errors.spliceByID(rule.id);
    else {
        errors.list.forEach((error: Omit<ErrorRule, 'value'>, i: number) => {
            if (error.id === rule.id) index = i;
        });

        if (index === -1)
            errors.push({
                id: rule.id,
                errorText: rule.errorText,
            });
    }
}

export function checkErrorForMaxNames(name: string, rule: ErrorRule) {
    let index = -1;

    if (isLessThanOrEqualToMaxNames(name, rule.value))
        errors.spliceByID(rule.id);
    else {
        errors.list.forEach((error: Omit<ErrorRule, 'value'>, i: number) => {
            if (error.id === rule.id) index = i;
        });

        if (index === -1)
            errors.push({
                id: rule.id,
                errorText: rule.errorText,
            });
    }
}

export function checkErrorForASCII(name: string, rule: ErrorRule) {
    if (isASCII(name)) {
        errors.spliceByID(rule.id);
    } else {
        let index = -1;

        errors.list.forEach((error: Omit<ErrorRule, 'value'>, i: number) => {
            if (error.id === rule.id) index = i;
        });

        if (index === -1)
            errors.push({
                id: rule.id,
                errorText: rule.errorText,
            });
    }
}

/**
 * Splits a full name according to rules aligned with the Person Name Data
 * Standard.
 *
 * Behaviour:
 * - Mononyms are placed in Last Name; First Name gets '.' if required.
 * - Polynym-aware splitting for multi-word names.
 *
 * @param {string} fullName - a string of someones full legal name
 * @return {[string, string, string]} - returns a tuple of the fullName string
 * that is applying PNDS
 */
export function splitPersonName(fullName: string): [string, string, string] {
    if (!fullName) return ['', '', ''];

    let parts: string[] = fullName.split(' ');

    switch (parts.length) {
        case 1:
            let mononym = parts[0];
            let first = '.';

            return [first, '', mononym];
        case 2:
            return [parts[0], '', parts[1]];
    }

    let lastParts: string[] = [parts[parts.length - 1]];

    let i = parts.length - 2;
    while (i >= 0 && parts[i].toLowerCase() in POLYNYM_PREFIXES) {
        lastParts.unshift(parts[i]);
        i--;
    }

    let first = parts[0];
    let middle = i >= 1 ? parts.slice(1, i + 1).join(' ') : '';
    let last = lastParts.join(' ');
    return [first, middle, last];
}
