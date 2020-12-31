import { axiosBackend } from '../instances';
import { ListBooksQuery, Book } from '../types/books';

class BooksApiHelper {
  async listBooks (query?: ListBooksQuery) : Promise<Book[]>{
    try {

      let path: string = '/books/';

      if (query && query.status) {
        path = path.concat(`?status=${query.status}`);
      };

      const response = await axiosBackend.get(path, {
        withCredentials: true,
      });
  
      if (response.status === 200) {
        return Promise.resolve(response.data);
      }
      return Promise.reject('failed');
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  }
};

export default new BooksApiHelper();

