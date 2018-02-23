import React, { Component } from 'react';
// import icon from '../assets/clapper-icon.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '',
    }
  }
  componentDidMount() {
    document.getElementById('main').style.backgroundColor="transparent";
  }

  componentWillUnmount() {
    document.getElementById('main').style.backgroundColor="";
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          padding: 25,
          top: -10,
        }}
      >

      </div>
    );
  }
}

export default Home;