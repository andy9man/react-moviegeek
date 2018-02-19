import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import background from './assets/movieBackground_1.png';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MovieGeekNav from './components/nav';
import HomeView from './views/HomeView';
import RankingsView from './views/ranking';
import ProfileView from './views/profile';

class App extends Component {
  render() {
    return (
      <div className="App" style={ {backgroundImage: `url(${background})`} }>
        <nav>
          <MovieGeekNav />
        </nav>




        <Switch>
          {/* <Route exact path='/' component={HomeView} /> */}
          <Route exact path='/profile' component={ProfileView} />
          <Route exact path='/ranking' component={RankingsView} />
          {/* <Route exact path='/top-movies' component={MovieRankingView} /> */}
          {/* <Route exact path='/search/:searchtext' component={SearchView} /> */}
          <Route render={ () => ( <Redirect to='/ranking' />) } />
        </Switch>
      </div>
    );
  }
}

export default App;
