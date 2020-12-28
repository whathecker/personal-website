import * as React from 'react';
import ReadsHistory from '../reads-history';
import { shallow } from 'enzyme';

describe('Test ReadsHistory component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<ReadsHistory />);

    expect(tree).toMatchSnapshot();
  });
});
