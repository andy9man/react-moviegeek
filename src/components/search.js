import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Theaters from 'material-ui/svg-icons/action/theaters';
import {fullWhite} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Couch from 'material-ui/svg-icons/content/weekend';
import { movieFetchImdbId, getRandomIntInclusive } from './helper';
import { Link } from 'react-router-dom';

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
        <Link to={`/random/${getRandomIntInclusive(1, 100000)}`} >
          <IconButton
            type="submit"
            title="Feeling Lucky..."
            style={{
              backgroundColor: '#FC6E51',
              borderRadius: '50%',
              marginRight: 15,
              top: 5,
            }}
          >
            <Couch color={fullWhite} />
          </IconButton>
        </Link>
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