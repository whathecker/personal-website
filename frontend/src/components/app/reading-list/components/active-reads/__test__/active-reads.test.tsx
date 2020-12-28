import * as React from 'react';
import ActiveReads from '../active-reads';
import { shallow } from 'enzyme';

describe('Test ActiveReads component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<ActiveReads />);

    expect(tree).toMatchSnapshot();
  });
});
