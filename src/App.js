import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './views/home';
import Rankings from './views/ranking';
import Movie from './views/movie';
import Profile from './views/profile';
import Search from './views/search';

import MovieGeekNav from './components/nav';
import background from './assets/movieBackground-1.png';
import Top50 from './views/top50'
import TestView from './views/test'

class App extends Component {
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
              <Route exact path='/test' component={TestView} />
              {/* <Route exact path='/search/:searchtext' component={SearchView} /> */}
=======
              <Route exact path='/search/:search' component={Search} />
>>>>>>> 0c4b777105e1cfa6a2444e0b34e6a2dbbfeb1a1a
              <Route render={ () => ( <Redirect to='/' />) } />
            </Switch>
        </div>


      </div>
    );
  }
}

export default App;
