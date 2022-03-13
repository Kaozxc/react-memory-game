import './App.css';
import React, {useState} from 'react';
import CardSetup from './components/CardSetup';
import Header from './components/Header';

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(true);

  const incrementScore = () => {
    setScore(() => score + 1);
    setReset(false);
  }

  const endCurrentStage = () => {
    if(score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setReset(true);
  }

  return (
    <div className="App">
    <Header
      score={score}
      bestScore={bestScore}
    />
    <CardSetup
      reset={reset}
      incrementScore={incrementScore}
      endCurrentStage={endCurrentStage}
      />
    </div>
  );
}

export default App;
