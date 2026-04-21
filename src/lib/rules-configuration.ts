export const rules = {
    legalName: {
        first: {
            length: {
                maximum: {
                    id: 101,
                    value: 50,
                    errorText:
                        'Your Legal First Name exceeds the maximum allowable length for your first name',
                },
                minimum: {
                    id: 102,
                    value: 0,
                    errorText:
                        'Your Legal First Name is less than the minimum allowable length for your first name',
                },
            },
            count: {
                id: 103,
                maximum: 1,
                errorText:
                    'The amount of Legal First Names exceeds the maximum number of names allowed',
            },
        },
        middle: {
            length: {
                0: {
                    maximum: {
                        id: 104,
                        value: 50,
                        errorText:
                            'Your first Legal Middle Name exceeds the maximum allowable length for your first name',
                    },
                    minimum: {
                        id: 105,
                        value: 0,
                        errorText:
                            'Your first Legal Middle Name is less than the minimum allowable length for your first name',
                    },
                },
                1: {
                    maximum: {
                        id: 106,
                        value: 50,
                        errorText:
                            'Your second Legal Middle Name exceeds the maximum allowable length for your first name',
                    },
                    minimum: {
                        id: 107,
                        value: 0,
                        errorText:
                            'Your second Legal Middle Name is less than the minimum allowable length for your first name',
                    },
                },
            },
            count: {
                id: 108,
                maximum: 2,
                errorText:
                    'The amount of Legal Middle Names exceeds the maximum number of names allowed',
            },
        },
        last: {
            length: {
                maximum: {
                    id: 109,
                    value: 50,
                    errorText:
                        'Your Legal Last Name exceeds the maximum allowable length for your first name',
                },
                minimum: {
                    id: 110,
                    value: 0,
                    errorText:
                        'Your Legal Last Name is less than the minimum allowable length for your first name',
                },
            },
            count: {
                id: 111,
                maximum: 1,
                errorText:
                    'The amount of Legal Last Names exceeds the maximum number of names allowed',
            },
        },
    },
    alternateName: {
        first: {
            length: {
                maximum: {
                    id: 201,
                    value: 12,
                    errorText:
                        'Your Alternate First Name exceeds the maximum allowable length for your first name',
                },
                minimum: {
                    id: 202,
                    value: 0,
                    errorText:
                        'Your Alternate First Name is less than the minimum allowable length for your first name',
                },
            },
            count: {
                id: 203,
                maximum: 1,
                errorText:
                    'The amount of Alternate First Names exceeds the maximum number of names allowed',
            },
        },
        middle: {
            length: {
                0: {
                    maximum: {
                        id: 204,
                        value: 12,
                        errorText:
                            'Your first Alternate Middle Name exceeds the maximum allowable length for your first name',
                    },
                    minimum: {
                        id: 205,
                        value: 0,
                        errorText:
                            'Your first Alternate Middle Name is less than the minimum allowable length for your first name',
                    },
                },
                1: {
                    maximum: {
                        id: 206,
                        value: 12,
                        errorText:
                            'Your second Alternate Middle Name exceeds the maximum allowable length for your first name',
                    },
                    minimum: {
                        id: 207,
                        value: 0,
                        errorText:
                            'Your second Alternate Middle Name is less than the minimum allowable length for your first name',
                    },
                },
            },
            count: {
                id: 208,
                maximum: 2,
                errorText:
                    'The amount of Alternate Middle Names exceeds the maximum number of names allowed',
            },
        },
        last: {
            length: {
                maximum: {
                    id: 209,
                    value: 18,
                    errorText:
                        'Your Alternate Last Name exceeds the maximum allowable length for your first name',
                },
                minimum: {
                    id: 210,
                    value: 0,
                    errorText:
                        'Your Alternate Last Name is less than the minimum allowable length for your first name',
                },
            },
            count: {
                id: 211,
                maximum: 1,
                errorText:
                    'The amount of Alternate Last Names exceeds the maximum number of names allowed',
            },
        },
    },
};
