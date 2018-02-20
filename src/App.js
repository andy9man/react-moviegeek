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
import RankingsView from './views/ranking';
import MovieView from './views/movie';
import ProfileView from './views/profile';
import MovieGeekNav from './components/nav';
import background from './assets/movieBackground-1.png';
import Top50 from './views/top50';
import FlashWatch from './views/flashwatch';

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
              <Route exact path='/profile' component={ProfileView} />
              <Route exact path='/ranking' component={RankingsView} />
              <Route exact path='/movie' component={MovieView} />
              <Route exact path='/top-movies' component={Top50} />
              <Route exact path='/flashwatch' component={FlashWatch} />
              {/* <Route exact path='/search/:searchtext' component={SearchView} /> */}
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

