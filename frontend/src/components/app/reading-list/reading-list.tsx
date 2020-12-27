import * as React from 'react';
import { ReadlingListHeaderSection, ActiveReadsSection, ReadsHistorySection } from './styled';

const ReadingList: React.FunctionComponent = () => {
  return (
    <>
      <ReadlingListHeaderSection>ReadingListHeader</ReadlingListHeaderSection>
      <ActiveReadsSection>ActiveReads</ActiveReadsSection>
      <ReadsHistorySection>ReadsHistory</ReadsHistorySection>
    </>
  );
};

export default ReadingList;
