import React from "react";

interface RatingCircleIconProps {
  filled?: 'half' | 'full' | 'none'
}

const fillColor: {[key: string]: string} = {
  half: 'url(#halfCircleGradient)',
  full: 'rgb(251, 203, 59)',
  none: 'none'
};


const RatingCircleIcon: React.FC<RatingCircleIconProps> = ({
  filled='none'
}) => (
  <>
    <svg width="0" height="0">
      <title>{filled}</title>
      <defs>
        <linearGradient id="halfCircleGradient" x1="0" x2="100%" y1="0" y2="0">
          <stop offset="50%" stopColor="rgb(251, 203, 59)"/>
          <stop offset="50%" stopColor="white"/>
        </linearGradient>
        <symbol id="circle" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="rgb(251, 203, 59)" strokeWidth="2"/>
        </symbol>
      </defs>
    </svg>
    <svg width="14" height="14">
      <use href="#circle" fill={fillColor[filled]}></use>
    </svg>
  </>
)

export default RatingCircleIcon;
