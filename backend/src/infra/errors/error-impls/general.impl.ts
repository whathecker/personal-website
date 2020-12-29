import { CustomError } from '../../../app/domain/definition/errors/custom-error';

export default class GeneralError extends CustomError {
  public name = 'generalError';

  constructor() {
    super();
  }

  toString(): string {
    return `${this.name}`;
  }
}
