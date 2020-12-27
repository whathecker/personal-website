import * as React from 'react';
import LatestUpdate from '../latest-update';
import { shallow } from 'enzyme';

describe('Test LatestUpdate component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<LatestUpdate />);
    expect(tree).toMatchSnapshot();
  });
});
