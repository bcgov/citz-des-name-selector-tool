import { STEP } from './constants';
import { rules } from './rules-configuration';
import { isASCII, isLessThanOrEqualToMaxLength } from './utils';

export type NameFields = {
    first: string;
    middle: string;
    last: string;
};

type ParsedNameState = {
    fullName: NameFields;
    altName: NameFields;
    hasAltNameParams: boolean;
};

const QUERY_PARAM = {
    legalFirst: 'lf',
    legalMiddle: 'lm',
    legalLast: 'll',
    alternateFirst: 'af',
    alternateMiddle: 'am',
    alternateLast: 'al',
    step: 'step',
} as const;

function getNameCount(name: string) {
    return name.split(' ').filter(Boolean).length;
}

function getQueryParam(params: URLSearchParams, key: string) {
    return params.get(key) ?? '';
}

export function parseNameStateFromSearch(search: string): ParsedNameState {
    const params = new URLSearchParams(search);

    const altName = {
        first: getQueryParam(params, QUERY_PARAM.alternateFirst),
        middle: getQueryParam(params, QUERY_PARAM.alternateMiddle),
        last: getQueryParam(params, QUERY_PARAM.alternateLast),
    };

    return {
        fullName: {
            first: getQueryParam(params, QUERY_PARAM.legalFirst),
            middle: getQueryParam(params, QUERY_PARAM.legalMiddle),
            last: getQueryParam(params, QUERY_PARAM.legalLast),
        },
        altName,
        hasAltNameParams: Object.values(altName).some(Boolean),
    };
}

export function serializeNameStateToSearch(
    fullName: NameFields,
    altName: NameFields,
    stepValue: number
) {
    const params = new URLSearchParams();

    if (fullName.first) params.set(QUERY_PARAM.legalFirst, fullName.first);
    if (fullName.middle) params.set(QUERY_PARAM.legalMiddle, fullName.middle);
    if (fullName.last) params.set(QUERY_PARAM.legalLast, fullName.last);
    if (altName.first) params.set(QUERY_PARAM.alternateFirst, altName.first);
    if (altName.middle) params.set(QUERY_PARAM.alternateMiddle, altName.middle);
    if (altName.last) params.set(QUERY_PARAM.alternateLast, altName.last);

    if (stepValue > STEP.WELCOME) {
        params.set(QUERY_PARAM.step, String(stepValue));
    }

    const nextSearch = params.toString();

    return nextSearch ? `?${nextSearch}` : '';
}

export function isValidLegalNameState(fullName: NameFields) {
    const legalMiddleLengthRules = Object.values(rules.legalName.middle.length);

    return (
        fullName.first.length > 0 &&
        fullName.last.length > 0 &&
        isLessThanOrEqualToMaxLength(
            fullName.first,
            rules.legalName.first.length[0].maximum.value
        ) &&
        isLessThanOrEqualToMaxLength(
            fullName.last,
            rules.legalName.last.length[0].maximum.value
        ) &&
        getNameCount(fullName.first) <= rules.legalName.first.count.value &&
        getNameCount(fullName.last) <= rules.legalName.last.count.value &&
        getNameCount(fullName.middle) <= rules.legalName.middle.count.value &&
        fullName.middle
            .split(' ')
            .filter(Boolean)
            .every((name, index) =>
                isLessThanOrEqualToMaxLength(
                    name,
                    legalMiddleLengthRules[index].maximum.value
                )
            )
    );
}

export function isValidAltNameState(altName: NameFields) {
    const alternateMiddleLengthRules = Object.values(
        rules.alternateName.middle.length
    );

    return (
        altName.first.length > 0 &&
        altName.last.length > 0 &&
        isLessThanOrEqualToMaxLength(
            altName.first,
            rules.alternateName.first.length[0].maximum.value
        ) &&
        isLessThanOrEqualToMaxLength(
            altName.last,
            rules.alternateName.last.length[0].maximum.value
        ) &&
        getNameCount(altName.first) <= rules.alternateName.first.count.value &&
        getNameCount(altName.last) <= rules.alternateName.last.count.value &&
        getNameCount(altName.middle) <=
            rules.alternateName.middle.count.value &&
        isASCII(altName.first) &&
        isASCII(altName.middle) &&
        isASCII(altName.last) &&
        altName.middle
            .split(' ')
            .filter(Boolean)
            .every((name, index) =>
                isLessThanOrEqualToMaxLength(
                    name,
                    alternateMiddleLengthRules[index].maximum.value
                )
            )
    );
}

export function getFurthestReachableStep(
    fullName: NameFields,
    altName: NameFields
) {
    if (isValidLegalNameState(fullName) && isValidAltNameState(altName)) {
        return STEP.VIEW_NAMES;
    }

    if (isValidLegalNameState(fullName)) {
        return STEP.ALTERNATIVE_NAME;
    }

    return STEP.WELCOME;
}

export function getInitialStepFromSearch(
    search: string,
    fullName: NameFields,
    altName: NameFields
) {
    const params = new URLSearchParams(search);
    const furthestReachableStep = getFurthestReachableStep(fullName, altName);
    const requestedStep = Number(params.get(QUERY_PARAM.step));

    if (!Number.isInteger(requestedStep)) {
        return furthestReachableStep;
    }

    return Math.min(
        Math.max(requestedStep, STEP.WELCOME),
        furthestReachableStep
    );
}
