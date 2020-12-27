import * as React from 'react';
import Homepage from '../homepage-area';
import { shallow } from 'enzyme';

describe('Test Homepage component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<Homepage />);
    expect(tree).toMatchSnapshot();
  });
});
