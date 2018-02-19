import React, { Component } from 'react';
import { getRanking } from '../store/actions'
import { connect } from 'react-redux'
import { ProgressBar, Well } from 'reactstrap'

class RankingsView extends Component{

  componentDidMount(){
    this.props.dispatchGetRanking()
  }

  // helper function to map news object
  rankingMap(rankingObject, idx) {
    console.log(rankingObject)

    return (
      <div key={idx}>
        <Well bsSize="small">{rankingObject.name}: {rankingObject.score}</Well>
      </div>
    )
  }

  render(){
    let localRanking = []
    if(this.props.rankingData) localRanking = this.props.rankingData

    return(
      <div className='rankcontainer'>
        <h3>Rankings - Top: 5</h3>
        {this.props.loadingData ?
          <div><ProgressBar active bsStyle="success" min={1} max={2} now={2} label='Loading...'/></div>
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
    dispatchGetRanking(id){
      dispatch(getRanking(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingsView)