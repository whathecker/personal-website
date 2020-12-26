import * as React from 'react';
import MobileMenus from '../mobile-menus';
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

describe('Test MobileMenus component', () => {
  test('MobileMenus component renders correctly', () => {
    const tree = shallow(<MobileMenus menus={props.menus} />);
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
