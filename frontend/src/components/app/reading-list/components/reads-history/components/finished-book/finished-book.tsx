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
} from './styled';

const FinishedBook: React.FunctionComponent = () => {
  return (
    <FinishedBookBackground>
      <FinishedBookImg src="/img/example-book-img.jpg" />
      <FinishedBookDetailWrapper>
        <BookTitle>{`Domain Driven Design: Tackling Complexity in the Heart of Software`}</BookTitle>
        <AuthorInfo>{`by Eric Evans`}</AuthorInfo>
        <RatingSection>{`My rating:`}</RatingSection>
        <ReadDate>{`Read date: 2020.10`}</ReadDate>
        <MyReview>{`Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. v Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book.`}</MyReview>
      </FinishedBookDetailWrapper>
    </FinishedBookBackground>
  );
};

export default FinishedBook;
