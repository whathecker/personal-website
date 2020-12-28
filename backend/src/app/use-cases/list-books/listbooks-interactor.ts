import { IInteractor } from '../../domain/definition/interactor';
//import { IAppErrorFactory } from '../../domain/definition/errors/app-error-factory';
//import { ErrorType } from '../../domain/definition/errors/error-type';

//import { Book } from '../../domain/entity/book';

import { IListBooksOutput } from './interfaces';

export class ListBookInteractor implements IInteractor {
  async execute(): Promise<IListBooksOutput> {
    // fetch all books from repository

    // validate books?

    // return as list output
    return Promise.resolve({});
  }
}
