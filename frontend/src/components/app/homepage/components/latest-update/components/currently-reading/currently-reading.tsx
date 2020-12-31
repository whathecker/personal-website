import * as React from 'react';
import {
  CurrentlyReadingSection,
  HeaderWrapper,
  CurrentlyReadingHeader,
  CurrentlyReadingLink,
  BookWrapper,
  BookImgWrapper,
  BookImg,
  BookDetailWrapper,
  BookTitle,
  AuthorInfo,
} from './styled';

export interface CurrentlyReadingProps {
  book: {
    title: string;
    author: string;
    coverImage: string;
  };
}

const CurrentlyReading: React.FunctionComponent<CurrentlyReadingProps> = (props: CurrentlyReadingProps) => {
  const { book } = props;
  const { title, author, coverImage } = book;

  return (
    <CurrentlyReadingSection>
      <HeaderWrapper>
        <CurrentlyReadingHeader>{`Currently Reading`}</CurrentlyReadingHeader>
        <CurrentlyReadingLink href="/reading-list">{`checkout my reading list`}</CurrentlyReadingLink>
      </HeaderWrapper>
      <BookWrapper>
        <BookImgWrapper>
          <BookImg src={`https:${coverImage}`} />
        </BookImgWrapper>
        <BookDetailWrapper>
          <BookTitle>{title}</BookTitle>
          <AuthorInfo>{`by ${author}`}</AuthorInfo>
        </BookDetailWrapper>
      </BookWrapper>
    </CurrentlyReadingSection>
  );
};

export default CurrentlyReading;
