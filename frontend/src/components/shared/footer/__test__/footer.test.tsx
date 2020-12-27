import * as React from 'react';
import Footer from '../footer';
import { shallow } from 'enzyme';

describe('Test Footer component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
