import styled from 'styled-components';
import { device } from '../../../../../../../utils';

export const FinishedBookBackground = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const FinishedBookImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 160px;
  height: 190px;
  padding-top: 10px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    display: inline-block;
  } ;
`;

export const FinishedBookDetailWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 8px;

  @media ${device.tablet} {
    width: 500px;
  }

  @media ${device.laptop} {
    width: auto;
    display: inline-block;
    vertical-align: top;
    padding-left: 50px;
  } ;
`;

export const FinishedBookLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

export const BookTitle = styled.h4`
  font-weight: bold;
  font-size: 1em;
  padding-bottom: 10px;
`;

export const AuthorInfo = styled.p`
  font-size: 0.85em;
  padding-left: 2.5px;
  padding-bottom: 10px;
`;

export const RatingSection = styled.div`
  font-size: 0.8em;
  padding-left: 2.5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ReadDate = styled.p`
  font-size: 0.8em;
  padding-left: 2.5px;
  padding-top: 5x;
  padding-bottom: 10px;
`;

export const MyReview = styled.p`
  font-size: 0.85em;
  padding-left: 2.5px;
  padding-top: 15px;
  line-height: 1.3em;

  @media ${device.laptop} {
    width: 500px;
  } ;
`;
