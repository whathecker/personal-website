import { ListBookInteractor } from './use-cases/listbooks//listbooks-interactor';
import { IListBooksOutput } from './use-cases/listbooks/interfaces';

export class App {
  constructor(private listBookInteractor: ListBookInteractor) {}

  async listBooks(): Promise<IListBooksOutput> {
    return await this.listBookInteractor.execute();
  }
}
