import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { LOAD_USER } from '../store/actions';
import { getUsers } from './helper';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      users: [],
      loading: false
    }
  }

  loadUsers = () => {
    this.setState({loading: true})
    const result = getUsers();
    result
      .then( ({data}) => {
        this.setState({users: data, loading: false})
      })
      .catch( response => {
        this.setState({loading: false, users: []});
      })
  }

  validateLogin = () => {
    const {username, password, users} = this.state;

    const user = users.find(user => user.username === username && user.password === password);
    user ? this.props.setUserLogin(user) : this.setState({error: "Invalid username or password."});
  }

  handleInput = e => {
    this.setState({[e.target.name]: e.target.value, error: ''});
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    const {username, password, error} = this.state;
    return (
      <div
        style={ {
          backgroundColor: '#263238',
          margin: 5,
          padding: 5,
          width: 195,
          overflow: 'hidden',
          visibility: this.props.user === undefined ? 'visible' : 'hidden',
        }}
      >
      <form onSubmit={ (e) => {
          e.preventDefault();
          this.validateLogin();
        }}
      >
        <TextField
          style={ {width: 190} }
          hintText="Username"
          name="username"
          type="text"
          required={true}
          value={username}
          onChange={this.handleInput}
          tabIndex={-1}
        /><br/>
        <TextField
          style={ {width: 190} }
          hintText="Password"
          name="password"
          type="password"
          required={true}
          value={password}
          onChange={this.handleInput}
          tabIndex={-1}
        /><br/>
        <span className="error">{error}</span>
        <RaisedButton type="submit">Login</RaisedButton>
      </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserLogin(user){
      dispatch({type: LOAD_USER, payload: user} )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);