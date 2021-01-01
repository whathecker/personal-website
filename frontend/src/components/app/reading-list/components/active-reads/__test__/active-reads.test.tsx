import * as React from 'react';
import ActiveReads, { ActiveReadsProps } from '../active-reads';
import { shallow } from 'enzyme';

const props: ActiveReadsProps = {
  books: [
    {
      title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
      author: 'Eric Evans',
      coverImage:
        '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
    },
    {
      title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
      author: 'Eric Evans',
      coverImage:
        '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
    },
  ],
};

describe('Test ActiveReads component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<ActiveReads books={props.books} />);

    expect(tree).toMatchSnapshot();
  });

  it('should only renders 2 books', () => {
    const wrapper = shallow(<ActiveReads books={props.books} />);

    expect(wrapper.find('.active-book')).toHaveLength(2);
  });
});
