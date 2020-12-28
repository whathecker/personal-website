import { IPromiseStatus } from '../../../domain/definition/promise-status';
import { Book } from '../../../domain/entity/book';

export default interface IFetchBooksResult extends IPromiseStatus {
  status: 'FETCH_BOOK_SUCCESS' | 'FETCH_BOOK_FAILED';
  books: Book[] | [];
  errorData?: unknown;
}
