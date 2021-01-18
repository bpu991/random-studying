import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Game from './Game';
import Rando from './Rando';
import Click from './Click'
import RollDice from './RollDice';
import ScoreKeeper from './ScoreKeeper';
import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
      <RollDice />
      <ScoreKeeper />
      <Lotto />
    </div>
  );
}

export default App;
