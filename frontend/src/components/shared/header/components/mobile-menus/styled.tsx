import styled from 'styled-components';
import { device } from '../../../../../utils';

export const MobileMenusWrapper = styled.div`
  display: block;

  @media ${device.laptop} {
    display: none;
  } ;
`;

export const MobileMenuLink = styled.a`
  display: block;
  width: 32px;
  height: 32px;
`;

export const MobileMenuIcon = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;

export const StyledMobileMenuItem = styled.a`
  cursor: pointer;
  font-size: 1em;
`;
