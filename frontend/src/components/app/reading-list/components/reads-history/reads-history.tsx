import * as React from 'react';
import { StyledH2, FinishedBookWrapper } from './styled';
import { FinishedBook } from './components';

const ReadsHistory: React.FunctionComponent = () => {
  return (
    <>
      <StyledH2>{`What I have read`}</StyledH2>
      <FinishedBookWrapper>
        <FinishedBook />
        <FinishedBook />
        <FinishedBook />
      </FinishedBookWrapper>
    </>
  );
};

export default ReadsHistory;
