import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">




      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/profile' component={ProfileView} />
        <Route exact path='/rankings' component={RankingsView} />
        <Route exact path='/top-movies' component={MovieRankingView} />
        <Route exact path='/search/:searchtext' component={SearchView} />
        <Route render={ () => ( <Redirect to='/' />) } />
      </Switch>
      </div>
    );
  }
}

export default App;
