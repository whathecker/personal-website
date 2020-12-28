import * as React from 'react';
import { StyledH2, FinishedBookWrapper } from './styled';

const ReadsHistory: React.FunctionComponent = () => {
  return (
    <>
      <StyledH2>{`What I have read`}</StyledH2>
      <FinishedBookWrapper>Add Finihsed Book here</FinishedBookWrapper>
    </>
  );
};

export default ReadsHistory;
