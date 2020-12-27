import * as React from 'react';
import Intro from '../intro';
import { shallow } from 'enzyme';

describe('Test Intro component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<Intro />);
    expect(tree).toMatchSnapshot();
  });
});
