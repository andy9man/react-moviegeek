import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Loader } from '../components/theme';
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';

class FlashWatch extends Component{
  constructor(props){
    super(props)

    this.state = {
      flashWatchData: this.props.flashWatchData,

    }
  }




  render(){
    let localFlashWatch = []
    if(this.props.flashWatchData) localFlashWatch = this.props.flashWatchData


    return(
      <div>
        <Card>
          <CardHeader
            title={localFlashWatch.name}
          />
          <CardText>
            {localFlashWatch.name}
          </CardText>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapping state to props - FlashWatch')
  return {
    viewData: state.viewData,
    loadingData: state.loadingData,
    flashWatchData: state.flashWatchData,
  }
}

export default connect(mapStateToProps)(FlashWatch)