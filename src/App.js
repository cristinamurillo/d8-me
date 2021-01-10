import './App.css';
import cloud from './assets/clouds.svg';
import balloon from './assets/hot-air-balloon.png';
import smileyCloud from './assets/smiley-cloud.svg';
import {useRef} from 'react';

function App() {
  const background = useRef();

  const scrollToDateCircle = () => {
    background.current.style.transform = "translate(-110vw, 0)"
  };

  return (
    <div className={`App`} ref={background}>
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
      <img src={balloon} alt="hot air balloon" className="balloon"/>
    </div>
  );
}

export default App;
