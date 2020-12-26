import styled from 'styled-components';
import { device } from '../../../../../utils';
import { Drawer } from '@material-ui/core';

export const MobileMenusWrapper = styled.div`
  display: block;

  @media ${device.laptop} {
    display: none;
  } ;
`;

export const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 260px;
  }
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
  font-size: 1.2em;
  color: black;
  text-decoration: none;
  margin-left: 30px;
  padding-top: 15px;
  padding-bottom: 10px;
  &:first-of-type {
    margin-top: 50px;
  }
`;
