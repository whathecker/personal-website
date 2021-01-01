import * as React from 'react';
import ReadsHistory, { ReadsHistoryProps } from '../reads-history';
import { shallow } from 'enzyme';

const props: ReadsHistoryProps = {
  books: [
    {
      title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
      author: 'Eric Evans',
      coverImage:
        '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
      rating: 4,
      readDate: new Date('December 17, 1995 03:24:00'),
      review: 'My review',
    },
    {
      title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
      author: 'Eric Evans',
      coverImage:
        '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
      rating: 4,
      readDate: new Date('December 17, 1995 03:24:00'),
    },
  ],
};

describe('Test ReadsHistory component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<ReadsHistory books={props.books} />);

    expect(tree).toMatchSnapshot();
  });

  it('should only renders 2 books', () => {
    const wrapper = shallow(<ReadsHistory books={props.books} />);

    expect(wrapper.find('.finished-book')).toHaveLength(2);
  });
});
