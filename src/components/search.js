import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Theaters from 'material-ui/svg-icons/action/theaters';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }
  }

  render() {

    return (
      <form
        onSubmit={ (e) => {
          e.preventDefault();

          console.log(`Attempting to search:  ${this.state.search}`);
          this.state.search !== '' && this.props.history.push(`/search/${this.state.search.trim()}`);
          this.setState({search: ''});
        }}
      >
        <TextField
          style={ {padding: 0, marginRight: 10} }
          hintText="Movie Search"
          required={true}
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        {/* <RaisedButton type="submit">Search</RaisedButton> */}
        <FlatButton
          type="submit"
          label="Search"
          backgroundColor="#FC6E51"
          hoverColor="#FFCE54"
          icon={<Theaters />}
          style={ {margin: 12, color: '#FFFFFF'} }
        />
      </form>
    );
  }
}

export default Search;