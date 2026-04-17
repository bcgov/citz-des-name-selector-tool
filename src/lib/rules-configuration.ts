export const rules = {
    legalName: {
        first: {
            length: {
                maximum: {
                    value: 50,
                    errorText: 
                        'Your Legal First Name exceeds the maximum allowable length for your first name',
                },
                minimum: {
                    value: 0,
                    errorText: 
                        'Your Legal First Name is less than the minimum allowable length for your first name'
                }
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
                    maximum: {
                        value: 50,
                        errorText: 
                            'Your first Legal Middle Name exceeds the maximum allowable length for your first name',
                    },
                    minimum: {
                        value: 0,
                        errorText: 
                            'Your first Legal Middle Name is less than the minimum allowable length for your first name'
                    }
                },
                1: {
                    maximum: {
                        value: 50,
                        errorText: 
                            'Your second Legal Middle Name exceeds the maximum allowable length for your first name',
                    },
                    minimum: {
                        value: 0,
                        errorText: 
                            'Your second Legal Middle Name is less than the minimum allowable length for your first name'
                    }
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
                maximum: {
                    value: 50,
                    errorText: 
                        'Your Legal Last Name exceeds the maximum allowable length for your first name',
                },
                minimum: {
                    value: 0,
                    errorText: 
                        'Your Legal Last Name is less than the minimum allowable length for your first name'
                }
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
                maximum: {
                    value: 12,
                    errorText: 
                        'Your Alternate First Name exceeds the maximum allowable length for your first name',
                },
                minimum: {
                    value: 0,
                    errorText: 
                        'Your Alternate First Name is less than the minimum allowable length for your first name'
                }
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
                    maximum: {
                        value: 12,
                        errorText: 
                            'Your first Alternate Middle Name exceeds the maximum allowable length for your first name',
                    },
                    minimum: {
                        value: 0,
                        errorText: 
                            'Your first Alternate Middle Name is less than the minimum allowable length for your first name'
                    }
                },
                1: {
                    maximum: {
                        value: 12,
                        errorText: 
                            'Your second Alternate Middle Name exceeds the maximum allowable length for your first name',
                    },
                    minimum: {
                        value: 0,
                        errorText: 
                            'Your second Alternate Middle Name is less than the minimum allowable length for your first name'
                    }
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
                maximum: {
                    value: 18,
                    errorText: 
                        'Your second Alternate Middle Name exceeds the maximum allowable length for your first name',
                },
                minimum: {
                    value: 0,
                    errorText: 
                        'Your second Alternate Middle Name is less than the minimum allowable length for your first name'
                }
            },
            count: {
                maximum: 1,
                errorText:
                    'The amount of Alternate Last Names exceeds the maximum number of names allowed',
            },
        },
    },
};
