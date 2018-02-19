import React, { Component } from 'react';
import { getMockInfo } from '../store/actions';
import { connect } from 'react-redux';
import axios from 'axios';


const Queue = () => {
  let path = "/queue"
  return (
    getMockInfo(path)
  )
}

const Watched = () => {
  let path = "/watched"
  return (
    getMockInfo(path)
  )
}

class Profile extends Component{


  render(){
    return(
      <div>
        <div>Geek Score: </div>
        
        <div>Movies to Watch</div>
        <Queue />
        <div>Movies Watched</div>
        <Watched />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - Profile')
  return {
    userId: state.userId,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetMockInfo(data){
      dispatch(getMockInfo(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)