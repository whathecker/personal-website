import * as React from 'react';
import { CurrentlyReading } from './components';
import { GlobalContext, IGlobalContext } from '../../../../../contexts/global-context';
import { Book } from '../../../../../api/types/books';

const LatestUpdate: React.FunctionComponent = () => {
  const context: IGlobalContext = React.useContext(GlobalContext);

  const renderCurrentlyReading = (book: Book): React.ReactNode => {
    return <CurrentlyReading book={book} />;
  };

  return (
    <>
      {context && context.currentlyReadingBooks && context.currentlyReadingBooks.length > 0
        ? renderCurrentlyReading(context.currentlyReadingBooks[0])
        : null}
    </>
  );
};

export default LatestUpdate;
