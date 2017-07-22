import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))(createStore);

export default (initialState) => createStoreWithMiddleware(rootReducer, initialState)
