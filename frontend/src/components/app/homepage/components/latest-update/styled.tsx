import styled from 'styled-components';
//import { device } from '../../../../../utils';

export const CurrentlyReadingSection = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid orange;
  padding-top: 10px;
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
  font-size: 0.9em;
  padding-left: 25px;
  cursor: pointer;
`;

export const BookWrapper = styled.div`
  height: auto;
  padding-top: 20px;
  padding-left: 25px;
  padding-bottom: 20px;
`;

export const BookImgWrapper = styled.div`
  display: inline-block;
  width: 120px;
  height: 140px;
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const BookDetailWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-top: 16px;
  padding-left: 25px;
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
