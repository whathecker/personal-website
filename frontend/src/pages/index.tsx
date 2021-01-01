import React from 'react';
import { Header, Footer } from '../components/shared';
import { HomepageArea } from '../components/app/homepage';
import { booksApiHelper } from '../api/api-helpers';
import { ListBooksQuery, Book } from '../api/types/books';
import { GlobalContext } from '../contexts/global-context';

type ObjType = Record<string, unknown>;

class Homepage extends React.Component<ObjType, ObjType> {
  static async getInitialProps(): Promise<Record<string, Book[] | []>> {
    let books: Book[] | [];

    try {
      const query: ListBooksQuery = { status: 'READING' };
      books = await booksApiHelper.listBooks(query);
    } catch (err) {
      console.error(err);
      books = null;
    }

    return { books };
  }

  componentDidMount(): void {
    const { books } = this.props;
    const { loadCurrentlyReadingBooks } = this.context;
    loadCurrentlyReadingBooks(books);
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

Homepage.contextType = GlobalContext;

export default Homepage;
