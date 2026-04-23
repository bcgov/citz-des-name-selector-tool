export type ErrorRule = {
    id: number;
    errorText: string;
    value: number;
};

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
    value: Omit<ErrorRule, 'value'>[] = $state([]);

    push(error: Omit<ErrorRule, 'value'>) {
        let tempArray = this.value;
        tempArray.push(error);
        this.value = tempArray.sort((a, b) => a.id - b.id);
    }

    splice(index: number) {
        let tempArray = this.value;
        if (index === this.value.length || this.value.length === 1) {
            tempArray.pop();
        } else {
            tempArray.splice(index, 1);
        }
        this.value = tempArray.sort((a, b) => a.id - b.id);
    }
}

export const errors = new Errors();
