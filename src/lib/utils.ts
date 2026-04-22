import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import '@bcgov/bc-sans/css/BC_Sans.css';
import { errors, fullName } from './shared.svelte';
import { rules } from './rules-configuration';

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

export function fullNameValidationCheck () {
    if (isGreaterThanMinLength(
            fullName.first.name,
            rules.legalName.first.length.minimum.value
    )) {
        console.log('is Greater than min length');
    
        let index = -1;    
        
        errors.value.forEach((error, i: number) => {
            if (rules.legalName.first.length.minimum.id === error.id) {
                console.log('found ID');
                index = i;
            }
        });

        if (index > -1) {
            console.log('removing error');
            let tempArray = errors.value.splice(index, 1);
            $inspect(tempArray);

            tempArray.sort((a, b) => a.id - b.id);

            errors.set(tempArray);
        }

    }
    if (!isGreaterThanMinLength(
        fullName.first.name,
        rules.legalName.first.length.minimum.value
    )) {
        console.log('is NOT Greater than min length');
        let index = -1;

        errors.value.forEach((error, i: number) => {
            if (rules.legalName.first.length.minimum.id === error.id) {
                console.log('found ID', error);
                index = i;
            }
        });

        if (index === -1) {
            console.log('Adding error');
            let tempArray = errors.value;
            $inspect(tempArray);

            tempArray.push({
                id: rules.legalName.first.length.minimum.id,
                message: rules.legalName.first.length.minimum.errorText
            });

            errors.set(tempArray);
            // let tempArray = $derived(errors.value.splice(index, 1));

            // tempArray.sort((a, b) => a.id - b.id);

            // errors.set(tempArray);
        }
            
    }
}
