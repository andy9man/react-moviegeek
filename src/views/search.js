import React, { Component } from 'react';
import { movieSearch } from '../components/helper';

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.match.params.search,
      searchResults: [],
    }
  }

  componentDidMount() {
    const results = movieSearch(this.state.search);
    results
      .then( ({data}) => {
        console.log(data);
      })
      .catch( error => {
        console.log("Error has occured in loading data...");
        console.log(error);
      })

  }

  render(){
    return(
      <h1>Search Results</h1>
    )
  }
}

export default Search;