import React, { Component } from 'react';
import { getQueue } from '../store/actions';
import { getWatched } from '../store/actions';
import Movie from '../components/movie';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import {withRouter} from "react-router-dom";

class Profile extends Component{


  componentDidMount(){
    this.props.dispatchGetQueue(this.props.user.id)
    this.props.dispatchGetWatched(this.props.user.id)
    this.props.user === undefined && this.props.history.push("/")
  }


  render(){
    console.log("value of user id")
    console.log(this.props.user.id)

    
    
    let localQueue = []
    if(this.props.queueData) localQueue = this.props.queueData
    let localWatched = []
    if(this.props.watchedData) localWatched = this.props.watchedData

    return(
      
      <div>
        <div className="profile-container">
          <div>
            <h3>Geek Score: </h3>
          </div>
        </div>

        <div className="profile-container">
        {this.props.loadingData ?
          <div>
            <CircularProgress size={60} thickness={5} />
          </div>

        :

          <div className="profile-container">
            <h3>Movies to Watch</h3>
            <div style={ {padding: '0 15px'} }>

                {localQueue.map( (movie, index) => (
                <Movie key={`${movie.imdbID}idx${index}`} movie={movie} />
              ))}
            </div>
          </div>
        }
        </div>

        <div className="profile-container">
        {this.props.loadingData ?
            <div>
              <CircularProgress size={60} thickness={5} />
            </div>
        :
            <div className="profile-container">
              <h3>Movies Watched</h3>
              <div style={ {padding: '0 15px'} }>
                  {/* {localWatched.map(this.watchedMap)} */}
                  {localWatched.map( (movie, index) => (
                <Movie key={`${movie.imdbID}idx${index}`} movie={movie} />
              ))}
              </div>
            </div>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - Profile')
  return {
    user: state.user,
    queueData: state.queueData,
    watchedData: state.watchedData,
    loadingData: state.loadingData,

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