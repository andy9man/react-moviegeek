import React, { Component } from 'react';
import icon from '../assets/clapper-icon.png';
import FlashWatch from './flashwatch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          padding: 25,
          top: -10,
        }}
      >
        <h1 style={{color: '#263238', display: 'block'}}>Welcome to Movie Geek!</h1>
        <FlashWatch />

      </div>
    );
  }
}

export default Home;