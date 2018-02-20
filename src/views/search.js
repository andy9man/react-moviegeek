import React, { Component } from 'react';
import { movieSearch } from '../components/helper';

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.match.params.search,
      searchResults: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({loading: true});
    const results = movieSearch(this.state.search);
    results
      .then( ({data: {Search}}) => {
        this.setState({searchResults: Search, loading: false});
      })
      .catch( error => {
        console.log("Error has occured in loading data...");
        console.log(error);
        this.setState({loading: false});
      })
  }

  componentWillReceiveProps( newProps ) {
    const newSearch = newProps.match.params.search;

    if( newSearch && newSearch !== this.state.search ) {
      this.setState({loading: true, searchResults: []});
      const results = movieSearch(newSearch);
      results
        .then( ({data: {Search}}) => {
          this.setState({searchResults: Search, search: newSearch, loading: false});

        })
        .catch( error => {
          console.log("Error has occured in loading data...");
          console.log(error);
          this.setState({loading: false});
        })
    }
  }

  render(){
    const {search, searchResults, loading} = this.state;
    console.log(`Loading:  ${loading}   \nSearch Term:  ${search}\nSearch Results... `)
    console.log(searchResults);

    return(
      <div>
        <h3>Search Results ...  {search}</h3>

        {
          loading ?
            <h1>Loading...</h1>
          :
            searchResults.length > 0 ?
              searchResults.map( (movie, index) => (
                <h4>{movie.Title}</h4>
              ))
            :
              <h4><em>No results found for <b>{search}</b></em></h4>
        }

      </div>
    );
  }
}

export default Search;