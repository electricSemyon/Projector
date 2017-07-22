import React, {Component} from 'react';
import {Route} from 'react-router';
import Login from '../containers/login.container.jsx';
import Signup from '../containers/signup.container.jsx';
import Home from '../components/home/home.component.jsx';

const Routes =
  (<Route>
    <Route path="/" component={() => <div></div>}/>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
  </Route>);

export default Routes;
