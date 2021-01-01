import * as React from 'react';
import {
  FinishedBookBackground,
  FinishedBookImg,
  FinishedBookDetailWrapper,
  BookTitle,
  AuthorInfo,
  ReadDate,
  MyReview,
  RatingSection,
  RatingSubheader,
  RatingStarSection,
} from './styled';
import { Rating } from './components';
import { FinishedReadingBook } from '../../../../types';

export interface FinishedBookProps {
  book: FinishedReadingBook;
}

const FinishedBook: React.FunctionComponent<FinishedBookProps> = (props: FinishedBookProps) => {
  const { book } = props;

  const renderRating = (rating: number): React.ReactNode => {
    return (
      <RatingSection className="rating-section">
        <RatingSubheader>{`My Rating:`}</RatingSubheader>
        <RatingStarSection>
          <Rating rating={rating} />
        </RatingStarSection>
      </RatingSection>
    );
  };

  const renderReview = (review: string): React.ReactNode => {
    return <MyReview className="review-section">{review}</MyReview>;
  };

  return (
    <FinishedBookBackground>
      <FinishedBookImg src={`https:${book.coverImage}`} />
      <FinishedBookDetailWrapper>
        <BookTitle>{book.title}</BookTitle>
        <AuthorInfo>{`by ${book.author}`}</AuthorInfo>
        {book && book.rating ? renderRating(book.rating) : null}
        <ReadDate>{`Read date: 2020.10`}</ReadDate>
        {book && book.review ? renderReview(book.review) : null}
      </FinishedBookDetailWrapper>
    </FinishedBookBackground>
  );
};

export default FinishedBook;
