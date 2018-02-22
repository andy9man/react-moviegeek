import React, { Component } from 'react';
import { getQueue } from '../store/actions';
import { getWatched } from '../store/actions';
import Movie from '../components/movie';
import { connect } from 'react-redux';
import { Loader } from '../components/theme';
import { withRouter } from "react-router-dom";

class Profile extends Component{

  componentWillMount() {
    this.props.user === undefined && this.props.history.push('/');
  }

  componentDidMount(){
    if(this.props.user !== undefined) {
      this.props.dispatchGetQueue(this.props.user.id)
      this.props.dispatchGetWatched(this.props.user.id)

    }
  }

  render(){
    // let localQueue = []
    // if(this.props.queueData) localQueue = this.props.queueData
    // let localWatched = []
    // if(this.props.watchedData) localWatched = this.props.watchedData
    const { queueData, watchedData, loadingQueueData, loadingWatchedData } = this.props;
    return(

      <div>
        <div className="profile-container">
          <div>
            <h3>Geek Score: <b>{this.props.user && <span className="profile-score">{this.props.user.score}</span>}</b></h3>
          </div>
        </div>

        <div className="profile-container">
        {loadingQueueData ?
          <div>
            <Loader />
          </div>
        :
          <div className="profile-container">
            <h3>Your Movie Queue</h3>
            <div style={ {padding: '0 15px'} }>

                {queueData.map( (movie, index) => (
                <Movie key={`${movie.imdbID}idx${index}`} movie={movie} />
              ))}
            </div>
          </div>
        }
        </div>

        <div className="profile-container">
        {loadingWatchedData ?
            <div>
              <Loader />
            </div>
        :
            <div className="profile-container">
              <h3>Your Watched Movies</h3>
              <div style={ {padding: '0 15px'} }>
                  {/* {localWatched.map(this.watchedMap)} */}
                  {watchedData.map( (movie, index) => (
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
    loadingQueueData: state.loadingQueueData,
    loadingWatchedData: state.loadingWatchedData,

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));