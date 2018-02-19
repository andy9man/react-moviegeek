import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>HAPPY HACKING!</h1>
        <Button bsStyle="primary">Bootstrap Test</Button>
      </div>
    );
  }
}

export default App;
