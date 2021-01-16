import styled from 'styled-components';
import { device } from '../../../utils';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledLogoWrapper = styled.div`
  width: 170px;
  height: 55px;
  padding-left: 3.5%;

  @media ${device.laptop} {
    padding-left: 6%;
  };
`;

export const StyledLogoLink = styled.a``;

export const StyledLogoImg = styled.img`
  width: 100%;
`;

export const StyledMenuWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  margin-left: auto;
  margin-right: 6px;
  padding-left: 15px;
  padding-right: 15px;

  @media ${device.laptop} {
    margin-right: 50px;
  };
`;
