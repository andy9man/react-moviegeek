import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Loader } from '../components/theme';
import Movie from '../components/movie';
import { getFlashWatch } from '../store/actions';

class FlashWatch extends Component{
  
  componentDidMount() {
    this.props.dispatchGetFlashWatch()
  }

  render(){
    console.log(this.props.flashWatchData)

    return (
      <div>
        {this.props.loadingData ?
          <div>
            <Loader />
          </div>
          :
          // Map an object - use helper function to return what to render
          <div>
            {
                this.props.flashWatchData && <Movie movie={this.props.flashWatchData} expand={true} />
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(FlashWatch)