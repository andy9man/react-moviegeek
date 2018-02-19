import React, { Component } from 'react';
import { getRanking, postFavorite } from '../store/actions'
import { connect } from 'react-redux'
import { Progress, Card, CardImg } from 'reactstrap'

class MovieView extends Component{

  // helper function to map news object
  movieMap(movieObject, idx) {
    console.log(movieObject)

    return (
      <div key={idx}>
        <Card>
          Title: {movieObject.Title}<br/>
          Year: {movieObject.Year}<br/>
          Rated: {movieObject.Rated}<br/>
          Released: {movieObject.Released}<br/>
          Runtime: {movieObject.Runtime}<br/>
          Plot: {movieObject.Plot}<br/>
          Rating: {movieObject.Ratings[0].Source} {movieObject.Ratings[0].Value}
        </Card>
        <img src={movieObject.Poster} />
      </div>
    )
  }

  render(){
    let localMovie = []
    if(this.props.movieData) localMovie = this.props.movieData
    localMovie = [
      {
        Title: "Batman",
        Year: "1989",
        Rated: "PG-13",
        Released: "23 Jun 1989",
        Runtime: "126 min",
        Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
        Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        Ratings:[{Source: "Rotten Tomatoes", Value: "72%"}]
      }
    ]

    return(
      <div className='moviecontainer'>
        <h3 className='rankingtxt'>Movie</h3>
        {this.props.loadingData ?
          <div><Progress active bsStyle="success" min={1} max={2} now={2} label='Loading...'/></div>
          :
          // Map an object - use helper function to return what to render
          <div>
            {localMovie.map(this.movieMap)}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - MovieView')
  return {
    movieData: state.movieData,
    loadingData: state.loadingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchPostFavorite(movie){
      dispatch(postFavorite(movie))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieView)