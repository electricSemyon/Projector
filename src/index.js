import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

import './styles/main.scss';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

injectTapEventPlugin();

class Root extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
