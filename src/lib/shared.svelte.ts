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

    push(error: ErrorMessage) {
        this.value.push(error)
        this.value = this.value.sort((a, b) => a.id - b.id);
    }

    splice(index: number) {
        if (index === this.value.length || this.value.length === 1) {
            this.value.pop();
        } else {
            this.value.splice(index, 1);
        }
        this.value = this.value.sort((a, b) => a.id - b.id);
    }
}

export const errors = new Errors();