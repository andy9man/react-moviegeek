import React, { Component } from 'react';
import { getRanking, postFavorite } from '../store/actions'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, RaisedButton, FontIcon } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  moviecontainer: {
    // width: '600px',
    border: '1px solid black',
  },
  movieposter: {
    // width: '300px',
  },
  moviebox: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
  },
}

class MovieView extends Component{
  
  // helper function to map news object
  movieMap(movieObject, idx) {
    console.log(movieObject)

    return (
      <div key={idx} >
        <Card>
          <div style={styles.moviebox}>
            <div style={{ width: '70%' }}>
              <CardHeader
                title={movieObject.Title}
                subtitle={`${movieObject.Year}, ${movieObject.Rated}, ${movieObject.Runtime}`}
                avatar={movieObject.Poster}
              >
              </CardHeader>
              <CardTitle title={`${movieObject.Ratings[0].Source} ${movieObject.Ratings[0].Value}`} subtitle={movieObject.Plot} />
              {/* <CardText expandable={false}></CardText> */}
              <CardActions>
                <FlatButton label="Add to Favorites" primary={true} />
                <FlatButton label="Add to Queue" secondary={true} />
              </CardActions>
            </div>
            <div style={{ width: '30%' }}>
              <CardMedia>
                <img src={movieObject.Poster} alt="" />
              </CardMedia>
            </div>
          </div>
        </Card>
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
        Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker. The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
        Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        Ratings:[{Source: "Rotten Tomatoes", Value: "72%"}]
      }
    ]

    return(
      <div style={styles.moviecontainer}>
        {this.props.loadingData ?
          <div>
            <CircularProgress size={60} thickness={5} />
          </div>
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