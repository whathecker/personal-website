import * as React from 'react';
import { ReadlingListHeaderSection, ActiveReadsSection, ActiveReadsInnerWrapper, ReadsHistorySection } from './styled';
import { ReadingListHeader, ActiveReads, ReadsHistory } from './components';
import { GlobalContext, IGlobalContext } from '../../../contexts/global-context';
import { ActivelyReadingBook } from './types';

const ReadingList: React.FunctionComponent = () => {
  const context: IGlobalContext = React.useContext(GlobalContext);

  const renderActiveReads = (currentlyReadingBooks: ActivelyReadingBook[]) => {
    return <ActiveReads books={currentlyReadingBooks} />;
  };

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
          {context && context.currentlyReadingBooks.length > 0
            ? renderActiveReads(context.currentlyReadingBooks)
            : null}
        </ActiveReadsInnerWrapper>
      </ActiveReadsSection>
      <ReadsHistorySection>
        <ReadsHistory />
      </ReadsHistorySection>
    </>
  );
};

export default ReadingList;
