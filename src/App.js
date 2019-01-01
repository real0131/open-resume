import React, { Component } from 'react';
import AppBar from './components/common/Appbar';
import Main from './components/Main/Main';
import ToolBox from './components/ToolBox/ToolBox';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar />
          <Main />
          <ToolBox />
      </div>
    );
  }
}

export default App;
