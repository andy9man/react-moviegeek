import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { LOAD_USER } from '../store/actions';
import { getUsers } from './helper';
//import { login, getUser, googleLogin, twitterLogin } from '../Actions/UserActions';
//import ErrorAlert from '../Components/ErrorAlert';
import { app, auth, googleProvider, twitterProvider } from '../Firebase';

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
      loginModalOpen: true,
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
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
   .then (response=>this.setState({loginModal: false}))
    .catch(err => {
      this.setState({
        error: err
      });
    })
  }

  renderBody() {
    const errStyle = {
      borderColor: 'red'
    };
}

render(){
    return (
      <div
        style={ {
          backgroundColor: '#263238',
          padding: 10,
          width: 290,
          overflow: 'hidden',
          visibility: this.props.user === undefined ? 'visible' : 'hidden',
        }}
      >
      <form onSubmit={event => { this.submitLogin(event);}}>
        <TextField
          style={ {width: 190} }
          id="email" type="text" label="Email"
          value = {this.state.email}
                      onChange={(event) => this.setState({ email: event.target.value })}
                      style={this.state.error ? "error" : null}
        /><br/>
        <TextField
       id="password" type="password" label="Password"
       onChange={(event) => this.setState({ password: event.target.value })}
       value = {this.state.password}
       style={this.state.error ? "errStyle" : null}
        /><br/>
        <span className="error"> {this.state.error && <p>Your username/password is incorrect</p>}</span>
        <RaisedButton
          style={ {width: 190} }
          type="submit">Login</RaisedButton>
          <br/>

<RaisedButton
          style={ {width: 190} }
          type="submit" goToLink="/CreateAccount" {...this.props}>Create Account</RaisedButton>



      </form>
      </div>
    )
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




export default connect(mapStateToProps,  { login, getUsers, googleLogin })(Login);