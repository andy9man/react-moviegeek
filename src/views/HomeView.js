import React, { Component } from 'react';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default HomeView;