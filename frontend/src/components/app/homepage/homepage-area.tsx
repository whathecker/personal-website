import * as React from 'react';
import { HomepageAreaBackground, HomepageIntroSectionWrapper, HomepageUpdateSectionWrapper } from './styled';

const Homepage: React.FunctionComponent = () => {
  return (
    <HomepageAreaBackground>
      <HomepageIntroSectionWrapper></HomepageIntroSectionWrapper>
      <HomepageUpdateSectionWrapper></HomepageUpdateSectionWrapper>
    </HomepageAreaBackground>
  );
};

export default Homepage;
