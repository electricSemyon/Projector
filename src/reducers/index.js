import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import projectsReducer from './projects-reducer';
import authReducer from './auth-reducer';

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  projects: projectsReducer
});
