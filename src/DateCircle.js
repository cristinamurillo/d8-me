import React from 'react';
import {BG_IMAGE_WIDTH_PX} from './App';

export default function DateCircle() {
  const radius = 20;
  const circleIds = ['circle-one', 'circle-two', 'circle-three']
  const container = { 
    transform: `translate(${-1 * (window.innerWidth - BG_IMAGE_WIDTH_PX)}px, 0px)` 
};
  
  return (
    <div className="date-circle-container" style={container}>
      <img
        alt="date"
        src="https://images.unsplash.com/photo-1550865811-5db66d4e19ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"/>
      <svg
        className="spinner"
        width="700"
        height="700"
        viewBox="0 0 700 700"
      >
        {circleIds.map((id) => {
          return(
            <circle
              key={id}
              id={id}
              className="drawn-circle"
              cx="350"
              cy="350"
              r={`${radius}vh`}
              fill="none"
              strokeWidth="20"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          )
        })}
      </svg>
    </div>
  );

}