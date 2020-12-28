import * as React from 'react';
import {
  FinishedBookBackground,
  FinishedBookImg,
  FinishedBookDetailWrapper,
  FinishedBookLink,
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
        <FinishedBookLink href="https://www.amazon.com" target="_blank">
          <BookTitle>{`Domain Driven Design: Tackling Complexity in the Heart of Software`}</BookTitle>
        </FinishedBookLink>
        <AuthorInfo>{`by Eric Evans`}</AuthorInfo>
        <RatingSection>{`My rating:`}</RatingSection>
        <ReadDate>{`Read date: 2020.10`}</ReadDate>
        <MyReview>{`Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. v Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book. Here is my reveiw about this book.`}</MyReview>
      </FinishedBookDetailWrapper>
    </FinishedBookBackground>
  );
};

export default FinishedBook;
