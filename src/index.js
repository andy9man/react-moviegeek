import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
} from 'react-router-dom';
import store from './store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const Root = () => {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));