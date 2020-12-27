import React from 'react';
import { Header, Footer } from '../components/shared';
import { HomepageArea } from '../components/app/homepage';

const Homepage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <HomepageArea />
      <Footer />
    </>
  );
};

export default Homepage;
