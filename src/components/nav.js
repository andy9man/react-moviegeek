import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionHome from 'material-ui/svg-icons/action/home';

import Search from '../components/search';
import icon from '../assets/clapper-icon.png';

const Title = () => {
  return (
    <div>
      <span style={ {marginRight: 10} }>Movie Geek</span>
      <img src={icon} alt="Movie Geek Logo" />
    </div>
  );
}
class MovieGeekNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: false,
    }
  }

  handleMenuOpen = () => {
    this.setState( {sideNavOpen: !this.state.sideNavOpen});
  }

  render() {

    return (
      <nav>
        <AppBar
          title={<Title />}
          onTitleClick={() => this.props.history.push("/")}
          onLeftIconButtonClick={this.handleMenuOpen}
          iconElementRight={<Search history={this.props.history} />}
        />

        <Drawer
          open={this.state.sideNavOpen}
          style={ {marginTop: 50} }
          docked={false}
          onRequestChange={this.handleMenuOpen}
        >
        <MenuItem
          primaryText="Home"
          leftIcon={<ActionHome />}
          containerElement={<NavLink to="/" activeClassName="selected" />}
          onClick={this.handleMenuOpen}
        />
        <Divider />
        <MenuItem
          primaryText="Rankings"
          containerElement={<NavLink to="/ranking" />}
          onClick={this.handleMenuOpen}
        />
          <MenuItem
            primaryText="Movies"
            containerElement={<NavLink to="/movie" />}
            onClick={this.handleMenuOpen}
          />
          <MenuItem
            primaryText="Our Top Movies"
            containerElement={<NavLink to="/top-movies" />}
            onClick={this.handleMenuOpen}
          />
          <Divider />
          <MenuItem
            leftIcon={<ActionAccountCircle />}
            primaryText="Profile"
            containerElement={<NavLink to="/profile" />}
            onClick={this.handleMenuOpen}
          />

        </Drawer>
      </nav>
    );
  }
}

export default withRouter(MovieGeekNav);