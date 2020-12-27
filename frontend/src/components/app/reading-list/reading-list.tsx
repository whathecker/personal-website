import * as React from 'react';
import { ReadlingListHeaderSection, ActiveReadsSection, ReadsHistorySection } from './styled';
import { ReadingListHeader } from './components';

const ReadingList: React.FunctionComponent = () => {
  return (
    <>
      <ReadlingListHeaderSection>
        <ReadingListHeader headerText="Reading List" bodyText="Here is a body text" />
      </ReadlingListHeaderSection>
      <ActiveReadsSection>ActiveReads</ActiveReadsSection>
      <ReadsHistorySection>ReadsHistory</ReadsHistorySection>
    </>
  );
};

export default ReadingList;
