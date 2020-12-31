import React from 'react';
import { Header, Footer } from '../components/shared';
import { HomepageArea } from '../components/app/homepage';
import { booksApiHelper } from '../api/api-helpers';
import { ListBooksQuery, Book } from '../api/types/books';

type EmptyObj = Record<string, unknown>;

class Homepage extends React.Component<EmptyObj, EmptyObj> {
  static async getInitialProps(): Promise<Record<string, Book[] | []>> {
    let books: Book[] | [];

    try {
      const query: ListBooksQuery = { status: 'READING' };
      books = await booksApiHelper.listBooks(query);
      console.log(books);
    } catch (err) {
      console.error(err);
      books = null;
    }

    return { books };
  }

  render(): React.ReactNode {
    return (
      <>
        <Header />
        <HomepageArea />
        <Footer />
      </>
    );
  }
}

export default Homepage;
