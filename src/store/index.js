import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import {reducer} from './reducer.js';
import {API_URL} from './actions';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware( thunk.withExtraArgument(API_URL) )
  )
)