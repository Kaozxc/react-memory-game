import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import CardSetup from './components/CardSetup';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(true);

  const endCurrentStage = () => {
    if(score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setReset(true);
  };

  const incrementScore = () => {
    setScore(() => score + 1);
    setReset(false);
  };


  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <CardSetup reset={reset} endCurrentStage={endCurrentStage} incrementScore={incrementScore} />
    </div>
  );
}

export default App;
