import * as React from 'react';
import { IntroImageWrapper, IntroImage, IntroHeaderText, IntroBodyText } from './styled';

const Intro: React.FunctionComponent = () => {
  return (
    <>
      <IntroImageWrapper>
        <IntroImage src="/img/profile.jpg" />
      </IntroImageWrapper>
      <IntroHeaderText>{`Product Manager & Programmer`}</IntroHeaderText>
      <IntroBodyText>{`Product manager during the day, a programmer in the evening`}</IntroBodyText>
    </>
  );
};

export default Intro;
