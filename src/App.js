import {useRef} from 'react';
import styled, {keyframes} from 'styled-components';
import './App.css';
import cloud from './assets/clouds.svg';
import balloon from './assets/hot-air-balloon.png';
import smileyCloud from './assets/smiley-cloud.svg';
import DateCircle from './DateCircle';

const BG_IMAGE_WIDTH_PX = 3000
const bgTranslationPixels = window.innerWidth - BG_IMAGE_WIDTH_PX
const moveBalloon = keyframes`
  0% {
    transform: translateX(0px) rotate(0deg)
  }
  50% {
    transform: translateX(${(-1 * bgTranslationPixels) * 2 / 3}px) rotate(20deg)
  }
  100% {
    transform: translateX(${-1 * bgTranslationPixels}px) rotate(0deg)
  }
`;

const HotAirBalloon = styled.img`
  height: 25rem;
  position: absolute;
  left: 15vw;
  top: 30vh;
  animation: ${moveBalloon} 3s paused;
  transform: translateX(${-1 * bgTranslationPixels}px) rotate(0deg);
`;

function App() {
  const backgroundRef = useRef();
  const balloonRef = useRef()

  const scrollToDateCircle = () => {
    backgroundRef.current.style.transform = `translate(${bgTranslationPixels}px, 0)`;
    balloonRef.current.style.animationPlayState = 'running';
  };

  return (
    <div className={`App`} ref={backgroundRef}>
      <img src={cloud} alt="cloud" className="cloud top"/>
      <img src={cloud} alt="cloud" className="cloud middle"/>
      <img src={cloud} alt="cloud" className="cloud bottom"/>
        <span className="center-header">
          <h1 className="header">Let's go on a date!</h1>
          <img
            onClick={scrollToDateCircle}
            src={smileyCloud}
            alt="smiling cloud"
            id="smiling-cloud"/>
        </span>
      <HotAirBalloon ref={balloonRef} src={balloon} alt="hot air balloon" className="balloon"/>
      <DateCircle />
    </div>
  );
}

export default App;
export {BG_IMAGE_WIDTH_PX}
