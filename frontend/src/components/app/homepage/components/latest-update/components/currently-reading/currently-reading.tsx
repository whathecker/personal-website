import * as React from 'react';
import {
  CurrentlyReadingSection,
  HeaderWrapper,
  CurrentlyReadingHeader,
  CurrentlyReadingLink,
  BookWrapper,
  BookImgWrapper,
  BookImgLink,
  BookImg,
  BookDetailWrapper,
  BookTitleLink,
  BookTitle,
  AuthorInfo,
} from './styled';

const CurrentlyReading: React.FunctionComponent = () => {
  return (
    <CurrentlyReadingSection>
      <HeaderWrapper>
        <CurrentlyReadingHeader>{`Currently Reading`}</CurrentlyReadingHeader>
        <CurrentlyReadingLink>{`checkout my reading list`}</CurrentlyReadingLink>
      </HeaderWrapper>
      <BookWrapper>
        <BookImgWrapper>
          <BookImgLink
            href="https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=sr_1_1?dchild=1&keywords=domain+driven+design&qid=1609097175&sr=8-1"
            target="_blank"
          >
            <BookImg src="/img/example-book-img.jpg" />
          </BookImgLink>
        </BookImgWrapper>
        <BookDetailWrapper>
          <BookTitleLink
            href="https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=sr_1_1?dchild=1&keywords=domain+driven+design&qid=1609097175&sr=8-1"
            target="_blank"
          >
            <BookTitle>{`Domain Driven Design: Tackling Complexity in the Heart of Software`}</BookTitle>
          </BookTitleLink>
          <AuthorInfo>{`by Eric Evans`}</AuthorInfo>
        </BookDetailWrapper>
      </BookWrapper>
    </CurrentlyReadingSection>
  );
};

export default CurrentlyReading;
