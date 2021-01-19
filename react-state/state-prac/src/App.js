import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Game from './Game';
import Rando from './Rando';
import Click from './Click'
import RollDice from './RollDice';
import ScoreKeeper from './ScoreKeeper';
import Lotto from './Lotto';
import WiseSquareWithProps from './WiseSquareWithProps';
import ButtonList from './ButtonList';
import NumberList from './NumberList';

function App() {
  return (
    <div className="App">
      <RollDice />
      <ScoreKeeper />
      <Lotto />
      <WiseSquareWithProps />
      <ButtonList />
      <NumberList />
    </div>
  );
}

export default App;
