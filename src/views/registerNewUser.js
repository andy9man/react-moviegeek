import React, { Component } from 'react';
import { getUsers, addUser } from '../components/helper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      name: '',
      avatar: '',
      score: 0,
      error: undefined,
      success: undefined,

      users: [],
      loadUsersSuccess: false
    }
  }

  getAllUsers() {
    const result = getUsers();
    result
      .then( ({data}) => {
        this.setState({users: data, loadUsersSuccess: true});
      })
  }

  addNewUser = () => {
    const { username, password, name, avatar, score } = this.state;
    const result = addUser({username, password, name, avatar, score});
    result
     .then( response => console.log(response))
     .catch( error => console.log(error))
  }

  handleInput = e => this.setState({[e.target.name]: e.target.value})

  componentDidMount() {
    this.getAllUsers();
  }

  render () {
    const { username, password, name, avatar, users, loadUsersSuccess } = this.state;

    return (
      <div style={{width: '80%', padding: '0 15px'}}>
        <h3>Sign Up for Movie Geek</h3>

        {
          loadUsersSuccess ?
            <form
              style={{padding: '0 15px'}}
              onSubmit={(e) => {
                e.preventDefault();
                this.addNewUser();
              }}
            >

              <TextField
                floatingLabelText="Username"
                name="username"
                type="text"
                required={true}
                value={username}
                onChange={this.handleInput}
                style={{width: '100%', display: 'block'}}
                inputStyle={{color: '#263238'}}
              />
              <TextField
                floatingLabelText="Password"
                name="password"
                type="password"
                required={true}
                value={password}
                onChange={this.handleInput}
                style={{width: '100%', display: 'block'}}
                inputStyle={{color: '#263238'}}
              />
              <TextField
                floatingLabelText="Name (name shown in the App)"
                name="name"
                type="text"
                required={true}
                value={name}
                onChange={this.handleInput}
                style={{width: '100%', display: 'block'}}
                inputStyle={{color: '#263238'}}
              />
              <TextField
                floatingLabelText="Avatar (link to image)"
                name="avatar"
                type="text"
                value={avatar}
                onChange={this.handleInput}
                style={{width: '100%', display: 'block'}}
                inputStyle={{color: '#263238'}}
              />

              <RaisedButton type="submit">Register</RaisedButton>
            </form>
          :
              <em>We are not able to Register New Users at this time...</em>
        }
      </div>
    );
  }
}

export default RegisterUser;