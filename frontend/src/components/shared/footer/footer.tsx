import * as React from 'react';
import { StyledFooter } from './styled';
import { SocialProfile } from './components';

const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <SocialProfile />
    </StyledFooter>
  );
};

export default Footer;
