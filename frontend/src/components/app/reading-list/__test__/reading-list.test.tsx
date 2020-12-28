import * as React from 'react';
import ReadingList from '../reading-list';
import { shallow } from 'enzyme';

describe('Test ReadingList component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<ReadingList />);
    expect(tree).toMatchSnapshot();
  });
});
