import React, { Component } from 'react';
import { getQueue } from '../store/actions';
import { getWatched } from '../store/actions';
import Movie from '../components/movie';
import { connect } from 'react-redux';
import { Loader } from '../components/theme';

class Profile extends Component{

  componentDidMount(){
    this.props.dispatchGetQueue(this.props.userId)
    this.props.dispatchGetWatched(this.props.userId)
  }

  render(){
    console.log("value of user id")
    console.log(this.props.userId)

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
            <Loader />
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
              <Loader />
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
    userId: state.userId,
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