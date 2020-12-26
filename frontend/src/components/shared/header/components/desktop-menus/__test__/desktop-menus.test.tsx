import * as React from 'react';
import DesktopMenus from '../desktop-menus';
import { shallow } from 'enzyme';
import { MenuProps } from '../../../types';

const props: MenuProps = {
  menus: [
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
  ],
};

describe('Test DesktopMenus component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<DesktopMenus menus={props.menus} />);
    
    expect(tree).toMatchSnapshot();
  });

  it('should renders correct number of menus', () => {
    const wrapper = shallow(<DesktopMenus menus={props.menus}/>);

    expect(wrapper.find('.desktop-menu')).toHaveLength(props.menus.length);
  });
});
