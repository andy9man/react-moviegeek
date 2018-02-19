import React, { Component } from 'react';
import { getQueue } from '../store/actions';
import { getWatched } from '../store/actions';
import { connect } from 'react-redux';
import axios from 'axios';


class Profile extends Component{

  componentDidMount(){
    this.props.dispatchGetQueue(this.props.userId)
    this.props.dispatchGetWatched(this.props.userId)
  }

  render(){
    console.log("value of user id")
    console.log(this.props.userId)
    return(
      <div>
        <div>Geek Score: </div>

        <div>Movies to Watch</div>
       
        <div>Movies Watched</div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - Profile')
  return {
    userId: state.userId,
    queueData: state.queueData,
    watchedData: state.watchedData,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetQueue(userId){
      dispatch(getQueue(userId))
    },
    dispatchGetWatched(userId){
      dispatch(getWatched(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)