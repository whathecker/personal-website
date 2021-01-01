import styled from 'styled-components';
import { device } from '../../../../../utils';

export const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 1.2em;
`;

export const FinishedBooksSection = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${device.laptop} {
    padding-left: 30px;
  } ;
`;

export const FinishedBookWrapper = styled.div`
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
`;
