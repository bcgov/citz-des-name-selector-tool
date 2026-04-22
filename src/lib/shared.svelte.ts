type ErrorMessage= {
    id: number;
    message: string;
}

export const fullName = $state({
    first: {
        name: '',
    },
    middle: {
        name: '',
    },
    last: {
        name: '',
    },
});

export const altName = $state({
    first: {
        name: '',
    },
    middle: {
        name: '',
    },
    last: {
        name: '',
    },
});

export const step = $state({ value: 0, max: 4 });

// export const errors = $state({ value: [] });
class Errors {
    value: ErrorMessage[] = $state([])

    get () {
        return this.value;
    }

    set(errors: ErrorMessage[]) {
        this.value = errors
    }
}

export const errors = new Errors();