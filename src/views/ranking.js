import React, { Component } from 'react';
import { getRankings } from '../store/actions'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress';
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';


class RankingsView extends Component{

  componentDidMount(){
    this.props.dispatchGetRankings()
  }

  // helper function to map news object
  rankingMap(rankingObject, idx) {
    console.log(rankingObject)

    return (
      <div key={idx}>
        <Card>
          <CardHeader
            title={rankingObject.name}
          />
          <CardText>
            {idx + 1} - {rankingObject.name}: {rankingObject.score}
          </CardText>
        </Card>
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
          <div>
            <CircularProgress size={60} thickness={5} />
          </div>
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
    dispatchGetRankings(){
      dispatch(getRankings())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingsView)