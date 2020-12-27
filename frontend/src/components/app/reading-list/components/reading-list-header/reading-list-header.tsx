import * as React from 'react';
import { StyledH1, StyledBodyText } from './styled';
import { ReadingListHeaderProps } from '../../types';

const ReadingListHeader: React.FunctionComponent<ReadingListHeaderProps> = ({
  headerText,
  bodyText,
}: ReadingListHeaderProps) => {
  return (
    <>
      <StyledH1>{headerText}</StyledH1>
      <StyledBodyText>{bodyText}</StyledBodyText>
    </>
  );
};

export default ReadingListHeader;
