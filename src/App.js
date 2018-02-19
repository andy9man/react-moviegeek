import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomeView from './views/HomeView';
import RankingsView from './views/ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
        </nav>




        <Switch>
          {/* <Route exact path='/' component={HomeView} /> */}
          {/* <Route exact path='/profile' component={ProfileView} /> */}
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
