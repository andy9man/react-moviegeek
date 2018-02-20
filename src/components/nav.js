import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import icon from '../assets/clapper-icon.png';

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
          title="Movie Geek"
          onTitleClick={() => this.props.history.push("/")}
          onLeftIconButtonClick={this.handleMenuOpen}
          iconElementRight={<img src={icon} />}
        />

        <Drawer
          open={this.state.sideNavOpen}
          style={ {marginTop: 50} }
          docked={false}
          onRequestChange={this.handleMenuOpen}
        >
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