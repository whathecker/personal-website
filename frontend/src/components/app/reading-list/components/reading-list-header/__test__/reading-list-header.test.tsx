import * as React from 'react';
import ReadingListHeader from '../reading-list-header';
import { shallow } from 'enzyme';
import { ReadingListHeaderProps } from '../../../types';

const props: ReadingListHeaderProps = {
  headerText: 'Reading List',
  bodyText:
    'I love to read about various of topics. here are some selection of books which I’d like to share my rating and reviews',
};

describe('Test ReadingListHeader component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<ReadingListHeader headerText={props.headerText} bodyText={props.bodyText} />);

    expect(tree).toMatchSnapshot();
  });
});
