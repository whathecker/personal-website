import { IAppErrorFactory } from '../../domain/definition/errors/app-error-factory';
import { IInteractor } from '../../domain/definition/interactor';
import { ErrorType } from '../../domain/definition/errors/error-type';

import { IListBooksRepository, IListBooksOutput, IFetchBooksResult } from './interfaces';

export class ListBooksInteractor implements IInteractor {
  constructor(private listBooksRepository: IListBooksRepository, private errorFactory: IAppErrorFactory) {}

  async execute(): Promise<IListBooksOutput> {
    try {
      const listBooksResult: IFetchBooksResult = await this.listBooksRepository.fetchBooks();

      if (listBooksResult.status === 'FETCH_BOOK_FAILED') {
        throw this.errorFactory.getError(ErrorType.fetchBooks, listBooksResult.errorData);
      }

      const output: IListBooksOutput = {
        books: listBooksResult.books || [],
      };

      return Promise.resolve(output);
    } catch (error) {
      throw this.errorFactory.getError(ErrorType.listBooks, error);
    }
  }
}
