import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestManage from './components/test_manage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to about_react</h1>
        </header>
        <TestManage></TestManage>
      </div>
    );
  }
}

export default App;
