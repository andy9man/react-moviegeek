import React, { Component } from 'react';
import { NavLink as RouterNav } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
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
      <nav>
        <AppBar
          title="Movie Geek"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </nav>
    );
  }
}

export default MovieGeekNav;