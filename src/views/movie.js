import React, { Component } from 'react';
import { getRanking, postFavorite } from '../store/actions'
import { connect } from 'react-redux'
import { Progress, Card } from 'reactstrap'

class MovieView extends Component{

  // helper function to map news object
  rankingMap(rankingObject, idx) {
    console.log(rankingObject)

    return (
      <div key={idx}>
        <Card bsSize="small">{idx + 1}) {rankingObject.name}</Card>
      </div>
    )
  }

  render(){
    let localMovie = []
    if(this.props.movieData) localMovie = this.props.movieData
    localMovie = []

    return(
      <div className='rankcontainer'>
        <h3 className='rankingtxt'>Movie</h3>
        {this.props.loadingData ?
          <div><Progress active bsStyle="success" min={1} max={2} now={2} label='Loading...'/></div>
          :
          // Map an object - use helper function to return what to render
          <div className='rankscroll'>
            {localMovie.map(this.rankingMap)}
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