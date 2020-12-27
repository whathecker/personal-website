import styled from 'styled-components';
import { device } from '../../../../../utils';

export const IntroImageWrapper = styled.div`
  width: 270px;
  height: 270px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;

  @media ${device.laptop} {
    padding-top: 55px;
  } ;
`;

export const IntroImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const IntroHeaderText = styled.h2`
  width: 95%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  padding-top: 15px;
  padding-bottom: 25px;

  @media ${device.laptop} {
    padding-top: 25px;
  } ;
`;

export const IntroBodyText = styled.p`
  width: 95%;
  margin: 0 auto;
  text-align: center;
  font-size: 0.9em;
  padding-top: 5px;
  padding-bottom: 30px;

  @media ${device.laptop} {
    padding-top: 10px;
  } ;
`;
