import React, { Component } from 'react';
import { getData } from '../store/actions';
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
    getInfo(path)
  )
}

const Watched = () => {
  let path = "/watched"
  return (
    getInfo(path)
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
    dispatchGetData(data){
      dispatch(getData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)