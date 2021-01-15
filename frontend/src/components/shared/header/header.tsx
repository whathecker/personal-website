import * as React from 'react';
import { StyledHeader, StyledLogoWrapper, StyledLogoLink, StyledLogoImg, StyledMenuWrapper } from './styled';
import { DesktopMenus, MobileMenus } from './components';
import { MenuItem } from './types';

const Header: React.FunctionComponent = () => {
  const menus: MenuItem[] = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Reading list',
      url: '/reading-list',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];

  const renderDesktopMenus = () => {
    return <DesktopMenus menus={menus} />;
  };

  const renderMobileMenus = () => {
    return <MobileMenus menus={menus} />;
  };

  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledLogoLink href="/" >
          <StyledLogoImg src="/img/logo.png" />
        </StyledLogoLink>
      </StyledLogoWrapper>
      <StyledMenuWrapper>
        {renderDesktopMenus()}
        {renderMobileMenus()}
      </StyledMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
