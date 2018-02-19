import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';


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
        <FormControl
          type="text"
          value={this.state.input}
          onChange={(e) => this.setState({input: e.target.value})}
        />
      </div>
    );
  }
}

export default HomeView;