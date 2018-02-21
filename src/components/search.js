import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Theaters from 'material-ui/svg-icons/action/theaters';
import { movieFetchImdbId, getRandomIntInclusive } from './helper';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }
  }

  getAddtionalMovieData = imdbID => {
    console.log(`Attempting to get random movie: ${imdbID}`);
    const result = movieFetchImdbId( imdbID );
    this.setState({loading: true});
    console.log(result)
    result
      .then( ({data}) => {
        this.props.history.push(`/search/${data.Title}`);
      })
      .catch(response => {
        this.setState({error: true, loading: false})
      })
  }
  
  render() {

    return (
      <div style={{display: 'flex', FlexDirection: 'row'}}>
        <form
          id="movieGeekRandomSearch"
          onSubmit={(e) => {
            e.preventDefault()
            this.getAddtionalMovieData(`tt${getRandomIntInclusive(100000, 2000000)}`)
          }}
        >
          <FlatButton
            type="submit"
            label="I Feel Lucky"
            backgroundColor="#FC6E51"
            hoverColor="#FFCE54"
            icon=''
            style={{ margin: 12, color: '#FFFFFF' }}
          />
        </form>
        <form
          id="movieGeekSearch"
          onSubmit={(e) => {
            e.preventDefault();

            console.log(`Attempting to search:  ${this.state.search}`);
            this.state.search !== '' && this.props.history.push(`/search/${this.state.search.trim()}`);
            this.setState({ search: '' });
          }}
        >
          <TextField
            style={{ padding: 0, marginRight: 10 }}
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
            style={{ margin: 12, color: '#FFFFFF' }}
          />
        </form>
      </div>
    );
  }
}

export default Search;