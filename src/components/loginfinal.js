import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { LOAD_USER } from '../store/actions';
import { getUsers } from './helper';
//import { login, getUser, googleLogin, twitterLogin } from '../Actions/UserActions';
//import ErrorAlert from '../Components/ErrorAlert';
import { auth, googleProvider, twitterProvider } from '../Firebase';

function login(email, password) {
    return dispatch => auth.signInWithEmailAndPassword(email, password);
  }
  
  function logout() {
    return dispatch => auth.signOut();
  }
  
  function createAccount(email, password) {
    return dispatch => auth.createUserWithEmailAndPassword(email, password);
  }
  
  function googleLogin() {
    return dispatch => auth.signInWithPopup(googleProvider);
  }
  



class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error:''
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
    const {email, password, users} = this.state;

    const user = users.find(user => user.email === email && user.password === password);
    user ? this.props.setUserLogin(user) : this.setState({error: "Invalid email or password."});
  }

  handleInput = e => {
    this.setState({[e.target.name]: e.target.value, error: ''});
  }

  componentDidMount() {
    this.loadUsers();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email !== undefined) {
      this.props.history.push('/');
    }
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  renderBody() {
    const errStyle = {
      borderColor: 'red'
    };


//login =()=>
  render() {
    const {email, password, error} = this.state;
    return (
      <div
        style={ {
          backgroundColor: '#263238',
          padding: 10,
          width: 195,
          overflow: 'hidden',
          visibility: this.props.user === undefined ? 'visible' : 'hidden',
        }}
      >
      <form onSubmit={event => { this.submitLogin(event);}}>
        <TextField
          style={ {width: 185} }
          id="email" type="text" label="Email"
                      inputAction={(event) => this.setState({ email: event.target.value })}
                      style={this.state.error ? errStyle : null}
        /><br/>
        <TextField
       id="password" type="password" label="Password"
       inputAction={(event) => this.setState({ password: event.target.value })}
       style={this.state.error ? errStyle : null}
        /><br/>
        <span className="error"> {this.state.error && <p>Your username/password is incorrect</p>}</span>
        <RaisedButton
          style={ {width: 195} }
          type="submit">Login</RaisedButton>

<RaisedButton
          style={ {width: 195} }
          type="submit" goToLink="/CreateAccount" {...this.props}>Login</RaisedButton>



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