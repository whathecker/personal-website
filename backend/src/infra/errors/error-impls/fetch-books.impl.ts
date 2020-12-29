import { CustomError } from '../../../app/domain/definition/errors/custom-error';

export default class FetchBooksError extends CustomError {
  public name = 'fetchBooksError';

  constructor() {
    super();
  }

  toString(): string {
    return `${this.name}: ${JSON.stringify(this.data, null, 2)}`;
  }
}
