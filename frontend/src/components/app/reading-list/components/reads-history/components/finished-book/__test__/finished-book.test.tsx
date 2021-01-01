import * as React from 'react';
import FinishedBook, { FinishedBookProps } from '../finished-book';
import { shallow } from 'enzyme';

const props: FinishedBookProps = {
  book: {
    title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
    author: 'Eric Evans',
    coverImage:
      '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
    rating: 4,
    readDate: new Date('December 17, 1995 03:24:00'),
    review: 'My review',
  },
};

const propsPartial: FinishedBookProps = {
  book: {
    title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
    author: 'Eric Evans',
    coverImage:
      '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
  },
};

describe('Test FinishedBook component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<FinishedBook book={props.book} />);

    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly with only required fields', () => {
    const tree = shallow(<FinishedBook book={propsPartial.book} />);

    expect(tree).toMatchSnapshot();
  });
});
