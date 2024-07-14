import React from "react";
import classnames from 'classnames/bind';
import RatingCircleIcon from './RatingCircleIcon';
import RatingStarIcon from './RatingStarIcon';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface RatingProps {
  rate: {
    ratingValue: number,
    ratingType: string,
  }
}

const Rating: React.FC<RatingProps> = ({ rate }) => {
  const totalStars: number = 5;

  const getFilled = (index: number): 'none' | 'full' | 'half' => {
    const filledStars = Math.floor(rate.ratingValue);
    const halfStar = rate.ratingValue % 1 !== 0;
    if (index <= filledStars) {
      return 'full';
    } else if (index === filledStars + 1 && halfStar) {
      return'half';
    } else {
      return 'none';
    }
  }

  return (
    <div className={cx('rating-container')}>
      {Array.from({ length: totalStars }).map((value, index) => (
        <React.Fragment key={index}>
          {rate.ratingType === 'star' 
            ? <RatingStarIcon filled={getFilled(index + 1)} /> 
            : <RatingCircleIcon filled={getFilled(index + 1)} />}
        </React.Fragment>
      ))}
    </div>
  )
};

export default Rating;