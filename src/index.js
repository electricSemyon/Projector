import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import './style/main.scss';

import Routes from './routes/routes.jsx';
import App from './components/app.component.jsx';

const store = configureStore();
store.subscribe(() => console.log(store.getState()))
const history = syncHistoryWithStore(hashHistory, store);

history.listen(ev => console.log(ev))

injectTapEventPlugin();

class Root extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <App>
            <Router history={history}>
              {Routes}
            </Router>
          </App>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
