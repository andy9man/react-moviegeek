import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import icon from '../assets/clapper-icon.png';
import FlashWatch from '../views/flashwatch';

class Title extends Component {
  state = {
    flashWatchModalOpen: false,
  }

  handleFlashWatchModal = () => this.setState( {flashWatchModalOpen: !this.stateflashWatchModalOpen} );
  handleFlashWatchClose = () => this.setState( {flashWatchModalOpen: false} );

  render() {

    return (
      <div style={ {display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center'}}>
        Movie Geek
        <img src={icon} onClick={this.handleFlashWatchModal} alt="Movie Geek Logo" />

        <Dialog
          title="Movie of the Day"
          actions={[
            <FlatButton
              label="Close"
              hoverColor="#B0BEC5"
              onClick={this.handleFlashWatchClose}
            />
          ]}
          open={this.state.flashWatchModalOpen}
          onRequestClose={this.handleFlashWatchClose}
          style={{marginTop: -80}}
        >
          <FlashWatch />
        </Dialog>

      </div>
    );
  }
}

export default Title;