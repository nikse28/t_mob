import React, { Component } from 'react';
import Dropdown from "./containers/Dropdown"
import Button from "./containers/Button"
class App extends Component {
  render() {
    return (
      <div>
        <Dropdown/>
        <Button/>  
      </div>
    );
  }
}

export default App;
