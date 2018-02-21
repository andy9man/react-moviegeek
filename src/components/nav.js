import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionHome from 'material-ui/svg-icons/action/home';
import Favorite from 'material-ui/svg-icons/action/favorite';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import {fullWhite} from 'material-ui/styles/colors';

import Search from '../components/search';
import Login from '../components/login';
import { LOAD_USER } from '../store/actions';
import icon from '../assets/clapper-icon.png';

const Title = () => {
  return (
    <div style={ {display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center'}}>
      Movie Geek
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
    const {user} = this.props;
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
          {
            user &&
              <div>
                <MenuItem
                  leftIcon={
                    user.avatar.includes("http") ?
                      <img style={ {borderRadius: '50%', top: '-10px'}} src={user.avatar} alt={user.name} />
                    :
                      <ActionAccountCircle />}
                  rightIcon={<ArrowDropRight />}
                  primaryText={user.name}
                  // containerElement={<Link to="/profile" />}
                  // onClick={this.handleMenuOpen}
                  style={{backgroundColor: '#263238', color: '#ECEFF1'}}
                  menuItems={[
                    <MenuItem
                      primaryText="My Summary"
                      onClick={this.handleMenuOpen}
                      containerElement={<Link to="/profile" />}
                      rightIcon={<Favorite />}
                    />,
                    <Divider />,
                    <MenuItem
                      primaryText="Logout"
                      rightIcon={<ExitToApp />}
                      onClick={(e) => {
                        this.handleMenuOpen(e);
                        this.props.userLogout();
                      }}
                    />
                  ]}
                />
                <Divider />
              </div>
          }
          <MenuItem
            primaryText="Home"
            leftIcon={<ActionHome color={fullWhite} />}
            containerElement={<Link to="/" />}
            onClick={this.handleMenuOpen}
            style={ {backgroundColor: '#607D8B', color: '#ECEFF1'}}
          />
          <Divider />
          <MenuItem
            primaryText="Rankings"
            containerElement={<Link to="/ranking" />}
            onClick={this.handleMenuOpen}
          />
          <MenuItem
            primaryText="Our Top Movies"
            containerElement={<Link to="/top-movies" />}
            onClick={this.handleMenuOpen}
          />
          {
            !user &&
              <div>
                <Divider />
                <MenuItem
                  primaryText="Login"
                  rightIcon={<ArrowDropRight />}
                  menuItems={[ <Login /> ]}
                />
              </div>
          }

        </Drawer>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout() {
      dispatch({type: LOAD_USER, action: undefined});
    }
  }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(MovieGeekNav) );