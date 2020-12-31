import './App.css';
import cloud from './assets/clouds.svg';

function App() {
  return (
    <div className="App">
      <img src={cloud} alt="cloud" className="cloud top"/>
      <img src={cloud} alt="cloud" className="cloud middle"/>
      <img src={cloud} alt="cloud" className="cloud bottom"/>
      <h1 className="header">Let's go on a date!</h1>
    </div>
  );
}

export default App;
