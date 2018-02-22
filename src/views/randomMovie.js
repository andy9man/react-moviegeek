import React, { Component } from 'react';
// import { movieFetchImdbId, deconstructRatings } from '../components/helper';
import { getRandomIntInclusive } from '../components/helper';
import Movie from '../components/movie';
import { Loader } from '../components/theme';
import { connect } from 'react-redux';
import { getTopMovie } from '../store/actions';

class RandomMovie extends Component{
  constructor(props) {
    super(props)

    this.state = {
      randomMovieObject: undefined,
      loading: false,
      error: false
    }
  }
  
  // getRandomImdbMovie() {
  //   let randomImdbId = getRandomIntInclusive(100000, 2000000).toString()
  //   if(randomImdbId.length === 6) {
  //     randomImdbId = 'tt0' + randomImdbId
  //   } else {
  //     randomImdbId = 'tt' + randomImdbId
  //   }
    
  //   console.log(`Attempting to get random movie - ${randomImdbId}`)
  //   this.setState({loading: true});

  //   const results = movieFetchImdbId(randomImdbId);
  //   // const results = movieFetchImdbId('tt0903624'); //The Hobbit is tt0903624

  //   console.log({results})
  //   results
  //     .then( ({data: imdbMovie}) => {
  //       this.setState({randomMovieObject: imdbMovie, loading: false});

  //     })
  //     .catch( error => {
  //       console.log("Error has occured in loading data...");
  //       console.log(error);
  //       this.setState({error: error, loading: true});
  //     })
  // }

  getRandomTopMovie() {
    console.log('Attempting to get random Top Movie')
    this.setState({loading: true});

    this.props.dispatchGetTopMovie();
    let randomMovieId = 0
    if(this.props.movies && this.props.movies.length > 0){
      randomMovieId = getRandomIntInclusive(1, this.props.movies.length)
      this.setState({randomMovieObject: this.props.movies[randomMovieId], loading: false});
    }
  }

  componentDidMount() {
    // This will get a random Imdb moving from OMDB
    // this.getRandomImdbMovie()
    // This will get a random top 50 movie
    this.getRandomTopMovie()    
  }

  componentDidUpdate(prevProps){
    this.props.match.params.random !== prevProps.match.params.random && this.getRandomTopMovie()
  }

  render(){
    // // This is deconstructing ratings if getting using IMDB id
    // if(this.state.randomMovieObject){
    //   if(!deconstructRatings(this.state.randomMovieObject.Ratings).Value) {
    //     console.log('no tomatoes score')
    //   }
    // }
    
    const {randomMovieObject, loading, error} = this.state;
    
    return(
      <div>
        <h3>Random Movie Result...</h3>
        <div style={ {padding: '0 15px'} }>
          {
            loading ?
              <Loader />
            :
              error || (randomMovieObject === undefined) ?
                <h4><em>A random movie could not be searched at this time...</em></h4>
              :
                !randomMovieObject.length ?
                    <Movie key="1" movie={randomMovieObject} expand={false} />
                :
                  <h4><em>A random movie was not found...</em></h4>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      movies: state.ourTopMovies,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      dispatchGetTopMovie() {
          dispatch(getTopMovie());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomMovie);