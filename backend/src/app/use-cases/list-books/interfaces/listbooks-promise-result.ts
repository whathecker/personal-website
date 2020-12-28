import { IPromiseStatus } from '../../../domain/definition/promise-status';
import { Book } from '../../../domain/entity/book';

export default interface IListBooksResult extends IPromiseStatus {
  status: 'LIST_BOOK_SUCCESS' | 'LIST_BOOK_FAILED';
  books: Book[] | [];
}
