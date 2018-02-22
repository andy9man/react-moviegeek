import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { LOAD_USER, getWatched, getQueue } from '../store/actions';
import { getUsers } from './helper';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      users: [],
      loading: false,
      loginModalOpen: true,
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
    if( user ) {
      this.props.setUserLogin(user);
      this.setState({loginModal: false})
      this.props.dispatchGetQueue(user.id)
      this.props.dispatchGetWatched(user.id)
    }
    else {
      this.setState({error: "Invalid username or password."});
    }
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


        <form onSubmit={ (e) => {
            e.preventDefault();
            this.validateLogin();
          }}
        >
          <TextField
            hintText="Username"
            name="username"
            type="text"
            required={true}
            value={username}
            onChange={this.handleInput}
            tabIndex={1}
            style={{width: '100%'}}
            inputStyle={{color: '#424242'}}
          /><br/>
          <TextField
            hintText="Password"
            name="password"
            type="password"
            required={true}
            value={password}
            onChange={this.handleInput}
            tabIndex={2}
            style={{width: '100%'}}
            inputStyle={{color: '#424242'}}
          /><br/>
          <span className="error">{error}</span>
          <RaisedButton
            type="submit"
            backgroundColor= "#263238"
            labelColor="#ECEFF1"
            label="Login"
          />
        </form>
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
    dispatchGetQueue(userId){
      dispatch(getQueue(userId))
    },
    dispatchGetWatched(userId){
      dispatch(getWatched(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);