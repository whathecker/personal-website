import * as React from 'react';
import { ReadlingListHeaderSection, ActiveReadsSection, ActiveReadsInnerWrapper, ReadsHistorySection } from './styled';
import { ReadingListHeader, ActiveReads, ReadsHistory } from './components';
import { GlobalContext, IGlobalContext } from '../../../contexts/global-context';
import { ActivelyReadingBook, FinishedReadingBook } from './types';

const ReadingList: React.FunctionComponent = () => {
  const context: IGlobalContext = React.useContext(GlobalContext);

  const renderActiveReads = (currentlyReadingBooks: ActivelyReadingBook[]) => {
    return <ActiveReads books={currentlyReadingBooks} />;
  };

  const renderFinishedReads = (finishedBooks: FinishedReadingBook[]) => {
    return <ReadsHistory books={finishedBooks} />;
  };

  return (
    <>
      <ReadlingListHeaderSection>
        <ReadingListHeader
          headerText="Reading List"
          bodyText="This list is a selection of books that I'd like to share my rating and review"
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
        {context && context.finishedReadingBooks.length > 0 ? renderFinishedReads(context.finishedReadingBooks) : null}
      </ReadsHistorySection>
    </>
  );
};

export default ReadingList;
