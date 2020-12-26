import * as React from 'react';
import { StyledHeader, StyledLogoWrapper, StyledMenuWrapper, StyledMenuItem } from './styled';

const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <StyledLogoWrapper>Add Logo</StyledLogoWrapper>
      <StyledMenuWrapper>
        <StyledMenuItem>Home</StyledMenuItem>
        <StyledMenuItem>Reading list</StyledMenuItem>
        <StyledMenuItem>Contact</StyledMenuItem>
      </StyledMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
