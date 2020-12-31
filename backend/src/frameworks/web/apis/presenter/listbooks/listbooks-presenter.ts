import { IPresenterOutput, IPresenter } from '../../../../../app/domain/definition/presenter';
import { IListBooksOutput } from '../../../../../app/use-cases/listbooks/interfaces';
import { Book, ReadStatus } from '../../../../../app/domain/entity/book';

export interface IListBooksPresenterOutput extends IPresenterOutput {
  books: Book[] | [];
}

export interface IListBooksQuery {
  status?: ReadStatus;
}

export interface IListBooksPresenter extends IPresenter<IListBooksOutput> {
  present(data: IListBooksOutput, query?: IListBooksQuery): Promise<IListBooksPresenterOutput>;
}
