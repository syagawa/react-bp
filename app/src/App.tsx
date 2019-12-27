import React from 'react';
import './App.css';
import AccountContainer from "./containers/accountContainer";
import CountContainer from "../src/containers/countContainer";
import HookContainer from "../src/containers/hookContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AccountContainer />
      <CountContainer />
      <HookContainer />
    </div>
  );
}

export default App;

