import styled from 'styled-components';
import { device } from '../../../utils';

export const HomepageAreaBackground = styled.div`
  height: auto;
  border: 1px solid black;

  @media ${device.laptop} {
    height: 650px;
  } ;
`;

export const HomepageIntroSectionWrapper = styled.div`
  border: 1px solid blue;
  display: block;
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    display: inline-block;
    width: 30%;
    height: 100%;
    margin-right: 1%;
    padding-top: 0px;
    padding-bottom: 0px;
  } ;
`;

export const HomepageUpdateSectionWrapper = styled.div`
  border: 1px solid red;
  display: block;
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    display: inline-block;
    width: 68%;
    height: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
  } ;
`;
