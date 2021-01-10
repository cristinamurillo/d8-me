import {useRef} from 'react';
import './App.css';
import cloud from './assets/clouds.svg';
import balloon from './assets/hot-air-balloon.png';
import smileyCloud from './assets/smiley-cloud.svg';
import DateCircle from './DateCircle';

const BG_IMAGE_WIDTH_PX = 3000

function App() {
  const backgroundRef = useRef();
  const balloonRef = useRef()

  const scrollToDateCircle = () => {
    const translateXPixels = window.innerWidth - BG_IMAGE_WIDTH_PX;
    balloonRef.current.style.transform = `translate(${-1 * translateXPixels}px, 0) rotate(20deg)`;
    backgroundRef.current.style.transform = `translate(${translateXPixels}px, 0)`;
    setTimeout(() => {
      balloonRef.current.className = 'balloon unrotated-balloon';
      balloonRef.current.style.transform = `translate(${-1 * translateXPixels}px, 0) rotate(0deg)`;
    }, 3000);
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
      <img ref={balloonRef} src={balloon} alt="hot air balloon" className="balloon"/>
      <DateCircle />
    </div>
  );
}

export default App;
export {BG_IMAGE_WIDTH_PX}
