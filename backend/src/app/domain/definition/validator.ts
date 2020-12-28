import { IValidatorResult } from './validator-result';

export interface IValidator<T> {
  validate(value: T): IValidatorResult;
}
