import React, { Component } from 'react';
import { getUsers } from '../components/helper';
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

  componentDidMount() {
    this.getAllUsers();
  }

  render () {
    const { username, password, name, avatar, users, loadUsersSuccess } = this.state;

    return (
      <div>
        <h3>Sign Up for Movie Geek</h3>

        {
          loadUsersSuccess ?
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Attempting to register as a new user');
            }}>

              <TextField
                floatingLabelText="Username"
                name="username"
                type="text"
                required={true}
                value={username}
                onChange={this.handleInput}
                style={{width: '100%', display: 'block'}}
                inputStyle={{color: '#424242'}}
              />
              <TextField
                floatingLabelText="Password"
                name="password"
                type="password"
                required={true}
                value={password}
                onChange={this.handleInput}
                style={{width: '100%', display: 'block'}}
                inputStyle={{color: '#424242'}}
              />
              <TextField
                floatingLabelText="Name (name shown in the App)"
                name="name"
                type="text"
                required={true}
                value={name}
                onChange={this.handleInput}
                style={{width: '100%', display: 'block'}}
                inputStyle={{color: '#424242'}}
              />
              <TextField
                floatingLabelText="Avatar (link to image)"
                name="avatar"
                type="text"
                required={true}
                value={avatar}
                onChange={this.handleInput}
                style={{width: '100%', display: 'block'}}
                inputStyle={{color: '#424242'}}
              />
            </form>
          :
              <em>We are not able to Register New Users at this time...</em>
        }
      </div>
    );
  }
}

export default RegisterUser;