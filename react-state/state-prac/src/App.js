import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Game from './Game';
import Rando from './Rando';
import Click from './Click'
import RollDice from './RollDice';

function App() {
  return (
    <div className="App">
      {/* <Rando maxNum={1000}/> */}
      <RollDice />

    </div>
  );
}

export default App;
