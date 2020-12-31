import { IListBooksPresenter, IListBooksPresenterOutput, IListBooksQuery } from './listbooks-presenter';
import { IListBooksOutput } from '../../../../../app/use-cases/listbooks/interfaces';
import { Book } from '../../../../../app/domain/entity/book';

export class ListBooksPresenter implements IListBooksPresenter {
  present(data: IListBooksOutput, query?: IListBooksQuery): Promise<IListBooksPresenterOutput> {
    let booksData = data.books as Book[] | [];

    if (query && query.status && booksData.length > 0) {
      booksData = this.filterBooksByStatus(booksData, query.status);
    }

    return Promise.resolve({ books: booksData });
  }

  private filterBooksByStatus(booksArr: Book[], status: string): Book[] | [] {
    return booksArr.filter((book) => book.readStatus === status);
  }
}
