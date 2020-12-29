import { GeneralError, FetchBooksError, ListBooksError } from './error-impls';
import { CustomError } from '../../app/domain/definition/errors/custom-error';

export const ERRORS: Record<string, CustomError> = {
    general: new GeneralError(),
    fetchBooks: new FetchBooksError(),
    listBooks: new ListBooksError(),
};