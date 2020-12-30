import { ListBooksInteractor } from './use-cases/listbooks//listbooks-interactor';
import { IListBooksOutput } from './use-cases/listbooks/interfaces';

export class App {
  constructor(private listBooksInteractor: ListBooksInteractor) {}

  async listBooks(): Promise<IListBooksOutput> {
    return await this.listBooksInteractor.execute();
  }
}
