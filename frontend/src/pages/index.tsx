import React from 'react';
import { HelloWorld, Header, Footer } from '../components/shared';

const Homepage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <HelloWorld />
      <Footer />
    </>
  );
};

export default Homepage;
