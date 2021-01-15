import styled from 'styled-components';
import { device } from '../../../../../utils';

export const DesktopMenusWrapper = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
  } ;
`;

export const StyledMenuItem = styled.a`
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 1.1em;
  color: black;
  text-decoration: none;
`;
