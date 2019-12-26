import React from 'react';
import './App.css';
import AccountContainer from "./containers/accountContainer";
import CountContainer from "../src/containers/countContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AccountContainer />
      <CountContainer />
    </div>
  );
}

export default App;
