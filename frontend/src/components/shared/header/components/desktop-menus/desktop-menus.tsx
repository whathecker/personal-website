import * as React from 'react';
import { DesktopMenusWrapper, StyledMenuItem } from './styled';
import { MenuProps, MenuItem } from '../../types';

const DesktopMenus: React.FunctionComponent<MenuProps> = ({ menus }: MenuProps) => {
  const renderMenus = (menus: MenuItem[]) => {
    return menus.map((menu, index) => {
      return (
        <StyledMenuItem key={index} href={menu.url}>
          {menu.title}
        </StyledMenuItem>
      );
    });
  };

  return (
    <>
      <DesktopMenusWrapper>{renderMenus(menus)}</DesktopMenusWrapper>
    </>
  );
};

export default DesktopMenus;
