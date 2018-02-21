import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Loader } from '../components/theme';
import Movie from '../components/movie';
import { getFlashWatch } from '../store/actions';
import { withRouter } from "react-router-dom";

class FlashWatch extends Component{
  
  componentDidMount() {
    this.props.dispatchGetFlashWatch()
  }

  render(){
    console.log('value of this.props.flashWatchData')
    console.log(this.props.flashWatchData)
    console.log('value of this.props.loadingData')
    console.log(this.props.loadingData)

    return (
      <div>
        {this.props.loadingData || this.props.flashWatchData === undefined ?
          <div>
            <Loader />
          </div>
          :
          // Map an object - use helper function to return what to render
          <div>
            <h4>Movie of the day</h4>
            <Movie movie={this.props.flashWatchData} expand='true'/> 
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - FlashWatch')
  return {
    loadingData: state.loadingData,
    flashWatchData: state.flashWatchData,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetFlashWatch(){
      dispatch(getFlashWatch())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlashWatch))