import React from 'react';
import './App.css';
import AccountContainer from "./containers/accountContainer";
import CountContainer from "../src/containers/countContainer";
import AsyncCountContainer from "../src/containers/asyncCountContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AccountContainer />
      <CountContainer />
      <AsyncCountContainer />
    </div>
  );
}

export default App;
