import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomeView from './views/HomeView';
import RankingsView from './views/ranking';
import MovieView from './views/movie';
import ProfileView from './views/profile';
import MovieGeekNav from './components/nav';
import background from './assets/movieBackground-1.png';
import Top50 from './views/top50'

class App extends Component {
  render() {

    return (
      <div className="App" style={ {backgroundImage: `url(${background})`} }>
        <MovieGeekNav history />

        <div className="content-container">
            <Switch>
              <Route exact path='/' component={HomeView} />
              <Route exact path='/profile' component={ProfileView} />
              <Route exact path='/ranking' component={RankingsView} />
              <Route exact path='/movie' component={MovieView} />
              <Route exact path='/top-movies' component={Top50} />
              {/* <Route exact path='/search/:searchtext' component={SearchView} /> */}
              <Route render={ () => ( <Redirect to='/' />) } />
            </Switch>
        </div>


      </div>
    );
  }
}

export default App;
