import * as React from 'react';
import { HomepageAreaBackground, HomepageIntroSectionWrapper, HomepageUpdateSectionWrapper } from './styled';
import { Intro } from './components';
const Homepage: React.FunctionComponent = () => {
  return (
    <HomepageAreaBackground>
      <HomepageIntroSectionWrapper>
        <Intro />
      </HomepageIntroSectionWrapper>
      <HomepageUpdateSectionWrapper></HomepageUpdateSectionWrapper>
    </HomepageAreaBackground>
  );
};

export default Homepage;
