import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import projects from './projects';
import auth from './auth';
import boards from './boards';
import board from './board';

export default combineReducers({
  routing: routerReducer,
  auth,
  projects,
  boards,
  board
});
