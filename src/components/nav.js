import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionHome from 'material-ui/svg-icons/action/home';
import Favorite from 'material-ui/svg-icons/action/favorite';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Key from 'material-ui/svg-icons/communication/vpn-key';
import Help from 'material-ui/svg-icons/action/help';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import WhatsHot from 'material-ui/svg-icons/social/whatshot';
import {fullWhite} from 'material-ui/styles/colors';

import Search from '../components/search';
import Login from '../components/login';
import Title from '../components/title';
import { LOAD_USER } from '../store/actions';

class MovieGeekNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: false,
      loginModalOpen: false,
    }
  }

  handleMenuOpen = () => this.setState( {sideNavOpen: !this.state.sideNavOpen} );
  handleLoginModalOpen = () => this.setState( {loginModalOpen: !this.state.loginModalOpen} );

  render() {
    const {user} = this.props;
    const openLogin = (user === undefined && this.state.loginModalOpen);

    return (
      <nav>
        <AppBar
          title={<Title />}
          onLeftIconButtonClick={this.handleMenuOpen}
          iconElementRight={<Search history={this.props.history} />}
        />

        <Drawer
          open={this.state.sideNavOpen}
          docked={false}
          onRequestChange={this.handleMenuOpen}
        >
          {
            user &&
              <div>
                <MenuItem
                  leftIcon={
                    user.avatar.includes("http") ?
                      <img style={ {borderRadius: '50%',}} src={user.avatar} alt={user.name} />
                    :
                      <ActionAccountCircle />}
                  rightIcon={<ArrowDropRight />}
                  primaryText={user.name}
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
                      onClick={() => {
                        this.handleMenuOpen();
                        this.handleLoginModalOpen();
                        this.props.userLogout();
                        this.props.history.push("/");
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
            containerElement={<Link to="/topmovies" />}
            onClick={this.handleMenuOpen}
          />
          <Divider />
          <MenuItem
            primaryText="Help"
            rightIcon={<Help />}
            containerElement={<Link to="/help" />}
            onClick={this.handleMenuOpen}
          />
          {
            !user &&
              <div>
                <Divider />
                <MenuItem
                  primaryText="Register"
                  containerElement={<Link to="/register" />}
                  onClick={this.handleMenuOpen}
                />
                <MenuItem
                  primaryText="Login"
                  rightIcon={<Key />}
                  onClick={() => {
                    this.handleMenuOpen();
                    this.handleLoginModalOpen();
                  }}
                />
              </div>
          }
          <div
            style={{
              position: 'fixed',
              bottom: 0,
              textAlign: 'center',
              marginBottom: 20,
              width: '100%',
            }}
          >
          <FloatingActionButton
            onClick={this.handleMenuOpen}
            containerElement={<Link to="/aboutus" />}
            backgroundColor="#263238">
            <WhatsHot />
          </FloatingActionButton>
          </div>
        </Drawer>
        <Dialog
          title="Login to Movie Geek"
          actions={[
            <FlatButton
              label="Cancel"
              hoverColor="#B0BEC5"
              onClick={this.handleLoginModalOpen}
            />
          ]}
          modal={true}
          open={openLogin}
          onRequestClose={this.handleLoginModalOpen}
          contentStyle={{width: 450, maxWidth: '90vw'}}
        >
          <Login />
        </Dialog>
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