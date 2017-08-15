import React, {Component} from 'react';
import { CircularProgress } from 'material-ui/Progress';
import Show from '../utils/show.jsx';
import './loading-spinner.scss';

export default ({isLoading}) =>
  <Show ifTrue={isLoading}>
    <CircularProgress className="loading-spinner" size={50}/>
    <div className="loading-spinner-backdrop"> </div>
  </Show>
