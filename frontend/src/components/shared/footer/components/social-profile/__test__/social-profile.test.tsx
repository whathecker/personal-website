import * as React from 'react';
import SocialProfile from '../social-profile';
import { shallow } from 'enzyme';

describe('Test SocialProfile component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<SocialProfile />);
    expect(tree).toMatchSnapshot();
  });
});
