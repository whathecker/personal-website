import * as React from 'react';
import FinishedBook from '../finished-book';
import { shallow } from 'enzyme';

describe('Test FinishedBook component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<FinishedBook />);

    expect(tree).toMatchSnapshot();
  });
});
