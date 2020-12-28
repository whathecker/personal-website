import IListBooksResult from './listbooks-promise-result';

export default interface IListBooksRepository {
  listBooks(): Promise<IListBooksResult>;
}
