import React from 'react';
import {NavLink} from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  Form,
  FormGroup,
  FormControl,
  Button,

} from 'react-bootstrap';
import icon from '../assets/clapper-icon.png';

const MovieGeekNav = props => {

  return (
    <Navbar inverse collapseOnSelect staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <img className="navbar-brand" src={icon} alt="Movie Geek" />
            Movie Geek
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem href="/">Link</NavItem>
          <NavItem href="#">Link  </NavItem>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Search</Button>
          </Navbar.Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MovieGeekNav;