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

export { type ErrorRule, type ErrorRulesList };
