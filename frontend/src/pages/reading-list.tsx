import * as React from 'react';
import { Header, Footer } from '../components/shared';
import { ReadingList } from '../components/app/reading-list';

const ReadingListPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <ReadingList />
      <Footer />
    </>
  );
};

export default ReadingListPage;
