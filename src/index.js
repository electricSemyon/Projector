import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

import configureStore from './store/configure-store';
import './style/main.scss';

const store = configureStore();

import Login from './containers/login.container.jsx';
import Signup from './containers/signup.container.jsx';

injectTapEventPlugin();

class Root extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={() => <div></div>} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
