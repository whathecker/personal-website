import * as React from 'react';
import MetaHeader, { MetaHeaderProps } from '../meta-header';
import { shallow } from 'enzyme';

const props: MetaHeaderProps = {
  pageTitle: 'This is my homepage',
  metaDescription: 'Welcome to my website',
  indexStatus: true,
  urlPath: 'https://www.yunjaeoh.com',
};

describe('Test Header component', () => {
  it('should renders MetaHeader', () => {
    const tree = shallow(<MetaHeader {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
