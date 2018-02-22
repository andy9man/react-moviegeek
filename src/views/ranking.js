import React, { Component } from 'react';
import { getRankings } from '../store/actions'
import { connect } from 'react-redux'
import { Loader } from '../components/theme';


class RankingsView extends Component{

  componentDidMount(){
    this.props.dispatchGetRankings()
  }

  render(){
    const {rankingData} = this.props;
    console.log(rankingData)
    return(
      <div>
        <h3>Movie Geek Leaderboard</h3>
        {
          this.props.loadingData ?
          <div>
            <Loader />
          </div>
        :
          // Map an object - use helper function to return what to render
          <div style={{width: '100%', padding: '0 15px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {
              rankingData.length > 0 ?
                rankingData.map( (player, index) => (
                  <div
                    key={index}
                    style={{
                      border: '#37474F 2px solid',
                      backgroundImage: `url(${player.avatar})`,
                      backgroundSize: '200px',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#fff',
                      minWidth: 300,
                      maxWidth: '80vw',
                      width: 500,
                      height: 100,
                      marginBottom: 10,

                    }}
                  >
                      <div
                        style={{
                          background: "rgba(207, 216, 220, 0.9)",
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span className="leader-rank">{index + 1}</span>
                        <span className="leader-name">{player.name}</span>
                        <span className="leader-score">{player.score}</span>
                      </div>
                  </div>
                ))
              :
                <em>Looks like there aren't any leaders, come help us fix that!</em>
            }
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