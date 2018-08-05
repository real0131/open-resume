import React, { Component } from 'react';
import AppBar from './components/common/Appbar';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar />
          <Main />
      </div>
    );
  }
}

export default App;
