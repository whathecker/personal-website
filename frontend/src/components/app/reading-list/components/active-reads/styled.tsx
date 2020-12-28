import styled from 'styled-components';
import { device } from '../../../../../utils';

export const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 1.2em;
`;

export const ActiveBookWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
`;

export const BookImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 130px;
  height: 150px;
  padding-top: 10px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    display: inline-block;
  } ;
`;

export const BookDetailWrapper = styled.div`
  padding-top: 10px;
  text-align: center;

  @media ${device.laptop} {
    display: inline-block;
    vertical-align: top;
    padding-left: 40px;
    text-align: left;
  }
`;

export const BookLink = styled.a`
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
`;
