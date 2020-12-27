import * as React from 'react';
import { HomepageAreaBackground, HomepageIntroSectionWrapper, HomepageUpdateSectionWrapper } from './styled';
import { Intro, LatestUpdate } from './components';

const Homepage: React.FunctionComponent = () => {
  return (
    <HomepageAreaBackground>
      <HomepageIntroSectionWrapper>
        <Intro />
      </HomepageIntroSectionWrapper>
      <HomepageUpdateSectionWrapper>
        <LatestUpdate />
      </HomepageUpdateSectionWrapper>
    </HomepageAreaBackground>
  );
};

export default Homepage;
