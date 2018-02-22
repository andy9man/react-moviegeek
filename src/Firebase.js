
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAi-mCZrq928lqFnNHe-Qz9DDcVEUyzXvg",
    authDomain: "moviegeek-8f5a2.firebaseapp.com",
    databaseURL: "https://moviegeek-8f5a2.firebaseio.com",
    projectId: "moviegeek-8f5a2",
    storageBucket: "moviegeek-8f5a2.appspot.com",
    messagingSenderId: "513280888594"
  };
  export const  app = firebase.initializeApp(config);

  export const database = firebase.database().ref('posts/');
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const twitterProvider = new firebase.auth.TwitterAuthProvider();
