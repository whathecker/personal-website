import * as React from 'react';
import { StyledSocialProfileBackground, SocialLink, SocialIcon } from './styled';

const SocialProfile: React.FunctionComponent = () => {
  return (
    <StyledSocialProfileBackground>
      <SocialLink className="social-link" href="https://github.com/chok-chok" target="_blank">
        <SocialIcon src="/svg/github.svg" />
      </SocialLink>
      <SocialLink className="social-link" href="https://www.linkedin.com/in/yunjae-oh-223683a6/" target="_blank">
        <SocialIcon src="/svg/linkedin.svg" />
      </SocialLink>
      <SocialLink className="social-link" href="mailto:yunjae.oh.nl@gmail.com" target="_blank">
        <SocialIcon src="/svg/email.svg" />
      </SocialLink>
    </StyledSocialProfileBackground>
  );
};

export default SocialProfile;
