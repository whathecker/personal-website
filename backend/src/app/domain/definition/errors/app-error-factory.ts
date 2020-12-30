import { Err } from './err';
import { CustomError } from './custom-error';

export interface IAppErrorFactory {
  getError(name: string, data?: Err): CustomError;
}
