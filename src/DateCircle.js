import React from 'react';

export default function DateCircle() {
  const radius = 54;
  const circumference = Math.PI * (radius *2);

  return (
    <>
      <svg
        className="spinner"
        width="400"
        height="400"
        viewBox="0 0 400 400"
      >
        <circle 
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke-width="20"
          stroke-dashoffset="101"
        />
      </svg>
    </>
  );

}