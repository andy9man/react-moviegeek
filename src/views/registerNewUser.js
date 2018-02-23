import React, { Component } from 'react';
import { getUsers, addUser } from '../components/helper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Success from 'material-ui/svg-icons/action/check-circle';
import { lightGreen800 } from 'material-ui/styles/colors';


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
     .then( response => {
       this.setState({success: true});
     })
     .catch( error => {
       this.setState({error: "There was an issue creating your account"});
       console.log(error);
     })
  }

  handleInput = e => this.setState({[e.target.name]: e.target.value})
  handleUsernameInput = e => {
    const alreadyExists = this.state.users.find( item => item.username.toLowerCase().trim() === e.target.value.toLowerCase().trim() ) !== undefined;
    this.setState({username: e.target.value, error: alreadyExists ? "This username already exists, please try a different name" : undefined });
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render () {
    const { username, password, name, avatar, loadUsersSuccess, error, success } = this.state;

    return (
      <div style={{width: '100%', paddingLeft: 15, paddingRight: 15}}>
        <h3>Sign Up for Movie Geek</h3>

        <Paper style={{width: 'calc(100% - 45px)', margin: 15, padding: 30}} zDepth={2}>
        {
          loadUsersSuccess ?
            success ?
              <div style={{width: '100%', textAlign: 'center'}}>
                <Success style={{height: 250, width: 250, margin: '0 50px'}} color={lightGreen800} />
              </div>
            :
              <form
                style={{padding: '0 15px', maxWidth: 500}}
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
                  errorText={error}
                  value={username}
                  onChange={this.handleUsernameInput}
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
                  autoComplete="current-password"
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
                <span className="error">{error}</span>
                <RaisedButton disabled={error !== undefined} type="submit">Register</RaisedButton>
              </form>
          :
              <em>We are not able to Register New Users at this time...</em>
        }
        </Paper>
      </div>
    );
  }
}

export default RegisterUser;