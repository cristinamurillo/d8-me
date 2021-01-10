import React from 'react';
import {BG_IMAGE_WIDTH_PX} from './App';

export default function DateCircle() {
  const radius = 20;
  const circumference = Math.PI * (radius * 2);
  const circleIds = ['circle-one', 'circle-two', 'circle-three']
  
  return (
    <div className="date-circle-container">
      <svg
        className="spinner"
        width="700"
        height="700"
        viewBox="0 0 700 700"
      >
        {circleIds.map((id) => {
          return(
            <circle
              id={id}
              className="drawn-circle"
              cx="350"
              cy="350"
              r={`${radius}vh`}
              fill="none"
              strokeWidth="20"
              strokeDashoffset={`${circumference/2}vh`}
              strokeLinecap="round"
            />
          )
        })}
      </svg>
    </div>
  );

}