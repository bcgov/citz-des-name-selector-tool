export const rules = {
    // TODO: Are there rules for "legal name" or are these rules all for "alternate name"?
    alternateName: {
        first: {
            length: {
                maximumPerName: 12,
                errorText:
                    'Your Legal First Name exceeds the maximum allowable length for your first name',
            },
            count: {
                maximum: 1,
                errorText:
                    'The amount of Legal First Names exceeds the maximum number of names allowed',
            },
        },
        middle: {
            length: {
                0: {
                    maximum: 12,
                    errorText:
                        'Your first Legal Middle Name exceeds the maximum length of a middle name',
                },
                1: {
                    maximum: 12,
                    errorText:
                        'Your second middle name exceeds the maximum length of a middle name',
                },
            },
            count: {
                maximum: 2,
                errorText:
                    'The amount of Legal Middle Names exceeds the maximum number of names allowed',
            },
        },
        last: {
            length: {
                maximum: 18,
                errorText:
                    'Your Legal Last Name exceeds the maximum allowable length for your last name',
            },
            count: {
                maximum: 1,
                errorText:
                    'The amount of Legal Last Names exceeds the maximum number of names allowed',
            },
        },
    },
};
