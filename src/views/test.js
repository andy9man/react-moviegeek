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
        title: 'Batman',
        year: '1989',
        rated: 'PG-13',
        released: '23 Jun 1989',
        runtime: '126 min',
        plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
        ratings: [{
          source: 'Rotten Tomatoes',
          value: '72%'
        }]
      }
    console.log(localQueue)

    localWatched = 
      {
        title: 'Batman',
        year: '1989',
        rated: 'PG-13',
        released: '23 Jun 1989',
        runtime: '126 min',
        plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
        ratings: [{
          source: 'Rotten Tomatoes',
          value: '72%'
        }]
      }
    console.log(localWatched)

    return (
      <div>
        <button onClick={() => {this.props.dispatchPostToWatched(localWatched, '3')}}>Add to Watched</button>
        <button onClick={() => {this.props.dispatchPostToQueue(localQueue, '3')}}>Add to Queue</button>
        <button onClick={() => {this.props.dispatchDeleteFromWatched('1', '1')}}>Delete from Watched</button>
        <button onClick={() => {this.props.dispatchDeleteFromQueue('1', '1')}}>Delete from Queue</button>
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