import { IOutput } from '../../../domain/definition/output';
import { Book } from '../../../domain/entity/book';

export default interface IListBooksOutput extends IOutput {
  books: Book[] | [];
}
