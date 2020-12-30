import { axiosBackend } from '../instances';

const books: Record<string, unknown> = {};

books.listBooks = async (): Promise<unknown> => {
  try {
    const response = await axiosBackend.get('/books/', {
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
};

export default books;
