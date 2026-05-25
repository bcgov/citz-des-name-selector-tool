export const rules = {
    legalName: {
        first: {
            length: {
                0: {
                    maximum: {
                        id: 101,
                        value: 50,
                        errorText:
                            'You have exceeded the max # of 50 characters',
                    },
                    minimum: {
                        id: 102,
                        value: 0,
                        errorText: 'This is a required field',
                    },
                },
            },
            count: {
                id: 103,
                value: 1,
                errorText: 'Up to 1 name for this field',
            },
        },
        middle: {
            length: {
                0: {
                    maximum: {
                        id: 104,
                        value: 50,
                        errorText:
                            'Your 1st middle name has exceeded the max # of 50 characters',
                    },
                    minimum: {
                        id: 105,
                        value: 0,
                        errorText:
                            'Your 1st middle name must have at least 1 character',
                    },
                },
                1: {
                    maximum: {
                        id: 106,
                        value: 50,
                        errorText:
                            'Your 2nd middle name has exceeded the max # of 50 characters',
                    },
                    minimum: {
                        id: 107,
                        value: 0,
                        errorText:
                            'Your 2nd middle name must have at least 1 character',
                    },
                },
            },
            count: {
                id: 108,
                value: 2,
                errorText: 'Up to 2 names only in this field',
            },
        },
        last: {
            length: {
                0: {
                    maximum: {
                        id: 109,
                        value: 50,
                        errorText:
                            'You have exceeded the max # of 50 characters',
                    },
                    minimum: {
                        id: 110,
                        value: 0,
                        errorText: 'This is a required field',
                    },
                },
            },
            count: {
                id: 111,
                value: 1,
                errorText: 'Up to 1 name for this field',
            },
        },
    },
    alternateName: {
        first: {
            length: {
                0: {
                    maximum: {
                        id: 201,
                        value: 12,
                        errorText:
                            'You have exceeded the max # of 12 characters',
                    },
                    minimum: {
                        id: 202,
                        value: 0,
                        errorText: 'This is a required field',
                    },
                },
            },
            count: {
                id: 203,
                value: 1,
                errorText: 'Up to 1 name for this field',
            },
            ascii: {
                id: 204,
                value: 1,
                errorText: 'This field contains unsupported characters',
            },
        },
        middle: {
            length: {
                0: {
                    maximum: {
                        id: 205,
                        value: 12,
                        errorText:
                            'Your 1st middle name has exceeded the max # of 12 characters',
                    },
                    minimum: {
                        id: 206,
                        value: 0,
                        errorText:
                            'Your 1st middle name must have at least 1 character',
                    },
                },
                1: {
                    maximum: {
                        id: 207,
                        value: 12,
                        errorText:
                            'Your 2nd middle name has exceeded the max # of 12 characters',
                    },
                    minimum: {
                        id: 208,
                        value: 0,
                        errorText:
                            'Your 2nd middle name must have at least 1 character',
                    },
                },
            },
            count: {
                id: 209,
                value: 2,
                errorText: 'Up to 2 names only in this field',
            },
            ascii: {
                id: 210,
                value: 1,
                errorText: 'This field contains unsupported characters',
            },
        },
        last: {
            length: {
                0: {
                    maximum: {
                        id: 211,
                        value: 18,
                        errorText:
                            'You have exceeded the max # of 18 characters',
                    },
                    minimum: {
                        id: 212,
                        value: 0,
                        errorText: 'This is a required field',
                    },
                },
            },
            count: {
                id: 213,
                value: 1,
                errorText: 'Up to 1 name for this field',
            },
            ascii: {
                id: 214,
                value: 1,
                errorText: 'This field contains unsupported characters',
            },
        },
    },
    truncationRules: {
        first: {
            length: {
                0: {
                    maximum: {
                        id: 301,
                        value: 15,
                        errorText:
                            'Your legal first name may be truncated on your BC ID, BC Services Card, BC Driver’s License.',
                    },
                },
            },
        },
        middle: {
            length: {
                0: {
                    maximum: {
                        id: 311,
                        value: 15,
                        errorText:
                            'Your legal middle name(s) may be truncated on your BC ID, BC Services Card, BC Driver’s License.',
                    },
                },
                1: {
                    maximum: {
                        id: 312,
                        value: 15,
                        errorText:
                            'Your legal middle name(s) may be truncated on your BC ID, BC Services Card, BC Driver’s License.',
                    },
                },
            },
        },
        last: {
            length: {
                0: {
                    maximum: {
                        id: 321,
                        value: 35,
                        errorText:
                            'Your legal last name may be truncated on your BC ID, BC Services Card, BC Driver’s License.',
                    },
                },
            },
            mononym: {
                id: 322,
                value: 0,
                errorText:
                    'Your name may be printed in both the first and last name fields on your birth certificate, BC ID, BC Services Card, BC Driver’s License.',
            },
        },
    },
};
