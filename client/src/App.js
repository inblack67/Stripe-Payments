import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import GateWay from './components/GateWay';

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <div className="App container">
      <p className="flow-text center">Buy This Food?</p>
      <GateWay />
    </div>
  );
}

export default App;
