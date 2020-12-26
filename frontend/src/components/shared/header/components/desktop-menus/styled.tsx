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
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.1em;
`;
