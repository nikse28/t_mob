import React, { Component } from 'react';
import Dropdown from "./components/Dropdown"
import Button from "./components/Button"
import MainComponent from './components/Main';
import Combine from './components/combine'
class App extends Component {
  render() {
    return (
      <div>
        {/* <MainComponent/> */}
        <Combine/>
      </div>
    );
  }
}

export default App;
