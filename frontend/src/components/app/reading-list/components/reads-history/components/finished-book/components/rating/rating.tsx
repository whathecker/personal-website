import * as React from 'react';
import { RatingWrapper, RatingStartImg } from './styled';
import { RatingProps } from '../../../../../../types';

const Rating: React.FunctionComponent<RatingProps> = ({ rating }: RatingProps) => {
  const renderRating = (rating: number) => {
    const rendered = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        rendered.push(<RatingStartImg className="black-rate-star" key={i} src="/svg/star-black.svg" />);
      }
      if (i > rating) {
        rendered.push(<RatingStartImg key={i} className="white-rate-star" src="/svg/star-white.svg" />);
      }
    }
    return rendered;
  };

  return (
    <>
      <RatingWrapper>{renderRating(rating)}</RatingWrapper>
    </>
  );
};

export default Rating;
