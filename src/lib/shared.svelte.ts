import { type ErrorRule } from "./types";

export const fullName = $state({
    first: {
        name: '',
        initialized: false,
    },
    middle: {
        name: '',
    },
    last: {
        name: '',
        initialized: false,
    },
    namesInitialized() {
        return this.first.initialized && this.last.initialized;
    },
});

export function fullNameToString() {
    return `${fullName.first.name} ${fullName.middle.name} ${fullName.last.name}`;
}

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
    initialized: false,
});

export function AltNameToString() {
    return `${altName.first.name} ${altName.middle.name} ${altName.last.name}`;
}

export const step = $state({
    value: 0,
    isStep(step: number) {
        return this.value === step;
    },
});

class Errors {
    #list: Omit<ErrorRule, 'value'>[] = $state([]);

    get list() {
        return this.#list;
    }

    set list(array: Omit<ErrorRule, 'value'>[]) {
        this.#list = array;
    }

    get length() {
        return this.#list.length;
    }

    push(error: Omit<ErrorRule, 'value'>) {
        let tempArray = this.list;
        tempArray.push(error);
        this.list = tempArray;
    }

    #splice(index: number) {
        let tempArray = this.list;
        if (index === this.length || this.length === 1) {
            tempArray.pop();
        } else {
            tempArray.splice(index, 1);
        }
        this.list = tempArray;
    }

    spliceByID(id: number) {
        let index = -1;

        this.list.forEach((error: ErrorRule, i: number) => {
            if (error.id === id) index = i;
        });

        if (index > -1) this.#splice(index);
    }

    hasError(id: number) {
        return this.list.find((error: ErrorRule) => error.id === id) !== undefined;
    }

    getMessage(id: number) {
        return this.list.find((error: ErrorRule) => error.id === id)?.errorText;
    }

    hasZeroErrors() {
        return this.list.length === 0;
    }

    hasErrors() {
        return this.list.length > 0;
    }
}

export const errors = new Errors();
