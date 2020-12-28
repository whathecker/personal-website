import * as React from 'react';
import { ReadlingListHeaderSection, ActiveReadsSection, ActiveReadsInnerWrapper, ReadsHistorySection } from './styled';
import { ReadingListHeader, ActiveReads, ReadsHistory } from './components';

const ReadingList: React.FunctionComponent = () => {
  return (
    <>
      <ReadlingListHeaderSection>
        <ReadingListHeader
          headerText="Reading List"
          bodyText="I love to read about various of topics. here are some selection of books which I’d like to share my rating and reviews"
        />
      </ReadlingListHeaderSection>
      <ActiveReadsSection>
        <ActiveReadsInnerWrapper>
          <ActiveReads />
        </ActiveReadsInnerWrapper>
      </ActiveReadsSection>
      <ReadsHistorySection>
        <ReadsHistory />
      </ReadsHistorySection>
    </>
  );
};

export default ReadingList;
