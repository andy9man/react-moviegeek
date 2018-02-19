import React, { Component } from 'react';
import { getData } from '../store/actions'
import { connect } from 'react-redux'

class Ranking extends Component{
  render(){
    return(
      <div>View</div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - Ranking')
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

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)