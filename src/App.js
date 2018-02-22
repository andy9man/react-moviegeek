import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { getFlashWatch, getTopMovie } from './store/actions';
import Home from './views/home';
import Rankings from './views/ranking';
import Profile from './views/profile';
import Search from './views/search';
import MovieGeekNav from './components/nav';
import background from './assets/movieBackground-overlay-dark-1.jpg';
import TopMovies from './views/topMovies';
import FlashWatch from './views/flashWatch';
import TestView from './views/test'

class App extends Component {

  componentWillMount(){
    this.props.dispatchGetFlashWatch()
    this.props.dispatchGetTopMovies();
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
              <Route exact path='/topmovies' component={TopMovies} />
              <Route exact path='/flashwatch' component={FlashWatch} />
              <Route exact path='/test' component={TestView} />
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
    dispatchGetFlashWatch(){
      dispatch(getFlashWatch())
    },
    dispatchGetTopMovies() {
      dispatch( getTopMovie() );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

