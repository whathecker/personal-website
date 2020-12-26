import styled from 'styled-components';
import { device } from '../../../utils';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 30px;
`;

export const StyledLogoWrapper = styled.div`
  width: 250px;
  height: 60px;
  border: 1px solid black;
`;

export const StyledMenuWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  margin-left: auto;
  margin-right: 60px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid black;
`;

export const DesktopMenus = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
  } ;
`;

export const MobileMenus = styled.div`
  display: block;

  @media ${device.laptop} {
    display: none;
  } ;
`;

export const MobileMenuIcon = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;

export const StyledMenuItem = styled.a`
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.1em;
`;
