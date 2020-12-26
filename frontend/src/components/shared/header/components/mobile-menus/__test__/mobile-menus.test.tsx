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
  it('should renders correctly', () => {
    const tree = shallow(<MobileMenus menus={props.menus} />);

    expect(tree).toMatchSnapshot();
  });

  it('should renders drawer when icon is clicked', () => {
    // add test here
  });
});
