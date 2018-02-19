import React, { Component } from 'react';
import { getMockInfo } from '../store/actions'
import { connect } from 'react-redux'
import { Progress, Card } from 'reactstrap'

class RankingsView extends Component{

  componentDidMount(){
    this.props.dispatchGetRanking()
  }

  // helper function to map news object
  rankingMap(rankingObject, idx) {
    console.log(rankingObject)

    return (
      <div key={idx}>
        <Card bsSize="small">{idx + 1}) {rankingObject.name}: {rankingObject.score}</Card>
      </div>
    )
  }

  render(){
    let localRanking = []
    if(this.props.rankingData) localRanking = this.props.rankingData

    return(
      <div className='rankcontainer'>
        <h3 className='rankingtxt'>Rankings - Top: 5</h3>
        {this.props.loadingData ?
          <div><Progress active animated color="success" value="100" max="100" now="100" label='Loading...'/></div>
          :
          // Map an object - use helper function to return what to render
          <div className='rankscroll'>
            {localRanking.map(this.rankingMap)}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - RankingsView')
  return {
    rankingData: state.rankingData,
    loadingData: state.loadingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetMockInfo(id){
      dispatch(getMockInfo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingsView)