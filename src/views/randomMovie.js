import React, { Component } from 'react';
import { movieFetchImdbId, deconstructRatings, getRandomIntInclusive } from '../components/helper';
import Movie from '../components/movie';
import { Loader } from '../components/theme';

class RandomMovie extends Component{
  constructor(props) {
    super(props)

    this.state = {
      searchResults: undefined,
      loading: false,
      error: false
    }
  }
  
  getRandomMovie() {
    let randomImdbId = getRandomIntInclusive(100000, 2000000).toString()
    if(randomImdbId.length === 6) {
      randomImdbId = 'tt0' + randomImdbId
    } else {
      randomImdbId = 'tt' + randomImdbId
    }
    
    console.log(`Attempting to get random movie - ${randomImdbId}`)
    this.setState({loading: true});

    const results = movieFetchImdbId(randomImdbId);
    // const results = movieFetchImdbId('tt0903624'); //The Hobbit is tt0903624

    console.log({results})
    results
      .then( ({data: imdbMovie}) => {
        this.setState({searchResults: imdbMovie, loading: false});

      })
      .catch( error => {
        console.log("Error has occured in loading data...");
        console.log(error);
        this.setState({error: error, loading: true});
      })
  }

  componentDidMount() {
    this.getRandomMovie()
  }

  render(){
    if(this.state.searchResults){
      if(!deconstructRatings(this.state.searchResults.Ratings).Value) {
        console.log('no tomatoes score')
      }
    }
    
    const {searchResults, loading, error} = this.state;
    
    return(
      <div>
        <h3>Random Movie Result...</h3>
        <div style={ {padding: '0 15px'} }>
          {
            loading ?
              <Loader />
            :
              error || (searchResults === undefined) ?
                <h4><em>A random movie could not be searched at this time...</em></h4>
              :
                !searchResults.length ?
                    <Movie key="1" movie={searchResults} expand={false} />
                :
                  <h4><em>A random movie was not found...</em></h4>
          }
        </div>
      </div>
    );
  }
}

export default RandomMovie;