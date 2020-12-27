import * as React from 'react';
import CurrentlyReading from '../currently-reading';
import { shallow } from 'enzyme';

describe('Test CurrentlyReading component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<CurrentlyReading />);
    expect(tree).toMatchSnapshot();
  });
});
