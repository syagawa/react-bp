import React from 'react';
import './App.css';
import AccountContainer from "./containers/accountContainer";
import CountContainer from "../src/containers/countContainer";
import AsyncContainer from "../src/containers/asyncContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AccountContainer />
      <CountContainer />
      <AsyncContainer />
    </div>
  );
}

export default App;

