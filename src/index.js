import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
} from 'react-router-dom';
import store from './store';
import App from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import movieGeekTheme from './components/theme';


const Root = () => {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <MuiThemeProvider muiTheme={movieGeekTheme}>
              <App />
            </MuiThemeProvider>
          </BrowserRouter>
      </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));