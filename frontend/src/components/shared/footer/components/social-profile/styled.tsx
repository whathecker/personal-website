import styled from 'styled-components';
import { device } from '../../../../../utils';
//import { device } from '../../../../../utils';

export const StyledSocialProfileBackground = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media ${device.laptop} {
    margin-left: auto;
    margin-right: 60px;
    height: 30px;
    padding-left: 15px;
    padding-right: 15px;
  } ;
`;

export const SocialLink = styled.a`
  display: inline-block;
  width: 22px;
  height: 22px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
`;
