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
import Movie from './views/movie';
import Profile from './views/profile';
import Search from './views/search';

import MovieGeekNav from './components/nav';
import background from './assets/movieBackground-1.png';
<<<<<<< HEAD
import Top50 from './views/top50';
import FlashWatch from './views/flashwatch';
=======
import Top50 from './views/top50'
import TestView from './views/test'
>>>>>>> f0f976b3f2c59713a7f4354501ebe3799ff302cc

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
              <Route exact path='/movie' component={Movie} />
              <Route exact path='/top-movies' component={Top50} />
<<<<<<< HEAD
              <Route exact path='/flashwatch' component={FlashWatch} />
=======
              <Route exact path='/test' component={TestView} />
>>>>>>> f0f976b3f2c59713a7f4354501ebe3799ff302cc
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

