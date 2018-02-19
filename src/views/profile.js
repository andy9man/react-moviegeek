import React, { Component } from 'react';
import { getMockInfo } from '../store/actions';
import { connect } from 'react-redux';
import axios from 'axios';

const getInfo = path => {

  axios.get(`http://5a8b1dc33d92490012370bcc.mockapi.io/user/${this.props.userId}${path}`,{

  })
          .then((response) => {
              console.log('get response');
              console.log(response);

          })
          .catch(err => {
              console.log('error retrieving data', err);
          });

}

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


<<<<<<< HEAD
=======



>>>>>>> b10083587ce38cd65b1c64136b50e6ca67686479
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