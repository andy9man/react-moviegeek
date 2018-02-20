import React, { Component } from 'react';
import { getQueue } from '../store/actions';
import { getWatched } from '../store/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';


class Profile extends Component{

  componentDidMount(){
    this.props.dispatchGetQueue(this.props.userId)
    this.props.dispatchGetWatched(this.props.userId)
  }

  queueMap(queueObject, idx) {
    console.log(queueObject)

    return (
      <div key={idx}>
        <Card>
          <CardHeader
            title={queueObject.name}
          />
          <CardText>
            {queueObject.name}
          </CardText>
        </Card>
      </div>
    )
  }

  watchedMap(mapObject, idx) {
    console.log(mapObject)

    return (
      <div key={idx}>
        <Card>
          <CardHeader
            title={mapObject.name}
          />
          <CardText>
            {mapObject.name}
          </CardText>
        </Card>
      </div>
    )
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
        
          <div>
            <h2>Geek Score: </h2>
          </div>

        {this.props.loadingData ?
          <div>
            <CircularProgress size={60} thickness={5} />
          </div>
        :
          <div>
            <h2>Movies to Watch</h2>
            <div className='rankscroll'>
                {localQueue.map(this.queueMap)}
            </div>
          </div>
        }

        {this.props.loadingData ?
          <div>
            <CircularProgress size={60} thickness={5} />
          </div>
        :
          <div>
            <h2>Movies Watched</h2>
            <div className='rankscroll'>
                {localWatched.map(this.watchedMap)}
            </div>
          </div>
        }
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