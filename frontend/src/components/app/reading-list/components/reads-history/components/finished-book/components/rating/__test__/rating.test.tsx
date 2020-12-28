import * as React from 'react';
import Rating from '../rating';
import { shallow } from 'enzyme';

describe('Test Rating component', () => {
  it('should renders correctly', () => {
    const tree = shallow(<Rating rating={5} />);

    expect(tree).toMatchSnapshot();
  });

  it('should renders correct number of stars base on prop', () => {
    const oneStartRatingWrapper = shallow(<Rating rating={1} />);
    const twoStartRatingWrapper = shallow(<Rating rating={2} />);
    const threeStartRatingWrapper = shallow(<Rating rating={3} />);
    const fourStartRatingWrapper = shallow(<Rating rating={4} />);
    const fiveStarRatingWrapper = shallow(<Rating rating={5} />);

    expect(oneStartRatingWrapper.find('.black-rate-star')).toHaveLength(1);
    expect(oneStartRatingWrapper.find('.white-rate-star')).toHaveLength(4);

    expect(twoStartRatingWrapper.find('.black-rate-star')).toHaveLength(2);
    expect(twoStartRatingWrapper.find('.white-rate-star')).toHaveLength(3);

    expect(threeStartRatingWrapper.find('.black-rate-star')).toHaveLength(3);
    expect(threeStartRatingWrapper.find('.white-rate-star')).toHaveLength(2);

    expect(fourStartRatingWrapper.find('.black-rate-star')).toHaveLength(4);
    expect(fourStartRatingWrapper.find('.white-rate-star')).toHaveLength(1);

    expect(fiveStarRatingWrapper.find('.black-rate-star')).toHaveLength(5);
    expect(fiveStarRatingWrapper.find('.white-rate-star')).toHaveLength(0);
  });
});
