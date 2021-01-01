import * as React from 'react';
import { StyledH2, FinishedBooksSection, FinishedBookWrapper } from './styled';
import { FinishedBook } from './components';
import { FinishedReadingBook } from '../../types';

export interface ReadsHistoryProps {
  books: FinishedReadingBook[];
}

const ReadsHistory: React.FunctionComponent<ReadsHistoryProps> = (props: ReadsHistoryProps) => {
  const { books } = props;

  const renderReadsHistory = (books: FinishedReadingBook[]): React.ReactNode => {
    return books.map((_book: FinishedReadingBook, index: number) => {
      return (
        <FinishedBookWrapper key={index} className="finished-book">
          <FinishedBook />
        </FinishedBookWrapper>
      );
    });
  };

  return (
    <>
      <StyledH2>{`What I have read`}</StyledH2>
      <FinishedBooksSection>{books.length > 0 && books ? renderReadsHistory(books) : null}</FinishedBooksSection>
    </>
  );
};

export default ReadsHistory;
