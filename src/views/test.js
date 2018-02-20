import React, { Component } from 'react';
import { postToWatched, postToQueue, deleteFromWatched, deleteFromQueue } from '../store/actions'
import { connect } from 'react-redux'

class TestView extends Component{

  componentDidMount(){
    // this.props.dispatchGetRankings()
  }

  render(){
    let localQueue = []
    if(this.props.queueData) localQueue = this.props.queueData
    let localWatched = []
    if(this.props.watchedData) localWatched = this.props.watchedData

    localQueue =
      {
        Title: 'Batman',
        Year: '1989',
        Rated: 'PG-13',
        Runtime: '126 min',
        Plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
        Ratings: [{Source: "Internet Movie Database", Value: "7.6/10"},{Source: "Rotten Tomatoes", Value: "72%"},{Source: "Metacritic", Value: "69/100"}]
      }
    console.log(localQueue)

    localWatched = 
      {
        Title: 'Batman',
        Year: '1989',
        Rated: 'PG-13',
        Runtime: '126 min',
        Plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
        Ratings: [{Source: "Internet Movie Database", Value: "7.6/10"},{Source: "Rotten Tomatoes", Value: "72%"},{Source: "Metacritic", Value: "69/100"}]
      }
    console.log(localWatched)

    // let lsource = localWatched.Ratings.find((a) => { return (a.Source === "Rotten Tomatoes") } )
    // console.log(lsource.Source + ", " + lsource.Value)

    return (
      <div>
        <button onClick={() => {this.props.dispatchPostToWatched(localWatched, '3')}}>Add to Watched</button>
        <button onClick={() => {this.props.dispatchPostToQueue(localQueue, '3')}}>Add to Queue</button>
        <button onClick={() => {this.props.dispatchDeleteFromWatched('1', '3')}}>Delete from Watched</button>
        <button onClick={() => {this.props.dispatchDeleteFromQueue('1', '3')}}>Delete from Queue</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - TestView')
  return {
    queueData: state.queueData,
    watchedData: state.watchedData,
    loadingData: state.loadingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchPostToWatched(movieObj, user_id){
      dispatch(postToWatched(movieObj, user_id))
    },
    dispatchPostToQueue(movieObj, user_id){
      dispatch(postToQueue(movieObj, user_id))
    },
    dispatchDeleteFromWatched(movie_id, user_id){
      dispatch(deleteFromWatched(movie_id, user_id))
    },
    dispatchDeleteFromQueue(movie_id, user_id){
      dispatch(deleteFromQueue(movie_id, user_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestView)