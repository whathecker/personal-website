import * as React from 'react';
import { MobileMenusWrapper, MobileMenuLink, MobileMenuIcon, StyledMobileMenuItem } from './styled';
import { Drawer } from '@material-ui/core';
import { MenuProps, MenuItem } from '../../types';

const MobileMenus: React.FunctionComponent<MenuProps> = ({ menus }: MenuProps) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const renderMenus = (menus: MenuItem[]) => {
    return menus.map((menu, index) => {
      return (
        <StyledMobileMenuItem key={index} href={menu.url}>
          {menu.title}
        </StyledMobileMenuItem>
      );
    });
  };

  return (
    <>
      <MobileMenusWrapper>
        <MobileMenuLink onClick={toggleDrawer(true)}>
          <MobileMenuIcon src="/svg/menu.svg" />
        </MobileMenuLink>
        <Drawer anchor={'top'} open={drawerOpen} onClose={toggleDrawer(false)}>
          {renderMenus(menus)}
        </Drawer>
      </MobileMenusWrapper>
    </>
  );
};

export default MobileMenus;
