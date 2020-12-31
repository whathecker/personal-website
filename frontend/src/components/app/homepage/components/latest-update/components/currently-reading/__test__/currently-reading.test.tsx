import * as React from 'react';
import CurrentlyReading, { CurrentlyReadingProps } from '../currently-reading';
import { shallow } from 'enzyme';

const props: CurrentlyReadingProps = {
  book: {
    title: 'Agile Product Management',
    author: 'Eric Evans',
    coverImage: 'url',
  },
};

describe('Test CurrentlyReading component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<CurrentlyReading book={props.book} />);
    expect(tree).toMatchSnapshot();
  });
});
