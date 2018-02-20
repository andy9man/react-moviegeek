import React, { Component } from 'react';
import { NavLink as RouterNav } from 'react-router-dom';
import icon from '../assets/clapper-icon.png';

class MovieGeekNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  render() {

    return (
      <div style={ {height: 50, width: '100%', position: 'fixed', top: 0, backgroundColor: '#fff'} }>
        NavBar
      </div>
    );
  }
}

export default MovieGeekNav;