import * as React from 'react';
import Header from '../header';
import { shallow } from 'enzyme';

describe('Test Header component', () => {
  test('Header component renders correctly', () => {
    const tree = shallow(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
