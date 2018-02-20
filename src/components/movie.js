import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import { movieFetchImdbId, deconstructRatings } from './helper';
import noImage from '../assets/no-image.gif';
import { postToWatched } from '../store/actions';


class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetails: undefined,
      loading: false
    }
  }

  getAddtionalMovieData = imdbID => {
    const result = movieFetchImdbId( imdbID );
    this.setState({loading: true});
    result
      .then( ({data}) => {
        this.setState({movieDetails: data, loading: false})
      })

  }

  componentDidMount() {
    this.getAddtionalMovieData(this.props.movie.imdbID);
  }

  render() {
    const { imdbID, Title, Year, Poster} = this.props.movie;
    const { loading, movieDetails } = this.state;
    const { addMovieWatched, userId } = this.props;
    const expand = this.props.expand === undefined ? true : !this.props.expand;

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
              movieDetails ?
                <div style={ {display: 'flex', flexDirection: 'row', width: '100%'} } className="movieDetails">
                  <div>
                    <p><span className="movieDetails-title">Rated:</span> {movieDetails.Rated}</p>
                    <p><span className="movieDetails-title">Runtime:</span>  {movieDetails.Runtime}</p>
                    <p><span className="movieDetails-title">Rotten Tomatoes Score:</span>  {deconstructRatings(movieDetails.Ratings).Value}</p>
                    <p><span className="movieDetails-title">imDb:</span>  {movieDetails.imdbID}</p>
                    <p><span className="movieDetails-title">Plot:</span></p>
                    <p>{movieDetails.Plot}</p>
                  </div>
                  <div style={ {textAlign: 'right'} }>
                    <img src={movieDetails.Poster ? movieDetails.Poster : noImage} alt={Title} />
                  </div>
                </div>
              :
                <h3 style={ {color: 'red'} }><em>There was an issue getting additional movie details</em></h3>
          }

          <CardActions>
            <FlatButton
              label="I Want To Watch"
              onClick={this.prop}
            />
            <FlatButton
              label="Watched"
              onClick={() => addMovieWatched(movieDetails, userId)}
            />
          </CardActions>
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    watchedData: state.watchedData,
    userId: state.userId,
    loadingData: state.loadingData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovieWatched(movieObj, uId){
      dispatch(postToWatched(movieObj, uId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);