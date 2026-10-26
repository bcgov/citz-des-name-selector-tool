type ErrorRule = {
    id: number;
    errorText: string;
    value: number;
};

type ErrorRulesList = {
    length: {
        0: {
            maximum: ErrorRule;
            minimum: ErrorRule;
        };
        1: {
            maximum: ErrorRule;
            minimum: ErrorRule;
        };
    };
    count: ErrorRule;
    ascii: ErrorRule;
};

export { type ErrorRule, type ErrorRulesList };
