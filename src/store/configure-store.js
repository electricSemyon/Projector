import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, routerMiddleware(hashHistory))(createStore);

export default (initialState) => createStoreWithMiddleware(rootReducer, initialState)
