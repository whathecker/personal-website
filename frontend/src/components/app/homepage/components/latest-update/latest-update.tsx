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

const LatestUpdate: React.FunctionComponent = () => {
  return (
    <>
      <CurrentlyReadingSection>
        <HeaderWrapper>
          <CurrentlyReadingHeader>{`Currently Reading`}</CurrentlyReadingHeader>
          <CurrentlyReadingLink>{`checkout my reading list`}</CurrentlyReadingLink>
        </HeaderWrapper>
        <BookWrapper>
          <BookImgWrapper>
            <BookImg src="/img/example-book-img.jpg" />
          </BookImgWrapper>
          <BookDetailWrapper>
            <BookTitle>{`Domain Driven Design: Tackling Complexity in the Heart of Software`}</BookTitle>
            <AuthorInfo>{`by Eric Evans`}</AuthorInfo>
          </BookDetailWrapper>
        </BookWrapper>
      </CurrentlyReadingSection>
    </>
  );
};

export default LatestUpdate;
