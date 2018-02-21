import React, { Component } from 'react';
import { movieSearch } from '../components/helper';
import Movie from '../components/movie';
import { Loader } from '../components/theme';

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.match.params.search,
      searchResults: [],
      loading: false,
      error: false,
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
          this.setState({searchResults: Search, search: newSearch, loading: false, error: false});

        })
        .catch( error => {
          console.log("Error has occured in loading data...");
          console.log(error);
          this.setState({loading: false, error: true});
        })
    }
  }

  render(){
    const {search, searchResults, loading, error} = this.state;
    // console.log(`Loading:  ${loading}   \nSearch Term:  ${search}\nSearch Results... `)
    // console.log(searchResults);

    return(
      <div>
        <h3>Search Results ...  {search}</h3>
        <div style={ {padding: '0 15px'} }>
          {
            loading ?
              <Loader />
            :
              error || (searchResults === undefined) ?
                <h4><em>No results found for <b>{search}</b></em></h4>
              :
                searchResults.length > 0 ?
                  searchResults.map( (movie, index) => (
                    <Movie key={`${movie.imdbID}idx${index}`} movie={movie} expand={false} />
                  ))
                :
                  <h4><em>No results found for <b>{search}</b></em></h4>
          }
        </div>
      </div>
    );
  }
}

export default Search;