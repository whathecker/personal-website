import { IAppErrorFactory } from '../../app/domain/definition/errors/app-error-factory';
import { ErrorDataType, CustomError } from '../../app/domain/definition/errors/custom-error';
import { ERRORS } from './errors';

export class AppErrorFactory implements IAppErrorFactory {
  getError(errorType: string, data?: ErrorDataType): CustomError {
    const errorObject = ERRORS[errorType as keyof typeof ERRORS] || ERRORS['general'];
    const errorData = data || {};

    errorObject.initialize(errorData);
    return errorObject;
  }
}
