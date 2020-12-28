import styled from 'styled-components';
import { device } from '../../../utils';

export const ReadlingListHeaderSection = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;

  @media ${device.laptop} {
    padding-left: 55px;
  } ;
`;

export const ActiveReadsSection = styled.div`
  background: rgba(153, 153, 153, 0.1);
`;

export const ActiveReadsInnerWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;

  @media ${device.laptop} {
    padding-left: 55px;
  } ;
`;

export const ReadsHistorySection = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;

  @media ${device.laptop} {
    padding-left: 55px;
  } ;
`;
