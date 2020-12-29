import { CustomError } from '../../../app/domain/definition/errors/custom-error';

export default class ListBooksError extends CustomError {
    public name = 'listBooksError';

    constructor() {
        super();
    }

    toString(): string {
        return `${this.name}: ${JSON.stringify(this.data, null, 2)}`;
    }
}