import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        id="movieGeekSearch"
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
        <RaisedButton type="submit">Search</RaisedButton>
      </form>
    );
  }
}

export default Search;