import React, { Component } from 'react';
import { getRanking, postFavorite } from '../store/actions'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, RaisedButton, FontIcon } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    // width: '100',
    // height: '800',
  },
    
    moviecontainer: {
      // width: '600px',
      // border: '1px solid black',
    },
    movieposter: {
      // width: '300px',
    },
    moviebox: {
      // display: 'flex',
      // flexDirection: 'row',
      // backgroundColor: 'lightgrey',
  },
};


class MovieView extends Component{
  
  // helper function to map news object
  movieMap(movieObject, idx) {
    console.log(movieObject)

    return (
      <div style={styles.root}>
    
    <GridTile>
      <div key={idx} >
        <Card >
          {/* <div >
            <div > */}
              <CardHeader
              
                title={movieObject.Title}
                subtitle={`${movieObject.Year}, ${movieObject.Rated}, ${movieObject.Runtime}`}
                //avatar={movieObject.Poster}
               
              />
             
             <div style={{textAlign:'center'}}>
                <img style={{height:200}} src={movieObject.Poster} alt=""/>
              </div>
          
            
              
              <CardTitle title={`${movieObject.Ratings[0].Source} ${movieObject.Ratings[0].Value}`} subtitle={movieObject.Plot} />
              {/* <CardText expandable={false}></CardText> */}
              
              <CardActions>
                <FlatButton label="Add to Favorites"/>
                <FlatButton label="Add to Queue" />
              </CardActions>
            {/* </div>
  
          </div> */}
        </Card>
      </div>
    </GridTile>
    
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
      },
      {
        Title: "Batman",
        Year: "1989",
        Rated: "PG-13",
        Released: "23 Jun 1989",
        Runtime: "126 min",
        Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker. The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
        Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        Ratings:[{Source: "Rotten Tomatoes", Value: "72%"}]
      },
      {
        Title: "Batman",
        Year: "1989",
        Rated: "PG-13",
        Released: "23 Jun 1989",
        Runtime: "126 min",
        Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker. The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
        Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        Ratings:[{Source: "Rotten Tomatoes", Value: "72%"}]
      },
      {
        Title: "Batman",
        Year: "1989",
        Rated: "PG-13",
        Released: "23 Jun 1989",
        Runtime: "126 min",
        Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker. The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
        Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        Ratings:[{Source: "Rotten Tomatoes", Value: "72%"}]
      },
      {
        Title: "Batman",
        Year: "1989",
        Rated: "PG-13",
        Released: "23 Jun 1989",
        Runtime: "126 min",
        Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker. The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
        Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        Ratings:[{Source: "Rotten Tomatoes", Value: "72%"}]
      },
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
          <div style={styles.root}>
            <GridList
             cellHeight={700}
             style={styles.gridList}>
            {localMovie.map(this.movieMap)}
            </GridList>
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