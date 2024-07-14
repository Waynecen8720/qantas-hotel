import React from "react";

interface RatingStarIconProps {
  filled?: 'half' | 'full' | 'none',
}

const fillColor: {[key: string]: string} = {
  half: "url(#halfGradient)",
  full: "rgb(251, 203, 59)",
  none: 'none',
};

const RatingStarIcon: React.FC<RatingStarIconProps> = ({
  filled = 'none'
}) => (
  <>
    <svg width="0" height="0">
    <title>{filled}</title>
      <defs>
        <linearGradient id="halfGradient" x1="0" x2="100%" y1="0" y2="0">
          <stop offset="50%" stopColor="rgb(251, 203, 59)" />
          <stop offset="50%" stopColor="white" />
        </linearGradient>
        <symbol id="star" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.919 1.518 8.323L12 18.896l-7.454 4.654 1.518-8.323L0 9.308l8.332-1.151z" />
        </symbol>
      </defs>
    </svg>
    <svg width="14" height="14">
      <use href="#star" fill={fillColor[filled]} stroke="rgb(251, 203, 59)" strokeWidth="2"></use>
    </svg>
  </>
)

export default RatingStarIcon;
