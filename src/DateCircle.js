import React, {useState, useEffect} from 'react';
import {BG_IMAGE_WIDTH_PX} from './App';
import {DATES} from './dates';

export default function DateCircle({scrollToHome}) {
  const radius = 25;
  const circleIds = ['circle-one', 'circle-two', 'circle-three']
  const container = { 
    transform: `translate(${-1 * (window.innerWidth - BG_IMAGE_WIDTH_PX)}px, 0px)` 
  };

  const [dateIdea, setDateIdea] = useState({})

  useEffect(() => {
    setRandomDateIdea();
    window.addEventListener('keyup', handleKeyUp)
  }, []);

  const handleKeyUp = ({ key }) => {
    if (key === " ") {
      setRandomDateIdea();
    } else if (key === "Escape") {
      scrollToHome();
    }
  };

  const setRandomDateIdea = () => {
    const randIndex = Math.floor(Math.random() * DATES.length);
    setDateIdea(DATES[randIndex], randIndex)
  };
  
  return (
    <div className="date-circle-container" style={container}>
      <h2 className="lg-description">{dateIdea.desc}</h2>
      <img
        alt="date"
        src={dateIdea.image}
      />
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