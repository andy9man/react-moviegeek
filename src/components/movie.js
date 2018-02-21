import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import ListAdded from 'material-ui/svg-icons/av/playlist-add-check';
import ListAdd from 'material-ui/svg-icons/av/playlist-add';
import MovieAdd from 'material-ui/svg-icons/image/movie-creation';
import MovieAdded from 'material-ui/svg-icons/image/movie-filter';
// import {fullWhite} from 'material-ui/styles/colors';

import { movieFetchImdbId, deconstructRatings, findMovie } from './helper';
import noImage from '../assets/no-image.gif';
import { postToWatched, postToQueue, deleteFromQueue, deleteFromWatched } from '../store/actions';


class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetails: undefined,
      loading: false,
      error: false
    }
  }

  getAddtionalMovieData = imdbID => {
    const result = movieFetchImdbId( imdbID );
    this.setState({loading: true});
    result
      .then( ({data}) => {
        this.setState({movieDetails: data, loading: false, error: false})
      })
      .catch(response => {
        this.setState({error: true, loading: false})
      })
  }

  componentDidMount() {
    this.getAddtionalMovieData(this.props.movie.imdbID);
  }

  render() {
    const { Title, Year, Poster} = this.props.movie;
    const { loading, error, movieDetails } = this.state;
    const {
      addMovieWatched,
      deleteMovieWatched,
      addMovieQueue,
      deleteMovieQueue,
      user,
      watchedData,
      queueData
    } = this.props;
    const expand = this.props.expand === undefined ? true : !this.props.expand;
    const userId = user === undefined ? undefined : user.id;
    const onWatchList = findMovie(watchedData, Title );
    const onQueueList = findMovie(queueData, Title);

    //console.log(`Movie:\t ${Title}\nWatch List:\t${onWatchList.found}  Queue List:\t${onQueueList.found}`)
    return (
      <Card style={ {marginBottom: 15} }>
        <CardHeader
          title={Title}
          avatar={Poster.includes("http") ? Poster : noImage}
          subtitle={Year}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={expand}>

          {
            loading ?
            <div>
              <CircularProgress size={60} thickness={5} />
            </div>
            :
              error ?
                <h3 style={{color: 'red'}}>Error loading additional movie details</h3>
              :
                movieDetails ?

                  <div className="movieDetails">
                    <div style={{float: 'left', minWidth: 300, width: '50vw'}}>
                      <h3 className="movieDetails-title">Rated:</h3> <span>{movieDetails.Rated}</span><br />
                      <h3 className="movieDetails-title">Runtime:</h3>  <span>{movieDetails.Runtime}</span><br />
                      <h3 className="movieDetails-title">Rotten Tomatoes Score:</h3>  <span>{deconstructRatings(movieDetails.Ratings).Value}</span><br />
                      <h3 className="movieDetails-title">IMDb ID:</h3>  <span>{movieDetails.imdbID}</span><br />
                      <h3 className="movieDetails-title">Plot:</h3>
                      <p style={ {lineHeight: 1.6, marginLeft: 30} }>{movieDetails.Plot}</p>
                    </div>
                    <div style={ {textAlign: 'center', float: 'left', width: '30vw'} }>
                      <img src={movieDetails.Poster ? movieDetails.Poster.includes("http") ? movieDetails.Poster : noImage : noImage} alt={Title} />
                    </div>
                  </div>
                :
                  <h3 style={ {color: 'red'} }><em>There was an issue getting additional movie details</em></h3>
          }

          <CardActions style={ {visibility: userId === undefined ? 'hidden' : 'visible'} }>
            {
              onQueueList.found ?
                <FlatButton
                  label="remove from queue"
                  onClick={() => deleteMovieQueue(onQueueList.id, userId)}
                  backgroundColor="#FFEA00"
                  hoverColor="#FFFF8D"
                  icon={<ListAdded />}
                  style={ {margin: 12} }
                />
              :
                <FlatButton
                  label="add to queue"
                  onClick={() => addMovieQueue(movieDetails, userId)}
                  backgroundColor="#FFEA00"
                  hoverColor="#FFFF8D"
                  icon={<ListAdd />}
                  style={ {margin: 12} }
                />
            }
            {
              onWatchList.found ?
                <FlatButton
                  label="unwatch"
                  onClick={() => deleteMovieWatched(onWatchList.id, userId)}
                  backgroundColor="#64DD17"
                  hoverColor="#CCFF90"
                  icon={<MovieAdded />}
                  style={ {margin: 12} }
                />
              :
                <FlatButton
                  label="watched"
                  onClick={() => addMovieWatched(movieDetails, userId)}
                  backgroundColor="#64DD17"
                  hoverColor="#CCFF90"
                  icon={<MovieAdd />}
                  style={ {margin: 12} }
                />
            }
          </CardActions>
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    watchedData: state.watchedData,
    queueData: state.queueData,
    user: state.user,
    loadingData: state.loadingData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovieWatched(movieObj, uId) {
      dispatch( postToWatched(movieObj, uId) );
    },
    addMovieQueue(movieObj, uId) {
      dispatch( postToQueue(movieObj, uId) );
    },
    deleteMovieWatched(movieId, uId) {
      dispatch( deleteFromWatched(movieId, uId) );
    },
    deleteMovieQueue(movieId, uId) {
      dispatch( deleteFromQueue(movieId, uId) );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);