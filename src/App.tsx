import React from 'react';
import './App.css';
import { CircleProgress } from './components/CircleProgress';

function App() {
  return (
    <div className="App">
      <CircleProgress
        backgroundColor="blue"
        progressColor="red"
        radius={60}
        strokeWidth={10}
      />
    </div>
  );
}

export default App;
