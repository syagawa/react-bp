import React from 'react';
import './App.css';
import TestContainer from "../src/containers/testContainer";
import CountContainer from "../src/containers/countContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <TestContainer />
      <CountContainer />
    </div>
  );
}

export default App;
