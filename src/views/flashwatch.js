import React, { Component } from 'react';
import { getFlashWatch } from '../store/actions'
import { connect } from 'react-redux'

class FlashWatch extends Component{
  
  
  
  
  render(){
    return(
      <div>View</div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - FlashWatch')
  return {
    viewData: state.viewData,
    loadingData: state.loadingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetFlashWatch(data){
      dispatch(getFlashWatch(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashWatch)