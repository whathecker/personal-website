import * as React from 'react';
import {
  StyledHeader,
  StyledLogoWrapper,
  StyledMenuWrapper,
  DesktopMenus,
  MobileMenus,
  MobileMenuIcon,
  StyledMenuItem,
} from './styled';

const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <StyledLogoWrapper>Add Logo</StyledLogoWrapper>
      <StyledMenuWrapper>
        <DesktopMenus>
          <StyledMenuItem>Home</StyledMenuItem>
          <StyledMenuItem>Reading list</StyledMenuItem>
          <StyledMenuItem>Contact</StyledMenuItem>
        </DesktopMenus>
        <MobileMenus>
          <MobileMenuIcon src="/svg/menu.svg" />
        </MobileMenus>
      </StyledMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
