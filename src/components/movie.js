import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import { movieFetchImdbId, deconstructRatings } from './helper';
import noImage from '../assets/no-image.gif';


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
    console.log(movieDetails)

    return (
      <Card style={ {marginBottom: 15} }>
        <CardHeader
          title={Title}
          avatar={Poster.includes("http") ? Poster : noImage}
          subtitle={Year}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>

          {
            loading ?
            <div>
              <CircularProgress size={60} thickness={5} />
            </div>
            :
              movieDetails ?
                <div style={ {display: 'flex', flexDirection: 'row'} } className="movieDetails">
                  <div>
                    <p><span className="movieDetails-title">Rated:</span> {movieDetails.Rated}</p>
                    <p><span className="movieDetails-title">Runtime:</span>  {movieDetails.Runtime}</p>
                    <p><span className="movieDetails-title">Rotten Tomatoes Score:</span>  {deconstructRatings(movieDetails.Ratings).Value}</p>
                    <p><span className="movieDetails-title">Plot:</span></p>
                    <p>{movieDetails.Plot}</p>
                  </div>
                  <div>
                    <img src={movieDetails.Poster} alt={Title} />
                  </div>
                </div>
              :
                <h3 style={ {color: 'red'} }><em>There was an issue getting additional movie details</em></h3>
          }

          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </CardText>
      </Card>
    );
  }
}

export default Movie;