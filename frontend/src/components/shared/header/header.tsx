import * as React from 'react';
import {
  StyledHeader,
  StyledLogoWrapper,
  StyledMenuWrapper,
  MobileMenus,
  MobileMenuIcon,
  StyledMenuItem,
} from './styled';
import { DesktopMenus } from './components';
import { Drawer } from '@material-ui/core';
import { MenuItem } from './types';

const Header: React.FunctionComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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

  const toggleDrawer = (isDrawerOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsMobileMenuOpen(isDrawerOpen);
  };

  const renderDesktopMenus = () => {
    return <DesktopMenus menus={menus} />;
  };

  return (
    <StyledHeader>
      <StyledLogoWrapper>Add Logo</StyledLogoWrapper>
      <StyledMenuWrapper>
        {renderDesktopMenus()}
        <MobileMenus>
          <MobileMenuIcon onClick={toggleDrawer(true)} src="/svg/menu.svg" />
          <Drawer anchor={'top'} open={isMobileMenuOpen} onClose={toggleDrawer(false)}>
            <StyledMenuItem>Home</StyledMenuItem>
            <StyledMenuItem>Reading list</StyledMenuItem>
            <StyledMenuItem>Contact</StyledMenuItem>
          </Drawer>
        </MobileMenus>
      </StyledMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
