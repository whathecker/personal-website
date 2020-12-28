import IFetchBooksResult from './listbooks-promise-result';

export default interface IListBooksRepository {
  fetchBooks(): Promise<IFetchBooksResult>;
}
