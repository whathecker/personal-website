import * as React from 'react';
import { StyledH2, ActiveBookWrapper, BookImg, BookDetailWrapper, BookTitle, AuthorInfo } from './styled';
import { ActivelyReadingBook } from '../../types';

export interface ActiveReadsProps {
  books: ActivelyReadingBook[];
}

const ActiveReads: React.FunctionComponent<ActiveReadsProps> = (props: ActiveReadsProps) => {
  const { books } = props;

  const renderActiveReads = (books: ActivelyReadingBook[]): React.ReactNode => {
    return books.map((book: ActivelyReadingBook, index: number) => {
      return (
        <ActiveBookWrapper className="active-book" key={index}>
          <BookImg alt={book.title} src={`https:${book.coverImage}`} />
          <BookDetailWrapper>
            <BookTitle>{book.title}</BookTitle>
            <AuthorInfo>{`by ${book.author}`}</AuthorInfo>
          </BookDetailWrapper>
        </ActiveBookWrapper>
      );
    });
  };

  return (
    <>
      <StyledH2>{`Currently reading`}</StyledH2>
      {books.length > 0 && books ? renderActiveReads(books) : null}
    </>
  );
};

export default ActiveReads;
