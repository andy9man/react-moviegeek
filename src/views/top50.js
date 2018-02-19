import React, { Component } from 'react';
import { getData } from '../store/actions'
import { connect } from 'react-redux'

class Top50 extends Component{
  render(){
    return(
      <div>View</div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - Top50')
  return {
    viewData: state.viewData,
    loadingData: state.loadingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetData(data){
      dispatch(getData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top50)