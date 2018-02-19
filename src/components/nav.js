import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
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
      <div style={ {height: 100, position: 'fixed', top: 0} }>
        NavBar
      </div>
    );
  }
}

export default MovieGeekNav;