export const rules = {
    legalName: {
        first: {
            length: {
                maximumPerName: 50,
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
                    maximum: 50,
                    errorText:
                        'Your first Legal Middle Name exceeds the maximum length of a middle name',
                },
                1: {
                    maximum: 50,
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
                maximum: 50,
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
    alternateName: {
        first: {
            length: {
                maximumPerName: 12,
                errorText:
                    'Your Alternate First Name exceeds the maximum allowable length for your first name',
            },
            count: {
                maximum: 1,
                errorText:
                    'The amount of Alternate First Names exceeds the maximum number of names allowed',
            },
        },
        middle: {
            length: {
                0: {
                    maximum: 12,
                    errorText:
                        'Your first Alternate Middle Name exceeds the maximum length of a middle name',
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
                    'The amount of Alternate Middle Names exceeds the maximum number of names allowed',
            },
        },
        last: {
            length: {
                maximum: 18,
                errorText:
                    'Your Alternate Last Name exceeds the maximum allowable length for your last name',
            },
            count: {
                maximum: 1,
                errorText:
                    'The amount of Alternate Last Names exceeds the maximum number of names allowed',
            },
        },
    },
};
