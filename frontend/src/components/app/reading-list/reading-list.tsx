import * as React from 'react';
import { ReadlingListHeaderSection, ActiveReadsSection, ReadsHistorySection } from './styled';
import { ReadingListHeader } from './components';

const ReadingList: React.FunctionComponent = () => {
  return (
    <>
      <ReadlingListHeaderSection>
        <ReadingListHeader
          headerText="Reading List"
          bodyText="I love to read about various of topics. here are some selection of books which I’d like to share my rating and reviews"
        />
      </ReadlingListHeaderSection>
      <ActiveReadsSection>ActiveReads</ActiveReadsSection>
      <ReadsHistorySection>ReadsHistory</ReadsHistorySection>
    </>
  );
};

export default ReadingList;
