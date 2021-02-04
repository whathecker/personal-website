import * as React from 'react';
import { Book } from '../api/types/books';

type ObjType = Record<string, unknown>;
type Books = Book[] | [];

export interface IGlobalContext {
  currentlyReadingBooks: Books;
  finishedReadingBooks: Books;
  loadCurrentlyReadingBooks: (BooksInput) => void;
  loadFinishedBooks: (BooksInput) => void;
}

type DefaultValue = undefined;
type ContextValue = DefaultValue | IGlobalContext;

const GlobalContext = React.createContext<ContextValue>(undefined);

class GlobalContextProvider extends React.Component<ObjType, IGlobalContext> {
  constructor(props: ObjType) {
    super(props);
    this.state = {
      currentlyReadingBooks: [],
      finishedReadingBooks: [],
      loadCurrentlyReadingBooks: this.loadCurrentlyReadingBooks.bind(this),
      loadFinishedBooks: this.loadFinishedBooks.bind(this),
    };
  }

  loadCurrentlyReadingBooks(books: Books): void {
    this.setState({ currentlyReadingBooks: books });
  }

  loadFinishedBooks(books: Books): void {
    this.setState({ finishedReadingBooks: this.sortFinishedBooksByFinishedDate(books) });
  }

  render(): React.ReactNode {
    return <GlobalContext.Provider value={this.state}>{this.props.children}</GlobalContext.Provider>;
  }

  private sortFinishedBooksByFinishedDate(books: Books): Books {
    return books.sort((a: Book , b: Book) => {
      if (a.readDate > b.readDate) {
        return -1;
      }
      if (a.readDate < b.readDate) {
        return 1;
      }
      return 0;
    });
  }
}

export { GlobalContext };
export { GlobalContextProvider };
