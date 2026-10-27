type ErrorRule = {
    id: number;
    errorText: string;
    value: number;
};

type ErrorRulesList = {
    length: {
        [index: number]: {
            maximum: ErrorRule;
            minimum: ErrorRule;
        };
    };
    count: ErrorRule;
    ascii: ErrorRule;
};

const PolynymPrefixes = {
    VAN: 'van',
    VON: 'von',
    DER: 'der',
    DE: 'de',
    DA: 'da',
    DI: 'di',
    LA: 'la',
    LE: 'le',
    BIN: 'bin',
    IBN: 'ibn',
    AL: 'al',
    EL: 'el',
} as const;

type PolynymPrefixes = (typeof PolynymPrefixes)[keyof typeof PolynymPrefixes];

export { type ErrorRule, type ErrorRulesList, type PolynymPrefixes };
