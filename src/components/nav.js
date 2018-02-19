import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
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
      // <div>
      // <Navbar color="blue" light expand="md">
      //   <NavbarBrand href="/">
      //   <img src={icon} width="30" height="30" class="d-inline-block align-top" alt="" />
      //   Movie Geek</NavbarBrand>
      //   <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen})} />
      //   <Collapse isOpen={this.state.isOpen} navbar>
      //     <Nav className="ml-auto" navbar>
      //       <NavItem>
      //         <NavLink href="/profile">Profile</NavLink>
      //       </NavItem>
      //       <NavItem>
      //         <NavLink href="/ranking">Rankings</NavLink>
      //       </NavItem>
      //     </Nav>
      //   </Collapse>
      // </Navbar>
      // </div>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    );
  }
}

export default MovieGeekNav;