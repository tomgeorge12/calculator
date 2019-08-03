import React, { Component } from 'react';
import logo from './Circle-calc.png';
import './App.css';
import Calculator from './containers/calculatorMain';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CalculatoR</h2>
        </div>
        <div className="container">
          <Calculator/>
        </div>
      </div>
    );
  }
}

export default App;
