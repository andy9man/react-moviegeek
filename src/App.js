import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { getFlashWatch } from './store/actions';
import Home from './views/home';
import Rankings from './views/ranking';
import Profile from './views/profile';
import Search from './views/search';

import MovieGeekNav from './components/nav';
import background from './assets/movieBackground-overlay-dark-1.jpg';
import Top50 from './views/top50';
import FlashWatch from './views/flashwatch';
import TestView from './views/test'

class App extends Component {

  componentDidMount(){
    this.props.dispatchGetFlashWatch()
  }

  render() {

    return (
      <div className="App" style={ {backgroundImage: `url(${background})`} }>
        <MovieGeekNav />

        <div className="content-container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/ranking' component={Rankings} />
              <Route exact path='/top-movies' component={Top50} />
              <Route exact path='/flashwatch' component={FlashWatch} />
              <Route exact path='/test' component={TestView} />
              {/* <Route exact path='/search/:searchtext' component={SearchView} /> */}
              <Route exact path='/search/:search' component={Search} />
              <Route render={ () => ( <Redirect to='/' />) } />
            </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - FlashWatch')
  return {
    viewData: state.viewData,
    loadingData: state.loadingData,
    flashWatchData: state.flashWatchData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetFlashWatch(data){
      dispatch(getFlashWatch(data))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

