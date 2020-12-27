import styled from 'styled-components';
import { device } from '../../../../../../../utils';

export const CurrentlyReadingSection = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding-top: 15px;

  @media ${device.laptop} {
    width: 100%;
    padding-top: 50px;
    padding-left: 50px;
  } ;
`;

export const HeaderWrapper = styled.div`
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const CurrentlyReadingHeader = styled.h2`
  display: inline;
  font-weight: bold;
  font-size: 1.1em;
  padding-left: 15px;
`;

export const CurrentlyReadingLink = styled.a`
  display: inline;
  color: #072ac8;
  cursor: pointer;
  font-size: 0.8em;
  padding-left: 10px;

  @media ${device.laptop} {
    font-size: 0.9em;
    padding-left: 25px;
  } ;
`;

export const BookWrapper = styled.div`
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    padding-left: 25px;
  } ;
`;

export const BookImgWrapper = styled.div`
  margin: 0 auto;
  width: 120px;
  height: 140px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    display: inline-block;
  } ;
`;

export const BookImgLink = styled.a``;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const BookDetailWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-top: 16px;

  @media ${device.laptop} {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    padding-top: 25px;
    padding-left: 25px;
  } ;
`;

export const BookTitleLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

export const BookTitle = styled.h4`
  font-weight: bold;
  font-size: 0.9em;
`;

export const AuthorInfo = styled.p`
  font-size: 0.8em;
  padding-top: 10px;
  padding-left: 1px;
`;
