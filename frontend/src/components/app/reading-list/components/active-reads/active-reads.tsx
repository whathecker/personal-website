import * as React from 'react';
import { StyledH2, ActiveBookWrapper, BookImg, BookDetailWrapper, BookLink, BookTitle, AuthorInfo } from './styled';

const ActiveReads: React.FunctionComponent = () => {
  return (
    <>
      <StyledH2>{`Currently reading`}</StyledH2>
      <ActiveBookWrapper>
        <BookImg src="/img/example-book-img.jpg" />
        <BookDetailWrapper>
          <BookLink href="https://www.amazon.com" target="_blank">
            <BookTitle>{`Domain Driven Design: Tackling Complexity in the Heart of Software`}</BookTitle>
          </BookLink>
          <AuthorInfo>{`by Eric Evans`}</AuthorInfo>
        </BookDetailWrapper>
      </ActiveBookWrapper>
    </>
  );
};

export default ActiveReads;
